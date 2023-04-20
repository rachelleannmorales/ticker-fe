import { useEffect, useState } from "react";
import { WEBSOCKETS_API } from "../../../../constants";

const useWebSocket = () => {
    const [socket, setSocket] = useState(null) as any;
    const [data, setData] = useState(null) as any;
    useEffect(() => {
        const ws = new WebSocket(`${WEBSOCKETS_API}`);

        ws.onopen = () => {
          setSocket(ws);
        }
  
        ws.onmessage = (event) => {
            const payload = JSON.parse(event.data);
            setData(payload);
        }
        
        ws.onclose = () => {
            setSocket(null);
        }

        return () => {
          if (socket) {
            socket.close();
            setSocket(null);
          }
        }
      }, [])

      return data;
}

export default useWebSocket;