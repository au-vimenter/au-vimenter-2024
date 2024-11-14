import "./App.css";
import Desktop from "./components/Desktop";
import Mobile from "./components/Mobile";
import { isDesktop } from "./constants/common";

function App() {
  return <>{isDesktop ? <Desktop /> : <Mobile />}</>;
}

export default App;
