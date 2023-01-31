import { useEffect, useState } from "react"
import Card from "../Card"

function PublicIP({ipV6}) {
    const [ip, setIp] = useState("loading...")
    const [error,setError] = useState("")

    useEffect(()=>{
        fetch(`https://api${ipV6 ? "6" : "4"}.ipify.org?format=json`)
        .then(response=>response.json())
        .then((data)=>{console.log(data);setIp(data.ip)})
        .catch((err)=>{setError(err)})
    },[ipV6])
    return (
        <Card heading={`Public IPv${ipV6 ? "6" : "4"}`}>
            <p>{ip}</p>
        </Card>
    )
}

export default PublicIP