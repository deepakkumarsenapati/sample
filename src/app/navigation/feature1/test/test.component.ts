import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  sampleText = 'Sample text';
  url = '';

  constructor() {}

  ngOnInit(): void {}

  loadImage(data: number) {
    if (data === 1) {
      this.url = 'assets/image1.webp';
    } else if (data === 2) {
      this.url = 'assets/image2.jpeg';
    } else if (data === 3) {
      this.url = 'assets/image3.jpeg';
    }
  }
}
