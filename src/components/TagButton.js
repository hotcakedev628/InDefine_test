import React from 'react';
import clsx from 'clsx';
import {
  IconButton,
  makeStyles
} from '@material-ui/core';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

const useStyles = makeStyles((theme) => ({
  root: {},
  btnTag: {
    color: '#676564',
    backgroundColor: theme.palette.common.white,
    boxShadow: `RGBA(21, 21, 21, 0.05)`,
    '&:hover': {
      color: '#fff',
      backgroundColor: theme.palette.primary.main
    },
    height: 40,
    width: 40,
    [theme.breakpoints.down('sm')]: {
      height: 30,
      width: 30
    }
  },
  tagIcon: {
    height: 20,
    width: 20,
    [theme.breakpoints.down('sm')]: {
      height: 16,
      width: 16
    }
  }
}));

const TagButton = React.forwardRef(({
  className,
  product,
  ...rest
}, ref) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} ref={ref}>
      <IconButton
        aria-label="tag"
        className={classes.btnTag}
        size="small"
        {...rest}
      >
        <LocalOfferIcon className={classes.tagIcon} />
      </IconButton>
    </div>
  )
});

export default TagButton;
