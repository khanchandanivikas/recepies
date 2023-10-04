import { signup } from "../data/auth.server";
import styles from "../styles/account.css";
import AuthForm from "../components/forms/AuthForm";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get('mode') || 'login';
  // const userId = await requireUserSession(request);

  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);

  if (authMode === 'signup') {
    return await signup(credentials);
  }
}

const Auth = () => {
  return (
    <section className='default-section XauthFormContainer d-flex align-items-center'>
      <div className='container'>
        <div className='row'>
          <h3>Get started</h3>
          <AuthForm />
        </div>
      </div>
    </section>
  )
}

export default Auth