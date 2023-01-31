import { useState, useEffect } from "react"
import { w3cwebsocket as W3CWebSocket } from "websocket";
import Card from "../Card"

const WS_URL = "ws://localhost:55455"
const client = new W3CWebSocket(WS_URL);

function PacketLatency() {
    const [latency,setLatency] = useState("calculating...")
    
    useEffect(()=>{
        client.onmessage = (message) => {
            const clientTime = new Date().getTime()
            const serverTime = Number(message.data)
            setLatency(clientTime-serverTime+" ms")
        };
    },[])

    return (
        <Card heading="Packet Latency">
            <p>{latency}</p>
        </Card>
    )
}

export default PacketLatency