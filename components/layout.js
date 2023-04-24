import MainHeader from "components/header"

const Layout = ({ id = "", children }) => {
  return (
    <div id={id} className="container-fluid">
      <MainHeader />
      <div className="content col">{children}</div>
    </div>
  )
}

export default Layout
