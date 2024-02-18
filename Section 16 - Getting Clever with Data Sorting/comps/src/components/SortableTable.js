import { useState } from "react";
import Table from "./Table";
import {GoArrowDown, GoArrowUp} from 'react-icons/go'

function SortableTable(params) {
    const {config, data} = params
    const [sortOrder, setSortOrder] = useState(null)
    const [sortBy, setSortBy] = useState(null)

    const handleClick = (label) => {
        if(sortBy && label !== sortBy){
            setSortBy(label)
            setSortOrder('asc')
            return
        }
        if(sortOrder === null){
            setSortOrder('asc')
            setSortBy(label)
        }else if (sortOrder === 'asc') {
            setSortOrder('desc')
            setSortBy(label)
        } else if(sortOrder === 'desc'){
            setSortOrder(null)
            setSortBy(null)
        }
    }

    const updatedConfig = config.map((col) =>{
        if (!col.sortValue) {
            return col
        }
        return {
            ...col,
            header: () => <th onClick={()=> handleClick(col.label)} className="cursor-pointer hover:bg-gray-100">
                    <div className="flex items-center">
                        {getIcons(col.label, sortBy, sortOrder)}
                        {col.label}
                    </div>
                </th>
        }
    })

    let sortedData = data
    if (sortOrder && sortBy) {
        const {sortValue} = config.find(col => col.label === sortBy)
        sortedData = [...data].sort((a,b)=> {
            const valueA = sortValue(a)
            const valueB = sortValue(b)

            const reverseOrder = sortOrder === 'asc'? 1 :-1

            if(typeof valueA === 'string'){
                return valueA.localeCompare(valueB) * reverseOrder
            }else{
                return (valueA - valueB) * reverseOrder
            }
        })   
    }

    return (<Table {...params} data={sortedData} config={updatedConfig}/>)
}

function getIcons(label, sortBy, sortOrder){
    if(label !== sortBy){
        return <div>
            <GoArrowUp />
            <GoArrowDown />
        </div>
    }

    if (sortOrder === null) {
        return <div>
        <GoArrowUp />
        <GoArrowDown />
    </div>
    } else if(sortOrder === 'asc'){
        return <div>
        <GoArrowUp />
    </div>
    }else if(sortOrder === 'desc'){
        return <div>
        <GoArrowDown />
    </div>
    }

}

export default SortableTable