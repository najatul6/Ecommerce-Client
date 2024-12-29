import CommonForm from "@/components/common/CommonForm"
import { logInFormControls } from "@/config"
import { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  
    function onSubmit() {
  
    }
  return (
    <div className="w-full mx-auto max-w-md space-y-6">
    <div className="text-center">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
       Log in to your account
      </h1>
    </div>
    <CommonForm
      formControls={logInFormControls}
      buttonText="Sign In"
      formData={formData}
      setFormData={setFormData}
      onSubmit={onSubmit}
    />
    <div className="text-center">
    <p className="">
      Don&apos;t have an account?
      <Link
        to="/auth/register"
        className="font-medium text-primary hover:underline ml-2"
      >
       Create Account
      </Link>
    </p>
    </div>
  </div>
  )
}

export default AuthLogin