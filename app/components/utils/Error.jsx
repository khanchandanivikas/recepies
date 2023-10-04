import { Document } from "../layout/Document"

const Error = ({ error }) => {
  return (
    <Document>
      <div className="default-top px-4">
        <h1>Oops</h1>
        <p>Status: {error?.status || 404}</p>
        <p>{error?.data}</p>
        <p>{error?.message || "Unknown Error"}</p>
      </div>
    </Document>
  )
}

export default Error