        import React , {useEffect,useState} from "react";
        import "./styles/App.scss";
        import Header from './components/header';
        import gsap from "gsap"
        import Home from './pages/home';
        import CaseStudies from './pages/caseStudies';
        import Services from './pages/services';
        import Approach from './pages/approach';
        import About from './pages/about';
        import { Route, Routes } from "react-router-dom";
        import Navigation from './components/navigation';

        const routes = [
          {path:"/",name:"home",element:<Home/>},
          {path:"case-studies",name:"case studies",element:<CaseStudies/>},
          {path:"approach",name:"approach",element:<Approach/>},
          {path:"about",name:"about",element:<About/>},
          {path:"services",name:"services",element:<Services/>},
        ];

        // debouncing to avoid logging every single move giving it a delay.
          function debounce (fn,ms) { 
            let timer; 
            return ()=>{
              clearTimeout (timer);
              timer = setTimeout(()=>{
                timer = null;
                fn.apply(this,arguments);

              },ms);
            };
          }


        function App() {
          // prevent flashing
          gsap.to("body",0,{css:{visibility:"visible"}})

          const [dimensions,setDimensions] = useState({
            height: window.innerHeight,
            width: window.innerWidth,
          })

            useEffect(()=>{
              let vh = dimensions.height*0.01;
              document.documentElement.style.setProperty('--vh',`${vh}px`);

              const debouncedHandleResize = debounce (function handleResize() {
                setDimensions({
                  height : window.innerHeight,
                  width : window.innerWidth,
                });

              }, 1000);

              window.addEventListener("resize", debouncedHandleResize);
              return ()=> { 
                window.removeEventListener("resize",debouncedHandleResize)
              }



           },[])

          return (
            <>
              <Header dimensions = { dimensions} />
              {console.log(dimensions)}
              <div className="App">
                {routes.map(({path,element})=>(
                  <Routes>
                  <Route key={path} path={path} element={element}/>
                  </Routes>
                ))}
                </div>
                <Navigation/>
            </>
          );
        }

        export default App;