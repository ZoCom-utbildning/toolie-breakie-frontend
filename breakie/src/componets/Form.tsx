import React, { useState } from 'react';

import mental from '../assets/mental.png';
import pic from '../assets/pic.svg';

import social from '../assets/social.png';
import classes from './form.module.css';

const Form = () => {
  const [activity, setActivity] = useState('');
  const [isChecked, setChecked] = useState(false);
  const [time, setTime] = useState('');

  const changeHandler = (e: any) => {
    setActivity(e.target.value);
  };
  const timeHandler = (e: any) => {
    setTime(e.target.value);
  };
  if (time && activity) {
    console.log(`this is the time ${time} and activty ${activity} `);
  }

  return (
    <div>
      <form className={classes.form}>
        <div className={classes.formHeader}>
          <h2>Breakie-typ</h2>
        </div>
        <div className={classes.activities}>
          <div className={classes.formcontrol}>
            <label htmlFor='fysisk'>
              <input
                checked={isChecked}
                type='checkbox'
                id='fysisk'
                onChange={changeHandler}
                name='activity'
                value='fysisk'
              />
              <img src={pic} alt='' />
              <span>fysisk</span>
            </label>
          </div>
          <div className={classes.formcontrol}>
            <label htmlFor='mental'>
              <input
                checked={isChecked}
                type='checkbox'
                id='mental'
                onChange={changeHandler}
                name='activity'
                value='mental'
              />
              <img src={mental} alt='' />
              <span>mental</span>
            </label>
          </div>
          <div className={classes.formcontrol}>
            <label htmlFor='social'>
              <input
                checked={isChecked}
                type='checkbox'
                id='social'
                onChange={changeHandler}
                value='social'
                name='social'
              />
              <img src={social} alt='' />
              <span>social</span>
            </label>
          </div>
        </div>
        <div className={classes.formHeader}>
          <h2>Breakie-tid</h2>
        </div>
        <div className={classes.activities}>
          <div className={classes.formcontrol}>
            <label htmlFor='1' className={classes.tidinfo}>
              <input
                type='checkbox'
                checked={isChecked}
                id='1'
                onChange={timeHandler}
                value='1'
                name='1'
              />
              <div>
                <p> &#60; 1</p>
              </div>
              <span>minut</span>
            </label>
          </div>
          <div className={classes.formcontrol}>
            <label htmlFor='2' className={classes.tidinfo}>
              <input
                type='checkbox'
                checked={isChecked}
                id='2'
                onChange={timeHandler}
                value='2'
                name='2'
              />
              <div>
                <p> 1-2</p>
              </div>
              <span>minuter</span>
            </label>
          </div>
          <div className={classes.formcontrol}>
            <label htmlFor='3' className={classes.tidinfo}>
              <input
                type='checkbox'
                checked={isChecked}
                id='3'
                onChange={timeHandler}
                value='3'
                name='3'
              />
              <div>
                <p>3+</p>
              </div>
              <span>minuter</span>
            </label>
          </div>
        </div>
        <button className={classes.button}>
          {activity ? 'Random breakie' : 'Choose specific breakie'}
        </button>
      </form>
    </div>
  );
};

export default Form;