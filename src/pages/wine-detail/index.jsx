import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'

function Details() {
    const {id} = useParams()
    const [searchParams] = useSearchParams()
    const [wine, setWine] = useState(null)
    const wineCategory = searchParams.get("wineCategory")
    
    useEffect(() => {
        async function fetchSingleWine () {
            try {
                const response = await fetch(`https://api.sampleapis.com/wines/${wineCategory}/${id}`)
                if (!response.ok) {
                    throw new Error("Failed to fetch wine")
                }
                const data = await response.json()
                setWine(data)
                toast.success("Wine fetched successfully")
            } catch (error) {
                setError(error.message)
                toast.error(error.message)
            }
        }
        fetchSingleWine()
    }, [])

  return (
    <div className='w-[80%] mx-auto py-20'>
        {wine && (
            <div className='flex flex-col items-center justify-center'>
                <img src={wine.image} alt={wine.wine} className='w-[200px] h-[200px] object-contain'/>
                <h1 className='text-2xl font-bold'>{wine.wine}</h1>
                <p className='text-sm'>{wine.description}</p>
                <p className='text-sm'>{wine.winery}</p>
                <p className='text-sm'>{wine.location}</p>
                <p className='text-sm'>{wine.rating.average}</p>
                <p className='text-sm'>{wine.rating.reviews}</p>
            </div>
        )}
    </div>
  )
}

export default Details