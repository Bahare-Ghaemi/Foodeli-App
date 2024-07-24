import { useFormik } from "formik";
import TextInput from "../../../../components/base/Inputs/Text";
import { loginFormSchema } from "./validation";
import useLogin from "../../hooks/useLogin";
import DotsLoading from "../../../../components/base/Loading/Dots";

type TProps = {
  className?: string;
};

const LoginForm = ({ className }: TProps) => {
  const { loginUSer, loginIsLoading } = useLogin();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validateOnBlur: false,
    validationSchema: loginFormSchema,
    onSubmit: ({ username, password }) => {
      loginUSer({ username, password });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={`${className}`}>
      <div className="flex flex-col gap-y-5">
        <TextInput
          formik={formik}
          name="username"
          type="text"
          id="username"
          label="Username"
        />
        <TextInput
          formik={formik}
          name="password"
          type="password"
          id="password"
          label="Password"
        />
      </div>
      <button
        className={`flex justify-center items-center bg-primaryColor ${
          loginIsLoading ? "py-1" : "py-3"
        } text-center rounded-lg hover:bg-orange-500 duration-300 w-full mt-8`}
      >
        {loginIsLoading ? (
          <>
            <DotsLoading size="lg" color="white" className="hidden lg:block" />
            <DotsLoading size="md" color="white" className="lg:hidden" />
          </>
        ) : (
          <span className="text-white">Login</span>
        )}
      </button>
    </form>
  );
};

export default LoginForm;
