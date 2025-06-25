import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useState } from "react";
import {Api_Backend_Url} from "@/config"

interface Website{
    id : string,
    url : string,
    ticks : {
        id: string,
        createdAt : string,
        status : string,
        latency : number
    }[]
}

export function useWebsites(){
    const {getToken} = useAuth()
    const [websites,setwebsites ] = useState<Website[]>([]);

    async function refreshWebsites(){
        const token = await getToken();
        try{
        const response = await axios.get(`${Api_Backend_Url}/api/v1/website`,{
            headers :{
                Authorization : token
            }
        })
        setwebsites(response.data.websites)
    }catch(w){
        alert(w)
    }
    }



useEffect(() => {
    refreshWebsites()

    const interval = setInterval(() => {
        refreshWebsites();
    },1000 * 60 * 1);

    return ()=> clearInterval(interval)
},[])

return { websites,refreshWebsites}
}