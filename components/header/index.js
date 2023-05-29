import Link from "next/link"
import Router from "next/router"
import Image from "next/image"
import LogoImg from "public/axel-logo.jpeg"

const Header = () => {
  return (
    <nav className="navbar navbar-primary row justify-content-end text-end py-4">
      <div className="col">
        <div className="row">
          <div className="col-auto align-self-center">
            <Link href="/">
              <Image src={LogoImg} alt="Axel Logo Image" width={200} height={18} />
            </Link>
          </div>
          <div className="col">
            <div className="row justify-content-end">
              <div className="col-auto">
                <button type="button" className="btn btn-primary px-4 nav-item" onClick={() => Router.push("/")}>
                  Projects
                </button>
              </div>

              <div className="col-auto">
                <button type="button" className="btn btn-primary px-4 nav-item" onClick={() => Router.push("/projects/ai/book-summary")}>
                  Experience
                </button>
              </div>

              <div className="col-auto">
                <button type="button" className="btn btn-primary px-4 nav-item" onClick={() => Router.push("/about")}>
                  About
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
