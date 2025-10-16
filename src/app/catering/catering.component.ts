// src/app/catering/catering.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrls: ['./catering.component.scss']
})
export class CateringComponent implements OnInit {
  cateringMenu: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('assets/catering.json').subscribe({
      next: (data) => (this.cateringMenu = data),
      error: (err) => console.error('Error loading catering data:', err)
    });
  }
}
