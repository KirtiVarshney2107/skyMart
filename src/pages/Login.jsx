import LeftSection from "../components/LeftSection";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <div className="grid lg:grid-cols-2">

        <LeftSection />

        <div className="flex justify-center items-center p-10 border-l border-zinc-700">
          <LoginForm />
        </div>

      </div>
    </div>
  );
};

export default Login;