import Typewriter from "typewriter-effect"
import Image from "next/image"
import landingImage from "public/Photo_Portrait.jpg"
import Button from "react-bootstrap/Button"

const Landing = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col">
          <div className="img-bg">
            <div className="main-message">
              <h2>
                Hello, I&apos;m{" "}
                <Typewriter
                  options={{
                    strings: ["Axel", "Web Developer", "UI/UX Designer", "AI Prompt Engineer"],
                    autoStart: true,
                    loop: true
                  }}
                  className="inline"
                />
              </h2>
            </div>
            <div className="d-flex justify-content-end align-items-center vh-100 background-primary"></div>
            {/* <Image alt="landing-image" src={landingImage} width={844} height={880} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
