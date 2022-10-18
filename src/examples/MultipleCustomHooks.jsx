import React from 'react'
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch'
import { Loading } from './Loading';
import { Quote } from './Quote';

export const MultipleCustomHooks = () => {

    const { counter, increment} = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0];


    const handleQuote = () =>{

        useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    }

  return (
   <>
        <h1>Breaking Bad Quotes</h1>
        <hr />

        {
            (isLoading)
            ?(
                <Loading/>
            )
            :(
                <Quote author={author} quote={quote}/>
            )
        }

        <button className='btn btn-primary' onClick={()=>increment(1)} disabled={isLoading}>Next quote</button>

        
   </>
  )
}
