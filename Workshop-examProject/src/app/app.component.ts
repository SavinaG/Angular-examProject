import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap } from 'rxjs/operators';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //implements OnInit {
  // @ViewChild('filter', { static: true }) searchInput!: ElementRef;

  isReady$ = this.authService.isReady$;
  // users$!: Observable<any[]>;
  // apiUlr = 'https://jsonplaceholder.typicode.com/users';


  constructor(private authService: AuthService, private http: HttpClient) {
  }

  // ngOnInit(): void{
  //   this.users$ = 
  //   fromEvent<KeyboardEvent>(this.searchInput.nativeElement, 'keyup').pipe(
  //     map(e => (e.target as HTMLInputElement).value),
  //     debounceTime(300),
  //     startWith(''),
  //     distinctUntilChanged(),
  //     switchMap((inputValue: string) => {
  //       let url = this.apiUlr;
  //       if(inputValue) { url += `?name_like=${inputValue}`; }
  //       return this.http.get<any[]>(url);
  //     })
  //   );
  // }

}
