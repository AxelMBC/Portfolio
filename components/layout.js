import Header from "components/header/navBar"
import Footer from "components/footer"

const Layout = ({ id = "", children }) => {
  return (
    <>
      <div id={id} className="container-fluid">
        <Header />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
