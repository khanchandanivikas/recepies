import { Form, Link, useSearchParams, useNavigation } from '@remix-run/react';
import Button from "../ui/Button";

const AuthForm = () => {
  const [searchParams] = useSearchParams();
  const authMode = searchParams.get('mode') || 'login';
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== 'idle';
  const btnText = authMode === "login" ? "Login" : "Signup";
  const ctaText = authMode === "login" ? "Don't have an account? signup!" : "Already have an account? login!";
  const ctaLink = authMode === "login" ? "signup" : "login";
  return (
    <>
      <Form method="post">
        <div className="form-group mb-2">
          <input type="email" className="form-control" placeholder="abc@gmail.com" required />
        </div>
        <div className="form-group mb-2">
          <input type="password" className="form-control" placeholder="password" required />
        </div>
        <Button text={btnText} />
      </Form>
      <Link to={`/account?mode=${ctaLink}`} className='mt-2'>{ctaText}</Link>
      {isSubmitting && <span>Submitting...</span>}
    </>
  )
}

export default AuthForm