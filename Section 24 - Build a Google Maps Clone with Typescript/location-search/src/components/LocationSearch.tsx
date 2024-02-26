import type { Place } from "../api/Place"
import { Fragment, useState } from "react"
import { Search} from '../api/Search'

interface LocationSearchProps {
    onPlaceClick: (place: Place) => void
}

export default function LocationSearch({onPlaceClick}: LocationSearchProps) {
    const [term, setTerm] = useState('')
    const [places, setPlaces] = useState<Place[]>([])

    const handleSumbit = async (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()

        const results = await Search(term)
        setPlaces(results)
    }

    let content = places.map(place => {
        return <Fragment key={place.id}>
            <p className="text-sm">{place.name}</p>
            <button className="bg-blue-500 text-xs text-white font-bold py-1 px-1 rounded"
            onClick={() => onPlaceClick(place)}>
                Go
            </button>
            <div className="border-b w-full col-span-2">

            </div>
        </Fragment>
    })

    return (<div>
        <form onSubmit={handleSumbit}>
            <label className="font-bold" htmlFor="term">Search</label>
            <input className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 w-full" 
            id="term" value={term} onChange={e=>setTerm(e.target.value)}/>
        </form>

        <h1 className="font-bold mt-6"> Found Locations </h1>
        <div className="grid grid-cols-[1fr_40px] gap-2 mt-2 items-center">
            {content}
        </div>
    </div>)
}