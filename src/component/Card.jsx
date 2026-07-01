import React from 'react'
import { Link } from 'react-router-dom'
import Heading from './Heading'

function Card({wine}) {
  return (
      <Link to={`/details/${wine.id}?wineCategory=reds`} key={wine.id} className="flex flex-col items-center justify-center shadow-2xl rounded-xl p-4 hover:scale-105 transition-all duration-300 text-center">
          <img src={wine.image} className="h-[200px] w-[200px] object-contain" alt="" />
          <Heading wine={wine} />
          <h2 className="text-lg font-bold py-2">Winery: {wine.winery}</h2>
          <p className="text-sm">Locaton: {wine.location}</p>
      </Link>
  )
}

export default Card