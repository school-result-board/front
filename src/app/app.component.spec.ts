import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AppService} from './app.service';
import SpyObj = jasmine.SpyObj;

describe('AppComponent', () => {
  let appServiceSpy: SpyObj<AppService>;
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    appServiceSpy = jasmine.createSpyObj('AppService', ['getResultForStudent']);
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [{provide: AppService, useValue: appServiceSpy}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
