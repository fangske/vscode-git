import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListHeaderComponent } from './list-header/list-header.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { ListFooterComponent } from './list-footer/list-footer.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    ListHeaderComponent,
    ListItemsComponent,
    ListFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
