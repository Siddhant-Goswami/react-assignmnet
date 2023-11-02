import Header from "../components/Login/LoginHeader";
import LoginMain from "../components/Login/LoginMain";
import { userLogin } from "../services/authservice";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { setAuthToken } = useAuth();

  const handleLogin = async () => {
    const email = "batman@example.com";
    const password = "gothamrocks";

    try {
      const response = await userLogin(email, password);
      // save response.token in context
      if (response) setAuthToken(response.token);

      // navigate it to /home

      console.log("response from login ", response);
    } catch (error) {
      // show error message on the same screen
    }
  };
  return (
    <div className="bg-neutral-1000">
      <Header />
      <LoginMain onSignIn={handleLogin} />
    </div>
  );
}

export default Login;
