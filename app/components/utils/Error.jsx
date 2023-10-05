import { Document } from "../layout/Document"

const Error = ({ error }) => {
  return (
    <Document>
      <div className="container my-4 default-top">
        <div className="row alert alert-danger">
          <div className="col-12">
            <h5>Oops</h5>
            <p>Status: {error?.status || 404}</p>
            <p>{error?.data}</p>
            <p>{error?.message || "Unknown Error"}</p>
          </div>
        </div>
      </div>
    </Document>
  )
}

export default Error