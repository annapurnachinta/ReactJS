import { useState } from "react"
import { GoChevronDown, GoChevronLeft } from "react-icons/go"

function ExpandablePanel({header, children}) {
    const [expanded, setExpanded ] = useState(false)
    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    return (
    <div className='mb-2 border rounded'>
        <div className='flex p-2 justify-between items-center'>
            <div className='flex flex-row justify-between items-center'>
                {header}
            </div>
            <div onClick={handleExpandClick} className=" cursor-pointer">
            {expanded ? <GoChevronDown /> : <GoChevronLeft />}
            </div>
        </div>
        { expanded && <div className="p-2 border-t">{children} </div>}
    </div>)
}

export default ExpandablePanel