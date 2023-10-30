import Header from "../components/Login/LoginHeader";
import LoginMain from "../components/Login/LoginMain";

function Login() {
 

  return (
    <div className="bg-neutral-1000">
      <Header />
      <LoginMain />
    </div>
  );
}

export default Login;

// fetch("https://one00x-react-backend.onrender.com/login", {method:"POST",headers: {
//     'Content-Type': 'application/json'
// },  body: JSON.stringify({ email: "batman@example.com", password: "gothamrocks" })})
//     .then((response) => response.json())
//     .then((json) => console.log(json));