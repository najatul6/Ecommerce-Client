import CommonForm from "@/components/common/CommonForm";
import { registerFormControls } from "@/config";
import { useToast } from "@/hooks/use-toast";
import { registerUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

function AuthRegister() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {toast}=useToast()
  function onSubmit(e) {
    e.preventDefault();
    dispatch(registerUser(formData)).then((data) => {
      if (data.payload.success) {
        toast({
          title: data.payload.message,
          type: "success",
        });
        navigate("/auth/login");
      }
    });
  }
  console.log(formData);

  return (
    <div className="w-full mx-auto max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create Account
        </h1>
      </div>
      <CommonForm
        formControls={registerFormControls}
        buttonText="Sign Up"
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
      <p className="mt-2 text-center">
        Already have an account?
        <Link
          to="/auth/login"
          className="font-medium text-primary hover:underline ml-2"
        >
          Log In
        </Link>
      </p>
    </div>
  );
}

export default AuthRegister;
