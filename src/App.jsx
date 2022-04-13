import './App.css';
import {Ref} from "./components/useRef";
import {Memo} from "./components/useMemo";
import {Callback} from "./components/useCallback";


function App() {
  return (
    <div className="App">
          <Ref/>
          <br/>
          <hr/>
          <br/>
          <Memo/>
          <br/>
          <hr/>
          <br/>
          <Callback/>
    </div>
  );
}

export default App;
