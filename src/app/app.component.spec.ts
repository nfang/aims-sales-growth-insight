/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CuboidComponent } from './cuboid/cuboid.component';
import { StackComponent } from './stack/stack.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DescriptionComponent } from './description/description.component';
import { InsightService } from './shared/insight.service';

const fakeInsightService = {
  objectives: [],
  categories: [],
  elements: [],
  findElementsFor: (objective) => {
    return [];
  }
};

let fixture: ComponentFixture<AppComponent>;
let component: AppComponent;

describe('App: Aims', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CuboidComponent,
        StackComponent,
        SidebarComponent,
        DescriptionComponent
      ],
      imports: [ ReactiveFormsModule ],
      providers: [
        { provide: InsightService, useValue: fakeInsightService }
      ]
    });
  });

  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should display logo', () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    let logoEl = fixture.debugElement.query(By.css('img.logo'));
    expect(logoEl).toBeTruthy();
  });

  it('should display app name', () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;

    let appNameEl = fixture.debugElement.query(By.css('.title'));
    let appSubtitleEl = fixture.debugElement.query(By.css('.subtitle'));
    expect(appNameEl.nativeElement.textContent).toContain('SALES AND GROWTH TOOL');
    expect(appSubtitleEl.nativeElement.textContent).toContain('an initiative of AIMS');
  });

  it('should have a sidebar', () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    let el = fixture.debugElement.query(By.directive(SidebarComponent));
    expect(el).toBeTruthy();
  });

  it('should have a stack', () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    let el = fixture.debugElement.query(By.directive(StackComponent));
    expect(el).toBeTruthy();
  });

  it('should have a description box', () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    let el = fixture.debugElement.query(By.directive(DescriptionComponent));
    expect(el).toBeTruthy();
  });

});
