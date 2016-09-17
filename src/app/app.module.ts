import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CuboidComponent } from './cuboid/cuboid.component';
import { StackComponent } from './stack/stack.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DescriptionComponent } from './description/description.component';
import { InsightService } from './insight.service';

@NgModule({
  declarations: [
    AppComponent,
    CuboidComponent,
    StackComponent,
    SidebarComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [InsightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
