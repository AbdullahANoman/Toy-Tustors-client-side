import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - ToyTutors`
    },[title])
}

export default useTitle ;