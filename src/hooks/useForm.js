import React, { useState } from 'react'

export const useForm = ( initialForm ={} ) => {
 

    const [formstate, setFormstate] = useState(initialForm)


    const onInputChange = ( {target} ) => {
        
        const { name, value } = target;

        setFormstate({
            ...formstate,
            [name]:value,
        })

    }

    const onResetForm = () => {

        setFormstate(initialForm)
        console.log('first');
    }

    return{
        formstate, 
        onInputChange,
        onResetForm
    }

}
