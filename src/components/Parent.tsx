import React,{useState} from 'react'
import {cards} from '../App'
import {Button, SearchForm} from './Form';
import {Card} from './First';

export const Parent = () => {


  const [filteredCards,setFilteredCards]=useState(cards)

  const onSearch = (searchItem:string) => {
    const filteredCards=cards.filter(card => card.name.toLowerCase().includes(searchItem.toLowerCase()))
    console.log("filteredCards",filteredCards)
    setFilteredCards(filteredCards)
  }

  return (
    <>
        <SearchForm onSearch={onSearch}/>
      {
      
      filteredCards.map(el=><Card key={el.id} {...el} />)
      }
    </>
  )
}
