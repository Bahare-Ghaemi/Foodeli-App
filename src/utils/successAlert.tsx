import { Bounce, toast } from "react-toastify";

const successAlert = (messages: string[]) => {
  const content = () => {
    return (
      <div>
        {messages?.map((msg, index) => (
          <span key={index}>{msg}</span>
        ))}
      </div>
    );
  };

  toast.success(content, {
    position: "top-left",
    autoClose: 3500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    className: "text-white",
    transition: Bounce,
  });

  // <ToastContainer
  //   position="top-right"
  //   autoClose={5000}
  //   hideProgressBar={false}
  //   newestOnTop={false}
  //   closeOnClick
  //   rtl={false}
  //   pauseOnFocusLoss
  //   draggable
  //   pauseOnHover
  //   theme="light"
  //   transition={Bounce}
  // />;
  // <ToastContainer />;
};

export default successAlert;
