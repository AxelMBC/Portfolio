import MainHeader from "components/header"
import Footer from "components/footer"

const Layout = ({ id = "", children }) => {
  return (
    <>
      <div id={id} className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-11 col-lg-10">
            <MainHeader />

            <div className="row">{children}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
