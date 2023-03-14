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
        <a className="social-btn" href="#">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
      <div className="icon-btn">
        <a className="social-btn" href="#">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </div>
      <div className="icon-btn">
        <a className="social-btn" href="#">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <div className="icon-btn">
        <a className="social-btn" href="#">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  )
}
