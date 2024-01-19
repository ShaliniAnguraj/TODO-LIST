import React from 'react'
import {
  FaGithub,
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="w-full bg-bodyColor">
      <p className="text-sm text-gray-400 text-center">
      A list of the tasks that you have to do, or things that you want to do.
        They list everything that you have to do, with your personal choice by selecting the category. 
      </p>
      <div className="flex justify-center gap-2 mt-3">
        <a
          href="https://github.com/ShaliniAnguraj"
          target="_blank"
          rel="noreferrer"
        >
          <span className="footerIcon">
            <FaGithub />
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/shalini-anguraj-3a78231ba/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="footerIcon">
            <FaLinkedin />
          </span>
        </a>
        
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="footerIcon">
            <FaYoutube />
          </span>
        </a>

        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="footerIcon">
            <FaFacebookF />
          </span>
        </a>

        <a
          href="https://www.instagram.com/accounts/login/"
          target="_blank"
          rel="noreferrer"
        >
            <span className="footerIcon">
          <FiInstagram />
        </span>
        </a>
        <a
          href="https://www.instagram.com/accounts/login/"
          target="_blank"
          rel="noreferrer"
        >
            <span className="footerIcon">
        <FaTwitter />
      </span>
      </a>
        
        <span className="footerIcon">
          <FiSend />
        </span>
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=new"
          target="_blank"
          rel="noreferrer"
        >
            <span className="footerIcon">
          <FiMail />
        </span>
        </a>
        
      </div>
    </div>
  );
}

export default Footer