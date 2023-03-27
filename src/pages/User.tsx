import { Input } from "@mui/material";
import { useEffect, useState } from "react";

export function User() {
    const [users, setUser] = useState([])
    const [userId, setUserId] = useState(1);
    const fetchData = (id:number) => {
        console.log('useEffect');
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(json => setUser(json))
    }
    useEffect(() => {
        fetchData(userId)
    }, [userId])
    return (
        <div>
            <Input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
            <button onClick={() => fetchData(userId)}>Load User</button>
            <h1>User</h1>
            <div>{JSON.stringify(users)}</div>
        </div>
    );
}
