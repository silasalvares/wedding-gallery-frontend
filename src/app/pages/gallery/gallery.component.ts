import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/service/image.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  images: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(`${environment.apiUrl}/`).subscribe((respose: any) => {
      this.images = respose;
    });
  }

}
