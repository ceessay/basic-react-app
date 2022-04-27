import { useContext } from 'react'
import { UserContext } from './UserProvider'


const DisplayUsers = () => {

    const { data } = useContext(UserContext)

    return (
        <div>
            {data && data.length ?
                (
                    <ul>
                        {data.map(user => <li>{`${user.id} -- ${user.title}`}</li>)}
                    </ul>
                ) : null

            }
        </div>
    )
}

export default DisplayUsers