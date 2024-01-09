import { useEffect, useState } from "react"
import * as React from 'react';
import Button from '@mui/material/Button';



const Profile = () => {
    const [profileData, setProfileData] = useState(null)
    
    const [userid, setUserid] = useState(null)
    const [id, setid] = useState(null)
    const [title, settitle] = useState(null)
    const [body, setbody] = useState(null)


    const getlogin = async () => {
        try {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    body: body,
                    userId: userid,
                    id: id
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    console.log(json)
                    alert(JSON.stringify(json))
                });

        } catch (error) {
            console.error('eror fetching data', error)
        }
    }

    useEffect(() => {
        const getProfile = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                const result = await response.json()
                setProfileData(result)
            } catch (error) {
                console.error('eror fetching data', error)
            }
        }

        getProfile()
    }, [])

    return (
        <div>
            <h1>CRUD</h1>

            {/* <Button variant="contained">Hello world</Button> */}
            <br />

            <div>
                

                <label for="userid">userid: </label>
                <input type="text" id="userid" name="userid" value={userid}
                    onChange={(e) => setUserid(e.target.value)} ></input>
                <br />
                <label for="id">id : </label>
                <input type="text" id="id" name="id" value={id}
                    onChange={(e) => setid(e.target.value)} ></input>
                <br />
                <label for="title">title    : </label>
                <input type="text" id="title" name="title" value={title}
                    onChange={(e) => settitle(e.target.value)} ></input>
                <br />
                <label for="body">body: </label>
                <input type="text" id="body" name="body" value={body}
                    onChange={(e) => setbody(e.target.value)} ></input>
                <br />

                <div>
                    <button onClick={() => getlogin()}>Post</button>
                </div>

            </div>

            <div>
                <br />
                <h2>Get List</h2>
            </div>
            <div>

                {profileData && <div>
                    {profileData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>
                    ))}

                </div>}

            </div>
        </div>
    )
}

export default Profile