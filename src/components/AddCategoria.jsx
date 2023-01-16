import React, { useState } from 'react'

const AddCategoria = ({ onNewValue }) => {
    const [inputValue, setInputValue] = useState()


    const onInputChange = ({ target }) => { 
        setInputValue(target.value)

    }
    const onAddLenguaje = (event) => {
        event.preventDefault()
        if (inputValue.trim().length <= 1) return
        onNewValue(inputValue.trim());
        setInputValue("");

    }
    return (
        <form onSubmit={onAddLenguaje}>
            <input
                type="text"
                placeholder='Ingresa un parametro para iniciar la busqueda'
                value={inputValue}
                onChange={onInputChange} />
        </form>
    )
}

export default AddCategoria