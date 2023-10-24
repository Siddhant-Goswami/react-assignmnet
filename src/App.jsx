import { useContext } from "react";
import Login from "./pages/Login";
import Tweet from "./pages/Tweet";
import { AuthProvider } from "./context/AuthProvider";
import { AuthContext } from "./context/AuthContext";

function TwitterApp() {
  const { isLoggedIn } = useContext(AuthContext);

  return <>{isLoggedIn ? <Tweet /> : <Login />}</>;
}

function App() {
  return (
    <AuthProvider>
      <TwitterApp />
    </AuthProvider>
  );
}

export default App;
