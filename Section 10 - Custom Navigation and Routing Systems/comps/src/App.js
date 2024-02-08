import Button from "./Button"
import { GoBell } from "react-icons/go";

function handleClick(params) {
    console.log('click');
}

function App() {
    return (<><div>
        <Button primary rounded onClick={handleClick} className='mb-1'>
            <GoBell />
            Click 1</Button>
    </div><div>
            <Button secondary onMouseEnter={handleClick}>Click 2</Button>
        </div><div>
            <Button success onMouseLeave={handleClick}>Click 3</Button>
        </div><div>
            <Button warning>Click 4</Button>
        </div><div>
            <Button danger>Click 5</Button>
        </div></>)
}

export default App