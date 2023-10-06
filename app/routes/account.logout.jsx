import { redirect } from '@remix-run/node';
import { destroyUserSession } from "../data/auth.server";

export function action({ request }) {
  console.log(request);
  if (request.method !== 'DELETE') {
    throw json({ message: 'Invalid request method' }, { status: 400 });
  }

  return destroyUserSession(request); 
}

export async function loader() {
  return redirect('/account?mode=login');
}