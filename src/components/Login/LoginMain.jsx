import { useContext } from "react";
import Button from "../Button";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginMain() {
  const navigate = useNavigate();
  return (
    <main className="flex items-center w-full h-screen">
      <section className="flex flex-col w-full gap-10 px-7">
        <section className="flex flex-col gap-3">
          <h1 className="text-1.9rem font-bold leading-normal text-neutral-50">
            Happening now
          </h1>
          <p className="text-base font-medium leading-normal text-neutral-50">
            Join today.
          </p>
        </section>
        <a href="../login/create-account-step-1.html">
          <Button variant="default" size="md">
            Create Account
          </Button>
        </a>
        <div className="flex items-center">
          <hr className="flex-grow mr-2 border-t-2 border-neutral-700" />
          <span className="text-base leading-normal font-regular text-neutral-50">
            or
          </span>
          <hr className="flex-grow ml-2 border-t-2 border-neutral-700" />
        </div>
        <section className="flex flex-col gap-5">
          <p className="text-base font-medium leading-normal text-neutral-50">
            Already have an account?
          </p>

          <Button
            variant="outline"
            size="xl"
            onClick={() => navigate("/tweet")}
          >
            Sign in
          </Button>
        </section>
      </section>
    </main>
  );
}

export default LoginMain;
