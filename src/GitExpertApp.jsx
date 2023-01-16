import { useState } from 'react'
import AddCategoria from './components/AddCategoria'
import GifGrid from './components/GifGrid'

const GitExpertApp = () => {
    const [categorias, setCategorias] = useState([])


    const onNewValue = (onNewValue) => {
    
      if(categorias.includes[onNewValue])return
        else{
        setCategorias([onNewValue,...categorias])
    }
}

    return (
        <>
            <h1>Api de Giphy </h1>
            <AddCategoria
                onNewValue={onNewValue}/>
            <hr />
         
        {categorias.map((categoria) => {
            return <GifGrid
                key={categoria}
                categoria={categoria} />   
        })
        }
        <GifGrid/>
        
        </>
    )
}

export default GitExpertApp