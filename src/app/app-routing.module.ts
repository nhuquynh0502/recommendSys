import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResysForUserComponent } from './resys-for-user/resys-for-user.component';
import { ResysForMovieComponent } from './resys-for-movie/resys-for-movie.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'resysforuser/:id', component: ResysForUserComponent },
  { path: 'resysformovie/:movieId', component: ResysForMovieComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
