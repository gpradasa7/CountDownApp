import "./App.css";
import Background from "./components/background";

import Footer from "./components/footer";
import CountDownSetup from "../src/hooks/CountDown";
function App() {
  return (
    <div className="App">
      <Background />
      <CountDownSetup countDownStamp={"2022-06-25"} />
      <Footer />
    </div>
  );
}
const dayjs = require("dayjs");
let now = dayjs();
console.log(now);
export default App;
