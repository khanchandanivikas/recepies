import styles from "../styles/account.css";
import AuthForm from "../components/forms/AuthForm";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
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