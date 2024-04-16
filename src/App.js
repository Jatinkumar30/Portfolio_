import { useEffect, useState } from "react";
import './App.css';

import Main from "./components/main";
import Loader from "./components/icons/Loader";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };
    fetchData();
  }, []);
  return isLoading ? <Loader /> : <Main />;
}

export default App;
