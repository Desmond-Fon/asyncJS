import React from 'react'

function Heading({ wine }) {
    return (
        <h1 className="text-2xl font-bold py-2"><span className="font-bold text-xl">Wine Name:</span> {wine.wine}</h1>
    )
}

export default Heading