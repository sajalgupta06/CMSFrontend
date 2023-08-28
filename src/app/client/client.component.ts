import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements AfterViewInit {
  responseMessage: any;
  data: any;
  ngAfterViewInit() {}

 
}
