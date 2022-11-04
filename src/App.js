import {lazy, Suspense, useEffect, useRef} from "react";
import './App.css';

const NavBarMF = lazy(() => import('navMF/NavBar'))

const App = () =>  {
    const heroRefContainer = useRef(null)

    useEffect(() => {
        //Importing Vue app Hero module and assign it to React div ref
        import('heroMF/HeroWrapperMF').then(m => {
            m.default.setup(heroRefContainer?.current)
        })
        console.log('heroRefContainer',heroRefContainer)
    },[])

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
      <NavBarMF/>
          <div ref={heroRefContainer}/>
    MainMF
      </Suspense>
    </div>
  );
}

export default App;
