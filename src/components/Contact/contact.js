import React, { useRef } from "react"
import Loader from "react-loaders"
import "./contact.scss"
import emailjs from "@emailjs/browser"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_fkxhtip",
        "template_xwtla6p",
        form.current,
        "q4aAZnX17FodrEeBP"
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    form.current.reset()
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1> Contact me </h1>
          <p>
            I am incredibly responsible for your requests and value your
            questions. I operate in an industry built on trust. This can only be
            achieved through communication experience support. If interested on
            learning more about me please contact me through the phone or email
            provided, I will take the time to discuss my experience and make a
            smart decision that best meets your needs.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Lisandro fernando
          <br />
          Mexico,
          <br />
          514-A Paseo Ecatepec, Colonia Residencial Anahuac, San Nicolas <br />
          Monterrey, N.L <br />
          <span>lisandrusfernandus@hotmail/gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[25.74667, -100.31323]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[25.74667, -100.32323]}>
              <Popup>Lisandro lives here</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
