import { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Card from "../../component/Card"
import { DataContext } from "../../context/DataContext"

function Home() {
    const { wines, whites, loading } = useContext(DataContext)

    const [completeWines, setCompleteWines] = useState([])
    
    const [search, setSearch] = useState("")

    const handleSearch = (e) => {
        e.preventDefault()
        if (search.length > 0) {
            const filteredWines = wines.filter((wine) => wine.wine.toLowerCase().includes(search.toLowerCase()))
            setCompleteWines(filteredWines)
        } else {
            setCompleteWines(wines)
        }
    }

    useEffect(() => {
        setCompleteWines(wines)
        if (search.length > 0) {
            const filteredWines = wines.filter((wine) => wine.wine.toLowerCase().includes(search.toLowerCase()))
            setCompleteWines(filteredWines)
        } else {
            setCompleteWines(wines)
        }
    },[search])

    useEffect(() => {
        setCompleteWines(wines)
    },[wines])

    // localStorage.setItem('countryDetail', JSON.stringify(value))


    return (
        <main className="w-[80%] mx-auto py-20">
            {loading && <div className="flex justify-center items-center h-screen"><svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150"><path fill="none" stroke="#FF156D" stroke-width="15" stroke-linecap="round" stroke-dasharray="300 385" stroke-dashoffset="0" d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"><animate attributeName="stroke-dashoffset" calcMode="spline" dur="2" values="685;-685" keySplines="0 0 1 1" repeatCount="indefinite"></animate></path></svg></div>}

            <form onSubmit={handleSearch} className="flex gap-2 justify-center items-center mb-10">
                <input type="search" name="" id="" value={search} onChange={(e) => setSearch(e.target.value)} className="input-field" />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer">Search</button>
            </form>

            <div>
                <h2 className="text-2xl font-bold">Red Wines</h2>
                {completeWines && completeWines.length > 0 && <div className="grid lg:grid-cols-3 gap-4">
                    {completeWines.slice(0, 20).map((wine) => {
                        return (
                            <Card key={wine.id} wine={wine} />
                        )
                    })}
                </div>}
            </div>
            <div className="mt-20">
                <h2 className="text-2xl font-bold">White Wines</h2>
                <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
                    {whites.slice(0, 20).map((wine) => {
                        return (
                            <Link to={`/details/${wine.id}?wineCategory=whites`} key={wine.id} className="flex flex-col items-center justify-center shadow-2xl rounded-xl p-4 hover:scale-105 transition-all duration-300 text-center">
                                <img src={wine.image} className="h-[200px] w-[200px] object-contain" alt="" />
                                <h1 className="text-2xl font-bold py-2"><span className="font-bold text-xl">Wine Name:</span> {wine.wine}</h1>
                                <h2 className="text-lg font-bold py-2">Winery: {wine.winery}</h2>
                                <p className="text-sm">Locaton: {wine.location}</p>
                            </Link>
                        )
                    })}
                </div>
            </div>

        </main>
    )
}

export default Home