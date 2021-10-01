import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.scss']
})
export class ApprovalComponent implements OnInit {

  images: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loadImages();
  }

  private loadImages() {
    this.http.get(`${environment.apiUrl}/approve`, this.loadOptions()).subscribe(
      (r: any) => {
        this.images = r;
      },
      (err: any) => {
        this.router.navigateByUrl('/login');
      }
    )
    
  }

  approve(key:any)  {

    this.http.post(`${environment.apiUrl}/${key}/approve`, {}, this.loadOptions()).subscribe(() => {
      this.loadImages();
    });
  }

  private loadOptions() {
    let password: any = localStorage.getItem('Password');
    const httpOptions = {
      headers: new HttpHeaders({
        'Password': password
      })
    };

    return httpOptions;
  }

}
