import { useEffect, useState } from 'react'

const useFetchUser = (url) => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)


    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            fetch(url)
                .then(response => {


                    console.log("response", response);

                    if (!response.ok) {
                        throw Error("fetch error")
                    }
                    return response.json()
                })
                .then(data => {
                    setData(data)
                    setIsLoading(false)
                }).catch((e) => {
                    setIsLoading(false)
                    setError(e)
                })
        }, 5000);

    }, [url])

    return {
        data,
        isLoading,
        error
    }

}

export default useFetchUser