import { useEffect } from "react";

const useTitle = (title) =>{
   useEffect(()=>{
    document.title = `${title}|Global Talk`
   },[title])
}

export default useTitle;