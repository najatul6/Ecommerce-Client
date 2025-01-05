import CommonForm from "@/components/common/CommonForm";
import { registerFormControls } from "@/config";
import { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

function AuthRegister() {
  const [formData, setFormData] = useState(initialState);

  function onSubmit() {

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
          {" "}
          Log In
        </Link>
      </p>
    </div>
  );
}

export default AuthRegister;
