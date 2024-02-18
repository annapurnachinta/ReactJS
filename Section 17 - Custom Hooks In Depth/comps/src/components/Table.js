import {Fragment} from 'react'
function Table({data, config, keyFn}) {
    const renderedCol = config.map((col) => {
        if(col.header){
            return <Fragment key={col.label}>{col.header()}</Fragment>
        }
        return (<th key={col.label}>{col.label}</th>)
    })

    const renderedRow = data.map((rowData)=> {
        // return (<tr key={fruit.name} className='border-b'>
        //     <td className='p-3'>{fruit.name}</td>
        //     <td className='p-3'>
        //         <div className={`p-3 m-2 ${fruit.color}`}>
        //         </div></td>
        //     <td className='p-3'>{fruit.score}</td>
        // </tr>) 

        const renderedCell = config.map((column)=>{
            return (<td className='p-3' key={column.label}>{column.render(rowData)}</td>)
        })

        return (<tr key={keyFn(rowData)} className='border-b'>{renderedCell}</tr>)
    })

    return (<div className='pr-10'>
        <table className='table-auto border-spacing-2 pr-5'>
            <thead>
                <tr className='border-b-2' >
                {renderedCol}
                </tr>
            </thead>
            <tbody>
                {renderedRow}
            </tbody>
        </table>
    </div>)
}

export default Table