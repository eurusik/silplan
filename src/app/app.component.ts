import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent, HeaderComponent } from '@sp/shell';

@Component({
  standalone: true,
  imports : [RouterModule, HeaderComponent, FooterComponent],
  selector: 'silplan-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'silplan';
}
