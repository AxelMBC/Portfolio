import MainHeader from "components/header"
import Footer from "components/footer"

const Layout = ({ id = "", children }) => {
  return (
    <>
      <div id={id} className="container-fluid">
        <div className="row justify-content-start">
          <div className="col-10">
            <div className="row">
              <div className="col">
                <MainHeader />
                <div className="content">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
