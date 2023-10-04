import React from 'react'

const Spinner = () => {
  return (
    <>
      <div className="overlay"></div>
      <div className="spinner-border text-primary XmainLoader" role="status"></div>
    </>
  )
}

export default Spinner