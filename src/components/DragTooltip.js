import React from 'react';
import clsx from 'clsx';
import {
  Box,
  Button,
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
    <Hidden smUp smDown={isHidden}>
      <Button
        className={clsx(classes.root, className)}
        color="secondary"
        // variant="contained"
        startIcon={
          <Box mr={1}>
            <img className={classes.iconArrowLeft} src="/static/icons/arrow.svg" alt="Explore Arrow Left Icon" />
          </Box>
        }
        endIcon={
          <Box ml={1}>
            <img src="/static/icons/arrow.svg" alt="Explore Arrow Right Icon" />
          </Box>
        }
      >
        Drag to explore
      </Button>
    </Hidden>
  )
}

export default DragTooltip;
