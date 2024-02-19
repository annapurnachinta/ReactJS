import useSort from "../hooks/use-sort";
import Table from "./Table";
import {GoArrowDown, GoArrowUp} from 'react-icons/go'

function SortableTable(params) {
    const {config, data} = params
    const { sortBy, sortOrder, sortedData, setSortCol} = useSort(data, config)

    const updatedConfig = config.map((col) =>{
        if (!col.sortValue) {
            return col
        }
        return {
            ...col,
            header: () => <th onClick={()=> setSortCol(col.label)} className="cursor-pointer hover:bg-gray-100">
                    <div className="flex items-center">
                        {getIcons(col.label, sortBy, sortOrder)}
                        {col.label}
                    </div>
                </th>
        }
    })

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