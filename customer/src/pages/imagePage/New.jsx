import React, {useState, useEffect} from 'react';
import newPage from "../../assets/img/new.png";
const New = () => {
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
      <img src={newPage} style={{width: windowSize.innerWidth}}/>
    </div>
  );
}


function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}
export default New;