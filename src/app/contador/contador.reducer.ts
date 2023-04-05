import { createReducer, on } from '@ngrx/store';
import { incrementar, decrementar, multiplicar, dividir, reset } from './contador.actions';

/* export function contadorReducer (state: number = 10, action: Action) {
    switch(action.type){
        case incrementar.type:
            return state + 1;
        case decrementar.type:
            return state - 1;
        
        default:
            return state;
    }
} */

//el código anterior es una forma manual de armar un reducer, pero hay herramientas de la libreria
//ngrx que son mas simples y eficientes:
export const initialState = 20;
const _contadorReducer =createReducer(initialState,
    on(incrementar, state => state + 1),
    on(decrementar, state => state - 1),
    on(reset, state => initialState),
    //on(multiplicar, (state, props) => state * props.numero) <-- se puede poner asi, pero con la desestructuracion es mas simple
    on(multiplicar, (state, {numero}) => state * numero),
    on(dividir,(state, {numero}) => state / numero)
);

export function contadorReducer(state:any, action:any) {
    return _contadorReducer(state, action);
}