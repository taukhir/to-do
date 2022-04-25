import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewToDoComponent } from './components/view-to-do/view-to-do.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'view-todo', component: ViewToDoComponent },
  // { path: '',   redirectTo: '/first-component', pathMatch: 'full' },
  // { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
