import React from "react"
import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <div className="footer-icons">
      <div className="icon-btn">
        <a className="social-btn" href="https://twitter.com/PabloFAvendano">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
      <div className="icon-btn">
        <a className="social-btn" href="https://www.facebook.com/PaB1ox">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </div>
      <div className="icon-btn">
        <a className="social-btn" href="https://www.instagram.com/pab1o.av/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <div className="icon-btn">
        <a className="social-btn" href="https://github.com/PabloFA">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  )
}
