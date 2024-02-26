interface UserProfileProps {
    name: string,
    job: string,
    email: string
}


function UserProfile({name, job, email}: UserProfileProps) {
    return (
        <div className='p-5 border-b boder-gray-200 max-w-sm mx-auto bg-white shadow-lg rounded'>
            <img src={`https://picsum.photos/seed/abcd/500/250`}
            className='w-full h-40 object-cover object-center rounded-t-lg'
            width="500" height="250"/>
            <div className='p-6'>
                <h2 className="text-2xl font-bold text-gray-800">My name</h2>
                <p className="text-gray-600">Engineer</p>
                <div className="mt-4">
                    <p className="text-gray-700">Email: me@gmail.com</p>
                </div>
            </div>
        </div>
    )
}