import Mobile from "./Mobile";
import Desktop from "./Desktop";
function App() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? Mobile() : Desktop()
}

export default App;
