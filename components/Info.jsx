import React from "react"
import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

export default function Info() {
  return (
    <div className="info-section">
      <img src="/profile-pic.jpg" />
      <h1 className="title">Pablo Avendaño</h1>
      <p className="subtitle">Frontend Developer</p>
      <small>pablo-dev.com</small>
      <div className="btns">
        <a className="btn btn-email" href="mailto:avendanio.pablo@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
          Email
        </a>
        <a
          className="btn btn-linkedin"
          href="https://www.linkedin.com/in/pablo-avendaño91/"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
          LinkedIn
        </a>
      </div>
    </div>
  )
}
