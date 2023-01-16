import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifts'
import GiftItem from './GiftItem'
import useFetchGifts from '../hooks/useFetchGifts'

const GifGrid = ({ categoria }) => {
    const {imagenes,isLoading} = useFetchGifts(categoria)
    getGifs(categoria)
    return (
        <>
            <h3>{categoria}</h3>
            {
               !isLoading &&( <h2>Cargando ...</h2>)
            }
                <div className='card-grid'>
                    {
                        imagenes.map((imagen) => (
                            <GiftItem  key={imagen.id}
                            tile={imagen.title}
                            url={imagen.url}
                           
                            />
                        ))}
                </div>
            

        </>
    )
}

export default GifGrid