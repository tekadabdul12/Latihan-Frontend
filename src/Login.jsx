import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {

    const [login, setlogin] = useState(null)
    const [username, setUsername] = useState(null)
    const [email, setEmail] = useState(null)

    const navigate = useNavigate();

    const handleNavigate = () => {
        // Navigasi ke halaman lain menggunakan navigate
        navigate('/profile');
    };

    const getlogin = async () => {
        try {
            fetch('https://jsonplaceholder.typicode.com/posts/10')
                .then((response) => response.json())
                .then((json) => console.log(json));

            console.log()

            if(username == 'Moriah.Stanton' && email == 'Rey.Padberg@karina.biz'){
                navigate('/profile');
            }
            

        } catch (error) {
            console.error('eror fetching data', error)
        }
    }



    return (
        <div>
            <h1>Halaman Login</h1>

            <h6>username: Moriah.Stanton</h6>
            <h6>Email : Rey.Padberg@karina.biz</h6>

            <label for="username">Username: </label>
            <input type="text" id="username" name="username" value={username}
                onChange={(e) => setUsername(e.target.value)} required></input>
            <br />
            <label for="email">email:  </label>
            <input type="email" id="email" name="email" value={email}
                onChange={(e) => setEmail(e.target.value)} required></input>

            <div>
                <button onClick={() => getlogin()}>Login</button>
            </div>

        </div>



    )
}

export default Login