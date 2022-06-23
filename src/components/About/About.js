import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJava,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Loader from "react-loaders"
import "./About.scss"

const About = () => {
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>About me</h1>
          <p>
            I develop fully automated frameworks and industry-standard which
            help eliminate manual effort on Testing and reducing time,
            maintenance, and reusability of code. I develop automation solutions
            for both UI and Server-side applications. I also develop web
            applications as one of my hobbies. My main expertise relies on
            Selenium Java, Serenity JUnit, WebdriverIo, PlayWright, Test Cafe,
            Python, Rest Assured, TestNG, Cucumber, Maven, Jenkins, GitHub,
            Mulesoft, Spring Boot, Node Js, React Js, Azure DevOps, and more.
            Selenium and java give me the ability to test applications fast and
            accurately by using the latest trends such as Serenity J Unit.
            <p> Python is an easily integrated language that provides me the ability
            to integrate with selenium or develop software from scratch using
            Django. TestNg the most one of the most efficient and flexible
            automation frameworks in the marketing for testing purposes which I
            use. A cucumber framework is a tool that offers a way to write tests
            in plain English language that anybody can understand, regardless of
            their technical knowledge. Maven is a build management tool that
            integrates many tools at once and offers an easy way for
            maintenance.</p> <p> Jenkins gives me the ability to fully automate your
            application tests without human interaction, and deploy the latest
            code on production without waste of time. GitHub is one of the most
            convenient and safest cloud repositories. Mulesoft is a tool that is
            really effective with the API integration and communication of
            different apps and technologies.</p> <p> Node Js backend language is used to
            develop applications that can be rapidly integrated with the front
            end and provide a dynamic application with various functionalities.
            Rest Assured is a Java DSL for simplifying testing of rest-based
            services built on top of the HTTP builder. </p> <p> It supports Post, Get,
            Put, Delete options, Patch, and head requests and can be used to
            validate and verify the response of these requests. I also speak
            different languages such as English, Spanish, Portuguese, Chinese,
            and Basic french , and Basic Russian.</p>I can easily communicate with
            anyone across the industry and language is one of my great
            advantages. With all this technical experience mentioned above, I
            believe I can help as a test analyst or Business Analyst with
            technical skills for any project.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faJava} color="#blue" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
