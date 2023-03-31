import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Input() contador!: number;
  @Output() cambioContador: EventEmitter<number> = new EventEmitter();

  multiplicar(){
    this.contador *= 2;
    this.cambioContador.emit(this.contador);
  }
  dividir(){
    this.contador /= 2;
    this.cambioContador.emit(this.contador);
  }
  resetNieto(nuevoContador:any){
    this.contador= nuevoContador;
    this.cambioContador.emit(this.contador);
  }
}
