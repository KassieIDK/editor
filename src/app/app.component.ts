import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'editor';
  isTextareaEnable: boolean = false;

  blogText: string = "";

  footerDate: number = new Date ().getFullYear();

  //Valores seleccionados
  selectedFront: string = "Arial";
  selectedSize: number = 12;
  selectedColor: string = "black";

  //Habilidad textarea
  enableTextarea(): void {
    this.isTextareaEnable = true;
  }
}
