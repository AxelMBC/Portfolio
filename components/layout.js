import MainHeader from "components/header"
import Footer from "components/footer"

const Layout = ({ id = "", children }) => {
  return (
    <div id={id} className="container-fluid">
      <MainHeader />
      <div className="content col">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
