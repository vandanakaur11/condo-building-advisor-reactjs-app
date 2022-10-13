import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/Routing"

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
