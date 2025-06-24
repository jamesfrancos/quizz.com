import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import questions from './../../../../public/data/questions.json';

@Component({
  selector: 'app-home-page',
  imports: [RouterModule,NgFor],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  standalone:true
})
export class HomePageComponent {
  quizz_list:any=questions;
}
