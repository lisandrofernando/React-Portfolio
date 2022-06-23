import Logos from "../../assets/images/Logos.png"
import Resume from "../../assets/images/Resume .docx"
import Picture from "../../assets/images/Picture.JPG"
import { Link } from "react-router-dom"
import "./Home.scss"
import Loader from "react-loaders"

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Hi, <br /> I'm
            <img src={Logos} alt="developer" />
            isandro
            <br />
            software developer engineer in test
          </h1>
          <h2>
            {" "}
            Software Developer Engineer In Test / Frontend Developer / Business
            Analyst / Project Manager
          </h2>
          <Link to="/contact" className="flat-button" type="submit">
            CONTACT ME
          </Link>
          <div>
            <a href={Resume} download={Resume}>
              {" "}
              <button className="download">Download CV</button>{" "}
            </a>
          </div>
        </div>
        <img src={Picture} alt="developer" className="picture" />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
