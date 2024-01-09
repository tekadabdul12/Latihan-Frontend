import { Avatar, Box, CircularProgress } from "@mui/material";
import { useState } from "react";


function Nama(props) {
    const [isloading, setIsloading] = useState(false)
    const [name, setName] = useState("")
    const [profileData, setProfileData] = useState(null)


    const getProfile = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
            const result = await response.json()
            setProfileData(result)
        } catch (error) {
            console.error('eror fetching data', error)
        }
    }

    function showMyName() {
        setIsloading(true)
        setName("")
        setTimeout(() => {
            setName("Aulia")
            setIsloading(false)
        }, 3000)
    }
    return (




        <div style={{ margin: '10px' }}>
            

            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>

            <button onClick={() => showMyName()}>
                {isloading ? 'loading...' : 'munculkan nama saya :'} {name}

            </button>


            <button onClick={() => getProfile()}>

                {'json tes button'} {profileData && <div>{profileData.name}</div>}

            </button>



        </div>


    )
}

export default Nama;