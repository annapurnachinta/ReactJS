import Table from "../components/Table"

function TablePage(params) {
    const data = [
        {name: 'Orange', color: 'bg-orange-300 border-orange-500 border-4', score: 5},
        {name: 'Apple', color: 'bg-red-300 border-red-500 border-4', score: 3},
        {name: 'Banana', color: 'bg-yellow-300 border-yellow-500 border-4', score: 1},
        {name: 'Lime', color: 'bg-green-300 border-green-500 border-4', score: 4},        
        {name: 'Blue Breey', color: 'bg-blue-300 border-blue-500 border-4', score: 2},
    ]

    const config = [
        {label: 'Fruits', 
        render: (fruit) => fruit.name},
        {label: 'Color', 
        render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>},
        {label: 'Score', 
        render: (fruit) => fruit.score}
    ]

    const keyFn = (fruit) => {
        return fruit.name
    }

    return (<Table data={data} config={config} keyFn={keyFn}/>)
}

export default TablePage