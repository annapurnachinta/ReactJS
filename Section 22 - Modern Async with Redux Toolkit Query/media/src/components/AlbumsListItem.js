import ExpandablePanel from './ExpandablePanel'
import Button from './Button'
import { GoTrashcan } from "react-icons/go"
import { useDeleteAlbumMutation} from "../store"
import PhotosList from './PhotoList'

function AlbumsListItem({ album }) {
    const [delteAlbum, results] = useDeleteAlbumMutation(   )
    const handleDeleteClick = () =>{
        delteAlbum(album)
    }

    const header = <>
        <Button className='mr-3' loading={results.isLoading} onClick={handleDeleteClick}>
            <GoTrashcan/>
        </Button>
        {/* {error && <div>Error deleting user</div>} */}
        {album.title}</>

        return (<div>
            <ExpandablePanel key={album.id} header={header}>
                <PhotosList album={album} />
            </ExpandablePanel>
    </div>)
}

export default AlbumsListItem