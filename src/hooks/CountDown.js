import { useState, useEffect } from "react";
import getDiferentTimeStamp from "../components/helpers/CountDownLogic";
import {
  DarkerContainer,
  Days,
  Display,
  Hours,
  LeftSemicircle,
  Minutes,
  RightSemicircle,
  Seconds,
  TimerSection,
  Title,
} from "../styles/StylesBackground";
export const TimeInitial = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};
//Montaje del  componente
const CountDownSetup = ({ countDownStamp }) => {
  const [stateTimeInicial, setstateTimeInicial] = useState({ TimeInitial });
  useEffect(() => {
    const intervalId = setInterval(() => {
      updateTimeInicial(countDownStamp);
    }, 1000);
    function updateTimeInicial(CountDown) {
      setstateTimeInicial(getDiferentTimeStamp(CountDown));
    }
    return () => {
      clearTimeout(intervalId);
    };
  }, [countDownStamp]);
  return (
    <TimerSection>
      <Days>
        <Display>
          <DarkerContainer>
            <p>{stateTimeInicial.days}</p>
          </DarkerContainer>
          <LeftSemicircle></LeftSemicircle>
          <RightSemicircle></RightSemicircle>
        </Display>
        <Title>
          <p>days</p>
        </Title>
      </Days>
      <Hours>
        <Display>
          <DarkerContainer>
            <p>{stateTimeInicial.hours}</p>
          </DarkerContainer>
          <LeftSemicircle></LeftSemicircle>
          <RightSemicircle></RightSemicircle>
        </Display>
        <Title>
          <p>Hours</p>
        </Title>
      </Hours>
      <Minutes>
        <Display>
          <DarkerContainer>
            <p> {stateTimeInicial.minutes}</p>
          </DarkerContainer>
          <LeftSemicircle></LeftSemicircle>
          <RightSemicircle></RightSemicircle>
        </Display>
        <Title>
          <p>Minutes</p>
        </Title>
      </Minutes>
      <Seconds>
        <Display>
          <DarkerContainer>
            <p>{stateTimeInicial.seconds}</p>
          </DarkerContainer>
          <LeftSemicircle></LeftSemicircle>
          <RightSemicircle></RightSemicircle>
        </Display>
        <Title>
          <p>Seconds</p>
        </Title>
      </Seconds>
    </TimerSection>
  );
};

export default CountDownSetup;
