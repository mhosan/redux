import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador/contador.actions';

interface AppState {
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador!: number;

  constructor( private store: Store<AppState>){
    //con esta subscripcion estoy escuchando todo. El state o el compomente puede tener
    //muchas ramificaciones y de este modo estoy escuchando todo
    //this.store.subscribe(state =>{
    //  console.log(state);
    //  this.contador = state.contador;
    //});

    //pero puedo escuchar algo especificamente e ignorar todo lo demas. Para esto el store
    //tiene un metodo "select" para seleccionar el nodo que quiero escuchar. En este caso 
    //seria el contador:
    this.store.select('contador').subscribe(contador =>{
      console.log(`contador: ${contador}`);
      this.contador = contador;
    })

  }

  incrementar(){
    this.store.dispatch( actions.incrementar());
  }

  decrementar(){
    this.store.dispatch( actions.decrementar());
  }
}
