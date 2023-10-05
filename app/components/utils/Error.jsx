import { Document } from "../layout/Document"

const Error = ({ error }) => {
  return (
    <Document>
      <div className="alert alert-danger my-4 default-top">
        <h5>Oops</h5>
        <p>Status: {error?.status || 404}</p>
        <p>{error?.data}</p>
        <p>{error?.message || "Unknown Error"}</p>
      </div>
    </Document>
  )
}

export default Error