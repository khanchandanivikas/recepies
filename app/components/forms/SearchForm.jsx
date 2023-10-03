import { Form } from '@remix-run/react';
import Button from "../ui/Button";

const SearchForm = () => {
  return (
    <Form className="Xalign-center align-items-center" method="post" action="/recepies/search">
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Search by name or ingredient" />
      </div>
      <Button iconClass="bi bi-search" />
    </Form>
  )
}

export default SearchForm