
import { createContext } from "react"
import useFetchUser from "./useFetchUser"

export const UserContext = createContext([])



function UserProvider({ children }) {

    const { data, isLoading, error } = useFetchUser('https://jsonplaceholder.typicode.com/todos')

    return (
        <UserContext.Provider value={{ data, isLoading, error }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider