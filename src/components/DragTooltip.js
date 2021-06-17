import React from 'react';
import clsx from 'clsx';
import {
  Box,
  Button,
  Fade,
  Hidden,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: theme.spacing(1.2, 2.5)
  },
  iconArrowLeft: {
    transform: "rotate(-180deg)"
  }
}));

const DragTooltip = ({
  className,
  isHidden,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Hidden smUp>
      <Fade
        in={!isHidden}
        timeout={1000}
        unmountOnExit
        {...rest}
      >
        <Button
          className={clsx(classes.root, className)}
          color="secondary"
          startIcon={
            <Box mr={1}>
              <img
                className={classes.iconArrowLeft}
                src="/static/icons/arrow.svg"
                alt="Explore Arrow Left Icon"
              />
            </Box>
          }
          endIcon={
            <Box ml={1}>
              <img
                src="/static/icons/arrow.svg"
                alt="Explore Arrow Right Icon"
              />
            </Box>
          }
        >
          Drag to explore
        </Button>
      </Fade>
    </Hidden>
  )
}

export default DragTooltip;
