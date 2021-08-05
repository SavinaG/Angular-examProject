import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { IUser } from '../shared/interfaces';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from '../core/auth.service';
import { USE_BASE_URL } from '../shared/constants';


@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
    ) { }

  getCurrentUserProfile(): Observable<any> {
    return this.http.get(`/users/profile`).pipe(
      tap(user => this.authService.updateCurrentUser(user as IUser)) 
    );
  }

  updateProfile(data: any): Observable<any> {
    return this.http.put(`/users/profile`, data).pipe(
      tap(user => this.authService.updateCurrentUser(user as IUser))
    );
  }
}

