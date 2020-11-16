import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TextComponent } from './text/text.component';
import { ImagesComponent } from './images/images.component';

import { FruitsService } from './fruits.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { ParaComponent } from './para/para.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TextComponent,
    ImagesComponent,
    ParaComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatGridListModule,
    MatListModule,
    MatCardModule
  ],
  providers: [FruitsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
