import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Result} from './model/result';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  result: Observable<Result>;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.result = this.appService.getResultForStudent('1');
  }
}
