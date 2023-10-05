import { graphqlClient } from "../lib/graphql-client";
import { createCookieSessionStorage, redirect } from '@remix-run/node';
import { CreateNewUser } from "../mututations/auth";

const sessionStorage = createCookieSessionStorage({
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    secrets: [process.env.REMIX_APP_SESSION_SECRET],
    sameSite: 'lax',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    httpOnly: true,
  },
});

async function createUserSession(userId, redirectPath) {
    const session = await sessionStorage.getSession();
    session.set('userId', userId);
    return redirect(redirectPath, {
    headers: {
      'Set-Cookie': await sessionStorage.commitSession(session),
    },
  });
}

export async function getUserFromSession(request) {
  const session = await sessionStorage.getSession(
    request.headers.get('Cookie')
  );

  const userId = session.get('userId');

  if (!userId) {
    return null;
  }

  return userId;
}
  
export async function destroyUserSession(request) {
  const session = await sessionStorage.getSession(
    request.headers.get('Cookie')
  );

  return redirect('/', {
    headers: {
      'Set-Cookie': await sessionStorage.destroySession(session),
    },
  });
}
  
export async function requireUserSession(request) {
  const userId = await getUserFromSession(request);

  if (!userId) {
    throw redirect('/account?mode=login');
  }

  return userId;
}

export async function signup({ name, email, password }) {
  try {
    const user = await graphqlClient.request(CreateNewUser, {
      name: name,
      email: email,
      password: password
    });
    if (!user.createUser.success) {
      throw new Error(user.createUser.message)
    }
    return createUserSession(user.createUser.user.databaseId, '/account/profile');
  } catch (error) {
    throw new Error('Failed to create user.');
  }
}