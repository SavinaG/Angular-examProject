import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IUser } from '../shared/interfaces';

@Injectable()
export class AuthService {

  private _currentUser: BehaviorSubject<IUser | null> = new BehaviorSubject<IUser | null>(null);
  currentUser$ = this._currentUser.asObservable();
  public isLogged$ = this.currentUser$.pipe(map(user => !!user));
  isReady$ = this.currentUser$.pipe(map(user => user !== undefined));

  constructor(private http: HttpClient) { }

  updateCurrentUser(user: IUser): void {
    this._currentUser.next(user);
  }

  login(data: any): Observable<any> {
    return this.http.post(`/users/login`, data).pipe(
      tap(user => this._currentUser.next(user as IUser))
    );
  }

  register(data: any): Observable<any> {
    return this.http.post(`/users/register`, data).pipe(
      tap(user => this._currentUser.next(user as IUser))
    );
  }

  logout(): Observable<any> {
    return this.http.post(`/users/logout`, {}).pipe(
      tap(user => this._currentUser.next(null))
    );
  }

  authenticate(): Observable<any> {
    return this.http.get(`/users/profile`).pipe(
      tap(user => this._currentUser.next(user as IUser)),
      catchError(() => { 
        this._currentUser.next(null); 
        return [null]; 
      })
    );
  }

}
