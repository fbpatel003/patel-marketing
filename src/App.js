import React from "react";
import "./App.css";
import Ld1400Comp from "./Components/Ld1400Comp";
import Md992Comp from "./Components/Md992Comp";
import Sd792Comp from "./Components/Sd768Comp";

function App() {
  const viewportContext = React.createContext({});

  const ViewportProvider = ({ children }) => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight);
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    React.useEffect(() => {
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
      <viewportContext.Provider value={{ width, height }}>
        {children}
      </viewportContext.Provider>
    );
  };

  const useViewport = () => {
    const { width, height } = React.useContext(viewportContext);
    return { width, height };
  };

  const MyComponent = () => {
    const { width } = useViewport();
    if(width>=992) return<Ld1400Comp/>
    else if(width<992 && width>=768) return <Md992Comp/>
    else if(width<768) return <Sd792Comp/>
  };
  return (
    <>
      <ViewportProvider>
        <MyComponent />
      </ViewportProvider>
    </>
  );
} 

export default App;
