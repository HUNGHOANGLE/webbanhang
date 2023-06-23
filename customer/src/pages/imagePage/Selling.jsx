import React, {useState, useEffect} from 'react';
import Page from "../../assets/img/selling.png";
const Selling = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <div>
      <img src={Page} style={{width: windowSize.innerWidth}}/>
    </div>
  );
}


function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}
export default Selling;