import { loginRequest, profileRequest } from "../api/auth";
import { useAuthStore } from "../store/auth";
import { Link, useNavigate } from "react-router-dom";
import { Input, Card } from "antd";
import LoginForm from "../components/login/LoginForm";
import CommonCard from "../components/common/CommonCard";

function LoginPage() {
  const setToken = useAuthStore((state) => state.setToken);
  const setProfile = useAuthStore((state) => state.setProfile);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.elements[0].value;
    const password = e.currentTarget.elements[1].value;

    const resLogin = await loginRequest(email, password);
    setToken(resLogin.data.token);

    const resProfile = await profileRequest();
    setProfile(resProfile.data);

    navigate("/dashboard");
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex flex-col items-center justify-center lg:w-1/2 bg-white">
        <h1 className="text-5xl text-black font-semibold">Welcome</h1>
        <div className="w-full lg:w-1/2 m-5">
          <CommonCard>
            <LoginForm />
          </CommonCard>
        </div>
        {/* <Card className="w-full lg:w-1/2 m-5" hoverable>
          <LoginForm />
        </Card> */}
      </div>
      <div className="hidden lg:flex h-full w-full items-center lg:w-1/2 justify-center bg-black">
        <img
          className="h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=white"
          alt=""
        />
      </div>
    </div>
    // <div className="flex h-[calc(100vh-150px)] items-center justify-center">
    //   <form
    //     onSubmit={handleSubmit}
    //     className="bg-zinc-800 max-w-md p-7 rounded-md"
    //   >
    //     <h1 className="my-5 font-bold text-5xl">Login</h1>

    //     <label htmlFor="email">Email:</label>

    //     <Input type="email" placeholder="user@mail.com" />

    //     <label htmlFor="password">Password:</label>
    //     <input
    //       type="password"
    //       placeholder="********"
    //       className="bg-gray-900 px-4 py-2 rounded-md w-full my-2"
    //     />
    //     <button className="bg-indigo-500 px-4 py-2 w-full rounded-md">
    //       Login
    //     </button>
    //     <p className="mt-7 text-slate-400 flex justify-between">
    //       Don't Have an Account?{" "}
    //       <Link to="/register" className="text-indigo-100 font-bold">
    //         Register
    //       </Link>
    //     </p>
    //   </form>
    // </div>
  );
}

export default LoginPage;
