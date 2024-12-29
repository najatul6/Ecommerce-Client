
import CommonForm from "@/components/common/CommonForm";
import { registerFormControls } from "@/config";
import { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
  userName:'',
  email: '',
  password: '',
}

function AuthRegister() {
  const [formData, setFormData] = useState(initialState);

  return (
    <div className="w-full mx-auto max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Create Account</h1>
        <p className="mt-2">
          Already have an account? 
          <Link to="/auth/login" className="font-medium text-primary hover:underline ml-2"> Log In</Link>
        </p>
      </div>
      <CommonForm 
      formControls={registerFormControls}
      buttonText="Sign Up"
      formData={formData}
      setFormData={setFormData}
      />
    </div>
  );
}

export default AuthRegister;
