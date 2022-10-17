import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";


export const FormWithCustomHook = () => {



  const { formstate, onInputChange, username, email, password, onResetForm } = useForm({
    username: '',
    email: '',
    password: ''
  });


  

    useEffect(()=>{
        console.log()
    })

  return (
    <>
      <h1>Formulario con custom hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-3"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
        />
      <input
        type="password"
        className="form-control mt-3"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
        />
       <button className="btn btn-primary mt-2" onClick={onResetForm}>Reset</button>
    </>
  );
};
