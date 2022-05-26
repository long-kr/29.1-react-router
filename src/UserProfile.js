import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
    
    // const params = useParams();
    // return <p>{JSON.stringify(params)}</p>

    const [user, setUser] = useState({});
    // Use `useParams()` and `useEffect()`
    // Load profile data from https://jsonplaceholder.typicode.com/users/${userId}
    //const params = useParams();
    const userid = useParams().id; // .id must match path of Route 

    useEffect(() => {
        setUser({});
        const abortController = new AbortController()

        async function loadUser() {
            try { 
                const data = await fetch(
                    `https://jsonplaceholder.typicode.com/users/${userid}`,
                    { signal: abortController.signal }
                )
                const userFromAPI = await data.json();
                //console.log(userFromAPI)
                setUser(userFromAPI);
            } catch (err) {
                throw err;
            }
            
        }
        
        loadUser();
        return () => abortController.abort();
    }, [userid]) // re-render after user id change
    //console.log(Object.entries(user))
    // No need to change anything below here
    if (user.id) {
        return Object.entries(user).map(([key, value]) => (
            <div key={key}>
                <label>{key}</label>: {JSON.stringify(value)}
                <hr />
            </div>
        ));
    }

    return "Loading....";
}

export default UserProfile;