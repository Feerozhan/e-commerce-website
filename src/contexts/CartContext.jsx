import React, { createContext, useContext, useReducer, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const CartContext = createContext()

function cartReducer(state, action){
  switch(action.type){
    case 'ADD': {
      const item = action.payload
      const exists = state.find(i => i.id === item.id)
      if(exists){
        return state.map(i => i.id === item.id ? {...i, qty: i.qty + item.qty} : i)
      }
      return [...state, item]
    }
    case 'REMOVE':
      return state.filter(i => i.id !== action.payload)
    case 'UPDATE_QTY':
      return state.map(i => i.id === action.payload.id ? {...i, qty: action.payload.qty} : i)
    case 'CLEAR':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }){
  const [stored, setStored] = useLocalStorage('cart', [])
  const [state, dispatch] = useReducer(cartReducer, stored || [])

  useEffect(()=>{
    setStored(state)
  },[state])

  const addToCart = (item) => dispatch({type:'ADD', payload:item})
  const removeFromCart = id => dispatch({type:'REMOVE', payload:id})
  const updateQty = (id, qty) => dispatch({type:'UPDATE_QTY', payload:{id, qty}})
  const clearCart = () => dispatch({type:'CLEAR'})

  const total = state.reduce((s, i)=> s + (i.price * i.qty), 0)

  return (
    <CartContext.Provider value={{cart:state, addToCart, removeFromCart, updateQty, clearCart, total}}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart(){
  return useContext(CartContext)
}
