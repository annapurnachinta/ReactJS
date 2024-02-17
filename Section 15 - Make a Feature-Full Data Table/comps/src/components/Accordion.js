import {useState} from 'react'
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({items}) {
    const [expandedIndex, setexpandedIndex ] = useState(-1)

    const handleClick = (nextIndex) => {
        setexpandedIndex((currentExpandedIndex) => {
            if(currentExpandedIndex === nextIndex){
                return -1
            }else{
                return nextIndex
            }
        })
    }

    const renederItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex
        const icon = <span className='text-2xl'>
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </span>

        return <>
            <div key={item.id}>
                {/* <div onClick={() => setexpandedIndex(index)}>{item.label}</div> */}

                <div className='flex justify-between p-3 bg-gray-50 border-b item-center cursor-pointer' onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}</div>

                {isExpanded && <div  className='border-b p-5'>{item.content} </div>}
            </div>
        </>
    })
    return (<div className='border-x border-t rounder'>
        {renederItems}
    </div>)
}

export default Accordion