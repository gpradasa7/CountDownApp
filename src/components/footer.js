import React from "react";
import {
  Attribution,
  FooterSection,
  SocialIcons,
} from "../styles/StylesBackground";
import iconFb from "../Assets/icon-facebook.svg";
import iconPt from "../Assets/icon-pinterest.svg";
import iconIg from "../Assets/icon-instagram.svg";

export default function Footer() {
  return (
    <FooterSection>
      <SocialIcons>
        <SocialIcons>
          <a href="." rel="noreferrer">
            <img src={iconFb} alt="" />
          </a>
        </SocialIcons>
        <SocialIcons>
          <a href="." rel="noreferrer">
            <img src={iconPt} alt="" />
          </a>
        </SocialIcons>
        <SocialIcons>
          <a href="." rel="noreferrer">
            <img src={iconIg} alt="" />
          </a>
        </SocialIcons>
        <Attribution>
          Challenge by
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          <p> Coded by: </p>
          <a
            href="https://github.com/gpradasa7"
            target="_blank"
            rel="noreferrer"
          >
            <p>David Prada</p>
          </a>
        </Attribution>
      </SocialIcons>
    </FooterSection>
  );
}
