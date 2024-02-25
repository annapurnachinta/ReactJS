import { GoTrashcan } from "react-icons/go"
import Button from "./Button"
import { deleteUser} from "../store"
import { useThunk } from "../hooks/use-thunk"
import ExpandablePanel from "./ExpandablePanel"
import AlbumsList from "./AlbumsList"

function UsersListItem({user}) {
    const [doDelteUser, isLoading, error] = useThunk(deleteUser)
    const handleDeleteClick = () =>{
        doDelteUser(user)
    }

    const header = <>
    <Button loading={isLoading} onClick={handleDeleteClick} className='mr-3'>
            <GoTrashcan />
        </Button>
        {error && <div>Error deleting user</div>}
        {user.name}
    </>

    return (<ExpandablePanel header={header}>
        <AlbumsList user={user} />
    </ExpandablePanel>)
}

export default UsersListItem