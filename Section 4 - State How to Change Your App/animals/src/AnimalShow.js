import {useState} from 'react'
import './AnimalShow.css'
import bird from './svg/bird.svg'
import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import heart from './svg/heart.svg'
import horse from './svg/horse.svg'

const SvgMap = {
    bird, cat, cow, dog, gator, horse
}   

function AnimalShow({type}) {
const [count, setCount] = useState(0)

const handleClick = () =>{
  setCount(count+1)
}

    return (
        <div onClick={handleClick} className='animal-show'>
            <img alt='animal' src={SvgMap[type]} className='animal'/>
            <img alt='heart' src={heart} style={{width: 10 + 10 * count + 'px'}} className='heart'/>
        </div>)
        
}

export default AnimalShow