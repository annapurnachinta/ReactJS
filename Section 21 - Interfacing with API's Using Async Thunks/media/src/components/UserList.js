import { useEffect } from 'react'
import {useSelector} from 'react-redux'
import { fetchUsers, addUser, deleteUser} from '../store'
import Skeleton from './Skeleton'
import Button from './Button'
import {useThunk} from '../hooks/use-thunk'
import UsersListItem from './UsersListItem'

function UserList() {
    const [doFetchUser, isLoadingUsers, loadingUsersError ] = useThunk(fetchUsers)
    const [doCreateUser, isCreatingUsers, creatingUsersError ] = useThunk(addUser)

    const {data } = useSelector((state) => {
        return state.users;
      });

    useEffect(() => {
        doFetchUser()
    }, [doFetchUser])

    const handleAddUser = () =>{
        doCreateUser()
    }

    let content;

    if(isLoadingUsers){
        content = <Skeleton times={6} className='h-10 w-full'/>
    } else if(loadingUsersError){
        content = <div>Error fetching data...</div>
    } else{
        content = data.map((user) => {
            return <UsersListItem key={user.id} user={user}/>
        })
    }

    return (<div>
        <div className='flex flex-row justify-between items-center m-3'>
            <h1 className='m-2 text-xl'>Users</h1>
            <Button loading={isCreatingUsers} onClick={handleAddUser}>+ Add User</Button>
            {creatingUsersError && 'Error creating user'}
        </div>
        {content}
    </div>)
}

export default UserList