import styles from "./footer.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const Footer = () => {
  return (
    <footer className='container-fluid px-4 py-1 XfooterContainer'>
      <div className='row align-items-center XfooterWrapper'>
        <div className='col-xs-12 col-sm-4'>
          <p className='text-white text-center text-sm-start mb-0'>All rights reserved vikas</p>
        </div>
        <div className='col-xs-12 col-sm-8'>
          <ul className="d-flex justify-content-center justify-content-sm-end gap-4 XsocialIcons mb-0 px-0">
            <li><a href="https://www.facebook.com/" target='blank' title="facebook"><i className="bi bi-facebook"></i></a></li>
            <li><a href="https://www.twitter.com/" target='blank' title="twitter"><i className="bi bi-twitter"></i></a></li>
            <li><a href="https://www.instahram.com/" target='blank' title="instagram"><i className="bi bi-instagram"></i></a></li>
            <li><a href="https://www.pinterest.com/" target='blank' title="pinterest"><i className="bi bi-pinterest"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer