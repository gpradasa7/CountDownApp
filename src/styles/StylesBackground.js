import styled from "styled-components";

export const Header = styled.header`
  display: block;
  width: 80%;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 5px;
  color: white;
  text-transform: uppercase;
  font-family: "Red Hat Text", sans-serif;
  font-weight: bold;
`;

export const TimerSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 90%;
  margin-bottom: 1rem;
  position: relative;
  height: 70vh;
`;

export const Days = styled.div`
  font-size: 7px;
  letter-spacing: 3px;
  font-weight: lighter;
  color: hsl(237, 18%, 59%);
  text-align: center;
  margin-top: 13px;
  margin-right: 1rem;

  @media screen and (max-width: 475px) {
    font-size: 7px;
    letter-spacing: 3px;
    font-weight: lighter;
    color: hsl(237, 18%, 59%);
    text-align: center;
    margin-top: 13px;
  }
`;

export const Hours = styled.div`
  font-size: 7px;
  letter-spacing: 3px;
  font-weight: lighter;
  color: hsl(237, 18%, 59%);
  text-align: center;
  margin-top: 13px;
  margin-right: 1rem;

  @media screen and (max-width: 475px) {
    font-size: 7px;
    letter-spacing: 3px;
    font-weight: lighter;
    color: hsl(237, 18%, 59%);
    text-align: center;
    margin-top: 13px;
  }
`;
export const Minutes = styled.div`
  font-size: 7px;
  letter-spacing: 3px;
  font-weight: lighter;
  color: hsl(237, 18%, 59%);
  text-align: center;
  margin-top: 13px;
  margin-right: 1rem;

  @media screen and (max-width: 475px) {
    font-size: 7px;
    letter-spacing: 3px;
    font-weight: lighter;
    color: hsl(237, 18%, 59%);
    text-align: center;
    margin-top: 13px;
  }
`;

export const Seconds = styled.div`
  font-size: 7px;
  letter-spacing: 3px;
  font-weight: lighter;
  color: hsl(237, 18%, 59%);
  text-align: center;
  margin-top: 13px;

  @media screen and (max-width: 475px) {
    font-size: 7px;
    letter-spacing: 3px;
    font-weight: lighter;
    color: hsl(237, 18%, 59%);
    text-align: center;
    margin-top: 13px;
  }
`;
export const Title = styled.div`
  letter-spacing: 0.3rem;
  margin-top: 1rem;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Display = styled.div`
  border-radius: 0.5rem;
  position: relative;
  width: 8vw;
  height: 10vw;
  font-size: 4.5rem;
  text-align: center;

  @media screen and (max-width: 375px) {
    font-size: 2.5rem;
    width: 16vw;
    height: 20vw;
    letter-spacing: 3px;
    font-weight: lighter;
    color: hsl(237, 18%, 59%);
    text-align: center;
    margin-top: 13px;
  }
`;

export const DarkerContainer = styled.div`
  position: relative;
  bottom: -35%;
  width: 100%;
  height: 65%;
  background: #2c2c44;
  color: hsl(345, 62%, 57%);
  font-weight: 700;
  border-radius: 5px;
  overflow: hidden;
`;

export const LeftSemicircle = styled.div`
  position: absolute;
  top: 60%;
  left: 0%;
  background: hsl(235, 16%, 14%);
  height: 15px;
  width: 5px;
  border-radius: 0 300px 300px 0;
`;

export const RightSemicircle = styled.div`
  position: absolute;
  top: 60%;
  right: 0%;
  background: hsl(235, 16%, 14%);
  height: 15px;
  width: 5px;
  border-radius: 300px 0 0 300px;
`;

export const FooterSection = styled.footer`
  position: absolute;
  bottom: 0;
  height: 30vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialIcons = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 3.5em 0;

  & a:hover {
    filter: invert(38%) sepia(87%) saturate(459%) hue-rotate(295deg)
      brightness(94%) contrast(92%);
  }
`;

export const Attribution = styled.div`
  font-size: 11px;
  text-align: center;
  color: hsl(237, 18%, 59%);
  display: flex;
  bottom: 50vh;
  color: white;
`;
