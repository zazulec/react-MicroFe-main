import {lazy, Suspense} from "react";
import './App.css';

const NavBarMF = lazy(() => import('navMF/NavBar.js'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
      <NavBarMF/>
    MainMF
      </Suspense>
    </div>
  );
}

export default App;
