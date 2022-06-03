import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/activityContext';
import { DocumentData } from 'firebase/firestore';
import classes from './breakie.module.css';
import fysisk from '../../assets/fysisk.svg';
import social from '../../assets/social.svg';
import mental from '../../assets/mental.svg';
import Alert from '../../components/Alert/Alert';
import End from '../../components/Breakieend/End';

const Breakie = () => {
  const { activities } = useContext(AppContext);
  const [random, setRandom] = useState(Object);
  const [loading, setLoading] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [img, setImg] = useState('');
  const [start, setStart] = useState(true);
  const [end, setEnd] = useState(false);
  const [show, setShow] = useState(false);

  const getRandom = async () => {
    //Random Breakie
    setLoading(true);
    const randomElement: DocumentData =
      activities[Math.floor(Math.random() * activities.length)];
    setRandom(randomElement);
    if (randomElement) {
      setMinutes(randomElement.time);
      setSeconds(0);
    }

    setLoading(false);
  };


  const updateRemainingTime = (s: any, m: any) => {
    setSeconds(s);
    setMinutes(m);
  };

  const timer = () => {
    let s = seconds;

    let m = minutes;

    const int = setInterval(() => {
      s--;
      if (s <= 0) {
        s = 59;
        m--;
        if (seconds == 55) {
          console.log('s');
        }
        if (m < 0) {
          s = 0;
          m = 0;

          setEnd(true);
          clearInterval(int);
        }
      }

      updateRemainingTime(s, m);
    }, 1000);

    return () => {
      clearInterval(int);
    };
  };

  useEffect(() => {
    getRandom();
  }, [activities]);

  let randomUrl;
  if (random && random.URL) {
    //Ändra URL till new URl som replace embed istället watch?= då funkar youtube video
    const newURL = random.URL.replace('watch?v=', 'embed/');

    randomUrl =
      random && random.URL.includes('youtube') ? (
        <embed
          src={`${newURL}`}
          width='100%'
          type='video/mp4'
          height='100%'
        ></embed>
      ) : (
        //"https://www.youtube.com/embed/i8n1gSw_o_8"
        <img src={random.URL} alt='breakie-image' />
      );
  } else {
    if (random && random.type == 'fysisk') {
      randomUrl = <img  src={fysisk} alt='fysisk'/>;
    } else if (random && random.type == 'social') {
      randomUrl = <img  src={social} alt='social' />;
    } else {
      randomUrl = <img  src={mental} alt='social' />;
    }
  }
  const showEnd = () => {
    setShow(!show);
  };

  //Type icon in breakie header
  let imgtype;
  if (random && random.type == 'fysisk') {
    imgtype = <img src={fysisk} alt='fysisk' />;
  } else if (random && random.type == 'social') {
    imgtype = <img src={social} alt='social' />;
  } else {
    imgtype = <img src={mental} alt='social' />;
  }
  // console.log(mental);
  const startBreakie = () => {
    setStart(false);
    timer();
  };
  
  return (
    <>
      {random ? (
        <div className={classes.wrapper}>
          <div className={classes.container}>
            <div className={classes.header}>
              <h1>{random.name}</h1>

              <div className={classes.info}>
                <div className={classes.type}>
                  {imgtype}
                  <span>{random.type}</span>
                </div>
                <div>
                  <span className={classes.time}>
                    {minutes}:{seconds < 10 ? 0 : null}
                    {seconds}
                  </span>
                  <span>minuter</span>
                </div>
              </div>
            </div>

            <div className={classes.image}>
              {start && <Alert startBreakie={startBreakie} />}

              {randomUrl}
            </div>
            <div className={classes.description}>
              <p>{random.desc}</p>
            </div>

            <div>
              {!start && (
                <button
                  disabled={!end}
                  onClick={showEnd}
                  className={
                    end
                      ? `${classes.avsluta} ${classes.active} `
                      : classes.avsluta
                  }
                >
                  Avsluta breakien
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        'loading'
      )}
      {show && <End />}
    </>
  );
};

export default Breakie;
