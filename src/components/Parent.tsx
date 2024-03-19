import React from 'react'
import {cards} from '../App'
import {Button} from './Form';
import {Card} from './First';

export const Parent = (props: any) => {

// const dupa = cards.filter();

// return (
//   <>
//   {dupa.map(() => <Card .../>)}
//   </>
// )

  const [filter, setFilter] = React.useState<string>('');

  return (
    <>
      {
      // TODO
      /**
       * <Cards filter={filter} />
       */
      cards.filter(card => card.name.includes(filter)).map(el=><Card key={el.id} {...el} />)
      }
      <Button setFilter={setFilter}/>
    </>
  )
}
