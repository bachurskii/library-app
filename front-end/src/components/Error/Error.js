import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { cleareError, selectErrorMessage } from "../../redux/slices/errorSlice";

const Error = () => {
  const errorMesage = useSelector(selectErrorMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (errorMesage) {
      toast.info(errorMesage);
      dispatch(cleareError());
    }
  }, [errorMesage, dispatch]);
  return <ToastContainer position="top-right" autoClose={4000} />;
};
export default Error;
