import { useEffect, useState } from 'react';
import './App.css';
import anime from 'animejs';

// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

function App() {
  const [toggle, setToggle] = useState(false);

  // initial
  useEffect(() => {
    anime({
      targets: '.popup',
      translateY: 460,
      easing: 'linear',
      duration: 0,
    });
  }, []);

  useEffect(() => {
    // Spring in
    if (toggle === true) {
      anime({
        targets: '.popup',
        translateY: 30,
        easing: 'spring(0.5, 100, 11, 0)',
        // easing: 'cubicBezier(0.3, 1.36, 0.4, 1)',
        // duration: 600,
        direction: 'normal',
      });
    }
    // Spring out
    if (toggle === false) {
      anime({
        targets: '.popup',
        translateY: 460,
        easing: 'spring(0.5, 100, 50, 10)',
        // easing: 'cubicBezier(0.33, 1, 0.68, 1)',
        // duration: 300,
        direction: 'normal',
      });
    }
  }, [toggle]);

  return (
    <>
      {/* <Skeleton
        baseColor='#CAD6DE'
        highlightColor='#e4ebf0'
        height={100}
        borderRadius={30}
      /> */}
      <div className='frame'>
        <div className='popup'>
          <div className='button-close' onClick={() => setToggle(false)}>
            CLOSE
          </div>
        </div>
        <div className='button' onClick={() => setToggle(true)}>
          OPEN
        </div>
      </div>
    </>
  );
}

export default App;
