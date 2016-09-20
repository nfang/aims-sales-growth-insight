/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
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

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it(`should have as title 'app works!'`, async(() => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   let app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app works!');
  // }));
  //
  // it('should render title in a h1 tag', async(() => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   let compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('app works!');
  // }));
});
