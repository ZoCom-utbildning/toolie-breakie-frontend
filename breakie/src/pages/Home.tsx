import React from 'react';
import Form from '../components/Form';
import classes from './home.module.css';

const Home = () => {
  return (
    <>
      <div className={classes.home}>
        <Form/>
      </div>
    </>
  );
};

export default Home;
