import { useEffect, useState } from 'react';
import './App.css';
import anime from 'animejs';

function App() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    anime({
      targets: '.popup',
      translateY: '460px',
      easing: 'linear',
      duration: 0,
    });
  }, []);

  useEffect(() => {
    if (toggle === true) {
      anime({
        targets: '.popup',
        translateY: '30px',
        easing: 'spring(1, 90, 15, 0)',
        direction: 'normal',
      });
    }

    if (toggle === false) {
      anime({
        targets: '.popup',
        translateY: '460px',
        easing: 'spring(1, 100, 30, 0)',
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
