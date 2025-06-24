import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { QuizzPageComponent } from './pages/quizz-page/quizz-page.component';

export const routes: Routes = [{
    path:'',
    component:HomePageComponent,
    pathMatch:'full'
},{
    path:'quizz/:id',
    component:QuizzPageComponent,
    pathMatch:'full'
}];
