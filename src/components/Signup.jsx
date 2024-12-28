import axios from "axios";

async function handleSignup() {
    let $inputs = document.querySelectorAll('input');

    let data = {
        "name": $inputs[0].value,
        "email": $inputs[1].value,
        "password": $inputs[2].value
    }

    axios.post("http://localhost:8080/api/signup", data, {headers: {"Content-Type": "application/json"}})
    .then(function (response) {
        console.log(response);
        })
}

const Signup = () => {
    return(
        <div>
            <form>
                <input type="text" name="name" id="name" />
                <input type="text" name="email" id="email" />
                <input type="text" name="password" id="password" />
                <button type="button" onClick={handleSignup}>Sign up</button>
            </form>
        </div>
    );
}

export default Signup