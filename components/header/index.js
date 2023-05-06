import Link from "next/link"
import Router from "next/router"
import Image from "next/image"
import LogoImg from "public/axel-logo.jpeg"

const Header = () => {
  return (
    <nav className="navbar navbar-primary row justify-content-center text-center">
      <div className="col">
        <div className="row ">
          <div className="col align-self-center py-2">
            <Link href="/">
              <Image src={LogoImg} alt="Axel Logo Image" width={200} height={18} />
            </Link>
          </div>

          <ul className="col list-unstyled">
            <div className="row justify-content-end">
              <button type="button" className="btn btn-primary nav-item col-auto py-4 px-5" onClick={() => Router.push("/")}>
                Home
              </button>

              <button type="button" className="btn btn-primary nav-item col-auto py-4 px-5" onClick={() => Router.push("/projects/ai/book-summary")}>
                Projects
              </button>

              <button type="button" className="btn btn-primary nav-item col-auto py-4 px-5" onClick={() => Router.push("/about")}>
                About
              </button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
