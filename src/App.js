import './App.css';
import {lazy} from "react";

const NavTestComponent = lazy(() => import('nav/Components.js'))
const NavTestComponentTwo = lazy(() => import('nav/ComponentTwo.js'))

function App() {
  return (
    <div className="App">
      <NavTestComponent />
        <NavTestComponentTwo/>
    main content
    </div>
  );
}

export default App;
