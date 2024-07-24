import { Bounce, toast } from "react-toastify";
//======================================

const errorAlert = (error: any) => {
  const createContente = (error: any) => {
    console.log("error comonent", error.response.data.message);
    const status = error?.response.status;

    if (status === 500) return <p> {error?.response?.data?.message}</p>;
    if (status >= 400 && status < 500) {
      const messages = error?.response?.data?.message;
      let messageArray = [];
      for (let key in messages) {
        messageArray.push(messages[key]);
      }
      return (
        <div>
          {messageArray.map((message: string) => (
            <p>{message}</p>
          ))}
        </div>
      );
    }
  };

  toast.error(createContente(error), {
    position: "top-left",
    autoClose: 3500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    className: "text-white",
    transition: Bounce
  });
};

export default errorAlert;
