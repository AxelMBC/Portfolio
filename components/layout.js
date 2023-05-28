import MainHeader from "components/header"
import Footer from "components/footer"

const Layout = ({ id = "", children }) => {
  return (
    <>
      <div id={id} className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-lg-8">
            <div className="row">
              <MainHeader />
              <div className="content">{children}</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
