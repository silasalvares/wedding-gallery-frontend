import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  password: string = '';

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  login() {
    let data = {'password': this.password};
    this.http.post(`${environment.apiUrl}/login`, data).subscribe((r:any  )=> {
      localStorage.setItem('token', r.token);
      this.router.navigateByUrl('approval');
    });
    
  }
}
