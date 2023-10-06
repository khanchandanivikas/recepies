import { redirect } from '@remix-run/node';

export async function action({ request }) {
  const formData = await request.formData();
  const searchData = Object.fromEntries(formData);
  const searchTerm = searchData.searchTerm;
  return !searchTerm ? redirect('/recepies') : redirect('/recepies/search/'+searchTerm);
}

export async function loader() {
  return redirect('/recepies');
}