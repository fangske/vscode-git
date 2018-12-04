import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListHeaderComponent } from './list-header/list-header.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { ListFooterComponent } from './list-footer/list-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListHeaderComponent,
    ListItemsComponent,
    ListFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
