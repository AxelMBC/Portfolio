import Link from "next/link"
import Router from "next/router"
import Image from "next/image"
import LogoImg from "public/axel-logo.jpeg"

const Header = () => {
  return (
    <nav className="navbar navbar-primary row ">
      <div className="container-fluid col-12">
        <div className="col-3 align-self-start py-3 ps-4">
          <Link href="/">
            <Image src={LogoImg} alt="Axel Logo Image" width={200} height={18} />
          </Link>
        </div>

        <ul className="nav col-9 ">
          <li className="nav-item col-auto">
            <button type="button" className="btn btn-primary py-3 px-5" onClick={() => Router.push("/")}>
              Home
            </button>
          </li>
          <li className="nav-item col-auto">
            <button type="button" className="btn btn-primary py-3 px-5" onClick={() => Router.push("/projects/ai/book-summary")}>
              Projects
            </button>
          </li>
          <li className="nav-item col-auto">
            <button type="button" className="btn btn-primary py-3 px-5" onClick={() => Router.push("/about-me")}>
              About Me
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
