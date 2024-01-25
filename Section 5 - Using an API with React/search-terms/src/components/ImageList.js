import ImageShow from './ImageShow'
import './ImageList.css'

function ImageList({images}) {
    const reneredImages = images.map((image) => {
        return <ImageShow key={image.id} image={image}/>
    })

    return <div className='image-list'>{reneredImages}</div>
}

export default ImageList