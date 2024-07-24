import FoodeliLogo from "../../../components/base/Logo";
import LoginForm from "../components/Form";

const LoginPage = () => {
  return (
    <div className="login-page h-[100vh] flex justify-center items-center bg-backgroundColor">
      <div className="login-box bg-boxBg w-10/12 md:w-5/12 lg:w-4/12 xl:w-3/12 p-5 rounded-2xl shadow-xl">
        <FoodeliLogo width={60} vertical />
        <LoginForm className="mt-7"/>
        <div className="mt-5 text-sm flex flex-col gap-y-1">
          <span>sample username: emilys</span>
          <span>sample password: emilyspass</span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
