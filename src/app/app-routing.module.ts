import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewToDoComponent } from './components/view-to-do/view-to-do.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'view-todo', component: ViewToDoComponent },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

// const routes: Routes = [{
//   path: 'to-do',
//   component: AppComponent,
//   children: [
//     {
//       path: 'home',
//       component: HomeComponent,
//     },
//     {
//       path: 'view-todo',
//       component: ViewToDoComponent,
//     }
//   ]
// },
//  { path: '**', component: PagenotfoundComponent },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
