const Footer = () => {
  return (
    <div className="main-footer">
      <div className="col">
        <div className="col-10" />
        <div className="col-4">
          <h4>Work</h4>
          <ul className="list-unstyled">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
        <div className="col-4">
          <h4>About</h4>
          <ul className="list-unstyled">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
        <div className="col-4 h-100 align-self-center">
          <h4>Form</h4>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="text-xs-center">&copy;{new Date().getFullYear()} Axel Barraza - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
