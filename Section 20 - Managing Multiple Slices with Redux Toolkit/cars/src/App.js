import CarForm from "./components/CarForm"
import CarList from "./components/CarList"
import CarSearch from "./components/CarSearch"
import CarValue from "./components/CarValue"


function App(params) {
    return <div className="container is-fuild">
        <CarForm />
        <CarSearch />
        <CarList />
        <CarValue />
    </div>
}

export default App