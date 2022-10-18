import React from 'react'
import ReactDOM from 'react-dom/client'
import { MultipleCustomHooks } from './examples/MultipleCustomHooks'
import { HooksApp } from './HooksApp'
import './index.css'
import { FormWithCustomHook } from './useEffect/FormWithCustomHook'
import { SimpleForm } from './useEffect/SimpleForm'
import { CounterApp } from './useState/CounterApp'
import { CounterCustomHook } from './useState/CounterCustomHook'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <MultipleCustomHooks/>
  // </React.StrictMode>
)
