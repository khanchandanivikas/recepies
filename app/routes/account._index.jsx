import { signup, login, getUserFromSession } from "../data/auth.server";
import { redirect } from '@remix-run/node';
import styles from "../styles/account.css";
import AuthForm from "../components/forms/AuthForm";
import { validateCredentials } from "../helpers/validations";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get('mode') || 'login';

  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);
  // validate form first
  try {
    validateCredentials(credentials);
  } catch (error) {
    return error;
  }

  // // if form is validate sucessfully then signup/login
  if (authMode === 'signup') {
    return await signup(credentials);
  } else {
    return await login(credentials);
  }
}

export const loader = async ({request}) => {
  const userId = await getUserFromSession(request);
  if (userId) return redirect('/account/profile/'+userId)
  return userId;
}

const Auth = () => {
  return (
    <section className='default-section XauthFormContainer d-flex align-items-center'>
      <div className='container'>
        <div className='row'>
          <div className="col-12">
            <h3>Get started</h3>
            <AuthForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Auth