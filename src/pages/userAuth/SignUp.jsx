import { Link } from "react-router-dom"


function SignUp() {
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl tracking-tight font-bold text-foreground">Create Account</h1>
        <p className="mt-2">Already have an account 

          <Link to="/userAuth/signIn" className="text-primary-foreground"> Sign In</Link>
        </p>

      </div>
    </div>
  )
}

export default SignUp