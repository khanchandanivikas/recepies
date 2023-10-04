import { Form } from '@remix-run/react';
import Button from "../ui/Button";

const SearchForm = () => {
  return (
    <Form className="Xalign-center align-items-center" method="post" action="/recepies/search">
      <div className="form-group">
        <input type="text" name="searchTerm" className="form-control" placeholder="Search by name or ingredient" required />
      </div>
      <Button iconClass="bi bi-search" type="submit" />
    </Form>
  )
}

export default SearchForm