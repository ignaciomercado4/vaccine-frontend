import axios from "axios";

function handleLogin() {
    let $inputs = document.querySelectorAll('input');

    let data = {
        "name": $inputs[0].value,
        "email": $inputs[1].value,
        "password": $inputs[2].value,
    }



    axios.post('http://localhost:8080/api/login', 
        data, 
        {headers: {"Content-Type": "application/json"}})
      .then(function (response) {
        console.log(response.data.token);
        sessionStorage.setItem("jwtToken", response.data.token)
      })
      .catch(function (error) {
        console.log(error);
      });
}

function Login() {
    return(
        <div>
            <form id="form">
                <input type="text" name="name" id="name" />
                <input type="email" name="name" id="email" />
                <input type="text" name="name" id="password" />
                <button type="button" onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
}

export default Login