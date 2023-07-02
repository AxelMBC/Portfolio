import { useState, useEffect } from "react"
import { Navbar, Container } from "react-bootstrap"
import Nav from "react-bootstrap/Nav"
import LogoImg from "public/axel-logo.jpeg"
import Image from "next/image"

const Header = () => {
  const [activeLink, setActiveLink] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const onUpdateActiveLink = value => {
    setActiveLink(value)
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <Image src={LogoImg} alt="Axel Logo Image" width={200} height={18} />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Nav className="justify-content-end">
          <Nav.Item>
            <Nav.Link
              href="#home"
              className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              href="#skills"
              className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              href="#projects"
              className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
