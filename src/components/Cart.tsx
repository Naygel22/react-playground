/*
Stwórz reducer, który pozwoli na następujące akcje:

- dodawanie produktu do koszyka
- usuwanie produktu z koszyka
- zmienianie ilości produktu w koszyku
- wyczyszczenie koszyka
  W zadaniu chodzi o samą logikę, natomiast jeśli chcesz możesz przygotować też widok.
*/

import { useReducer } from "react";

type Product={
    name: string;
    price: number;
    id: number;
}

type Cart=Product & {quantity: number}

type ActionType=
| {type:"increment";payload: {id: Cart["id"]}}
| {type:"decrement";payload: {id:Cart["id"]}}
| {type:"change";payload: {id: Cart["id"], newQuantity: number}}
| {type:"clear";}

const initialState:Cart[] = [];

function reducer(state: Cart[], action:Readonly<ActionType>):typeof initialState {
  switch (action.type) {
   case "increment":
    //czy jest w koszyku
    const isInCart=state.find(product=>product.id===action.payload.id)
    //jak jest to ten sam produkt +1
    if(isInCart){
        const newProducts= state.map(product =>
                    product.id === action.payload.id
                        ? { ...product, quantity: product.quantity + 1}
                        : product
                );
        return newProducts
        //jak nie ma to dodac do tablicy
    }else{
        const newProduct=products.find(product=>product.id===action.payload.id)
        if(newProduct){
            return [...state, {...newProduct, quantity: 1}]
        }
    }
    return state;
   case "decrement":
     //czy jest w koszyku
     const productToDecrement = state.find(product => product.id === action.payload.id);
    //jak jest to ten sam produkt -1 i sprawdzić czy nie jest 0, bo jak jest to trzeba go usunąć z koszyka
    if(productToDecrement && productToDecrement.quantity > 1){
        const newProducts = state.map(product =>
            product.id === action.payload.id
                ? { ...product, quantity: product.quantity - 1 }
                : product
        );
        return newProducts
        //jak nie ma to dodac do tablicy
    }else {
        return state.filter(product => product.id !== action.payload.id);
    }
    //jak nie ma to nic nie robisz
 
    case "change":
    const productsToChange = state.find(product => product.id === action.payload.id);
    if (productsToChange) {
        return state.map(product =>
            product.id === action.payload.id
                ? { ...product, quantity: action.payload.newQuantity }
                : product
        );
    }
    // Jeśli produkt znajduje się już w koszyku, aktualizujemy jego ilość na nową wartość (action.payload.newQuantity).
    // W przeciwnym razie, nic nie robimy, zwracamy stan koszyka bez zmian.
    return state;

    
   case "clear":
    return [];
   default:
    throw new Error("Bad action type")
  }

}

const products:Product[]=[
    {
        name: "Mleko",
        price: 10,
        id: 1,
    },
    {
        name: "Marchew",
        price: 10,
        id: 2,
    }
]


export const Cart = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log("state",state)
  return (
    <div>
        <p>Produkty:</p>
        {products.map(product=><>{product.name}<button onClick={()=>dispatch({type: "increment",payload: {id: product.id}})}>Increment</button></>)}

        <p>Koszyk:</p>
        {state.map(product=><div> <button onClick={()=>dispatch({type: "decrement",payload: {id: product.id}})}>Decrement</button>{product.name}<button onClick={()=>dispatch({type: "increment",payload: {id: product.id}})}>Increment</button></div>)}
        
   
     <button onClick={()=>dispatch({type: "change",payload: {id: 1, newQuantity: 10}})}>Change</button> 
     <button onClick={()=>dispatch({type: "clear"})}>Clear</button>
    </div>
  )
}
