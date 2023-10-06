import { Form, Link, useSearchParams, useActionData, useNavigation } from '@remix-run/react';
import Button from "../ui/Button";

const AuthForm = () => {
  const [searchParams] = useSearchParams();
  const authMode = searchParams.get('mode') || 'login';
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== 'idle';
  const btnText = authMode === "login" ? "Login" : "Signup";
  const ctaText = authMode === "login" ? "Don't have an account? signup!" : "Already have an account? login!";
  const ctaLink = authMode === "login" ? "signup" : "login";

  const validationErrors = useActionData();
  return (
    <>
      <Form method="post" className='my-2'>
        <div className="form-group mb-2">
          <input type="text" className="form-control" name='name' placeholder="username" minLength={3} required />
        </div>
        <div className="form-group mb-2">
          <input type="email" className="form-control" name='email' placeholder="abc@gmail.com" minLength={7} required />
        </div>
        <div className="form-group mb-2">
          <input type="password" className="form-control" name='password' placeholder="password" minLength={7} required />
        </div>
        <Button text={btnText} />
      </Form>
      <Link to={`/account?mode=${ctaLink}`}>{ctaText}</Link>
      {isSubmitting && <span>Submitting...</span>}
      {validationErrors && (
        <ul className='list-unstyled alert alert-info my-2'>
          {Object.values(validationErrors).map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
    </>
  )
}

export default AuthForm