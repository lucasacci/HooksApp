import { useEffect, useState } from "react";
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formstate, setFormstate] = useState({
        username: 'strider',
        email: 'Lucasacci2@gmail.com'
    })


    const onInputChange = ( {target} ) => {
        
        const { name, value } = target;

        setFormstate({
            ...formstate,
            [name]:value,
        })

    }


    useEffect(()=>{
        console.log()
    })

  return (
    <>
      <h1>Formulario simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={formstate.username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-3"
        placeholder="Email"
        name="email"
        value={formstate.email}
        onChange={onInputChange}
        />
        {
            (formstate.username === 'strider2') && <Message/>
        }
    </>
  );
};
