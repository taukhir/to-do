import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToDoItemsComponent } from './components/to-do-items/to-do-items.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { ViewToDoComponent } from './components/view-to-do/view-to-do.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ToDoItemsComponent,
    ToDoListComponent,
    AddTodoComponent,
    ViewToDoComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  // exports: [AppRoutingModule, AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
