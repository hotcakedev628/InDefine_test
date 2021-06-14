import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Hero from './Hero';
import { APP_NAME } from 'src/constants';

const useStyles = makeStyles(() => ({
  root: {}
}));

const HomeView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title={`Home | ${APP_NAME}`}
    >
      <Hero />
    </Page>
  );
};

export default HomeView;
