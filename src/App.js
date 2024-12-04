import Mobile from "./Displays/Mobile";
import Desktop from "./Displays/Desktop";
function App() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? Mobile() : Desktop()
}

export default App;
