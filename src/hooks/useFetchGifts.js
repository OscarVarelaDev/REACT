import React from 'react'
import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifts'

const useFetchGifts = (categoria) => {

    const [imagenes, setImagenes] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImagenes = async () => {
        const imgs = await getGifs(categoria);
        setImagenes(imgs);
        setIsLoading(false)
    }
    useEffect(() => {
        getImagenes();
    }, [])


    return {
        imagenes,
        isLoading: true
    }
}

export default useFetchGifts