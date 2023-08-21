import { useEffect, useState } from 'react';
import './App.css';
import anime from 'animejs';

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
        direction: 'normal',
      });
    }
    // Spring out
    if (toggle === false) {
      anime({
        targets: '.popup',
        translateY: 460,
        easing: 'spring(0.5, 100, 50, 10)',
        direction: 'normal',
      });
    }
  }, [toggle]);

  return (
    <>
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
