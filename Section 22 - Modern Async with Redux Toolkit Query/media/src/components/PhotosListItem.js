import { GoTrashcan } from "react-icons/go"
import { useDeletePhotoMutation} from "../store"

function PhotosListItem({ photo }) {
    const [deletePhoto] = useDeletePhotoMutation()
    const handleDeleteClick = () =>{
        deletePhoto(photo)
    }

    return (<div className='relative cursor-pointer m-2' onClick={handleDeleteClick}>
        <img className='h-20 w-20' src={photo.url} alt='randowm pics'/>
        <div className='absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80'>
            <GoTrashcan className='text-3xl' />
        </div>
    </div>)
}

export default PhotosListItem