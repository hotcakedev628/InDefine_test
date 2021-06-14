import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Divider,
  Tooltip,
  Typography,
  makeStyles,
  withStyles
} from '@material-ui/core';

const ModalTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    minWidth: 320,
    [theme.breakpoints.down('sm')]: {
      minWidth: 'calc(100vw - 10px)'
    }
  },
  popper: {
    [theme.breakpoints.down('sm')]: {
      position: 'fixed',
      left: 0
    }
  },
}))(Tooltip);

const useStyles = makeStyles(() => ({
  btnShop: {
    color: '#676564',
    fontSize: 13,
    padding: 0,
    '&:hover': {
      cursor: 'pointer'
    }
  }
}));

const HeroTooltip = ({
  className,
  disableHover,
  children,
  product,
  position,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <ModalTooltip
      disableHoverListener={disableHover}
      title={
        <React.Fragment>
          <Box
            borderRadius={3}
            px={2}
            py={1}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box display="flex" flexDirection="column">
                <Typography variant="subtitle2" color="textSecondary">
                  {product.title}
                </Typography>
                <Typography variant="overline" color="textSecondary">
                  {product.description}
                </Typography>
              </Box>
              <Button
                disableElevation
                color="primary"
                component={RouterLink}
                to="#"
                variant="contained"
              >
                Shop now
              </Button>
            </Box>
            <Box my={1.5}>
              <Divider />
            </Box>
            <Box display="flex" justifyContent="start">
              <Button
                className={classes.btnShop}
                component="a"
                endIcon={
                  <img src="/static/icons/modal-arrow-right.svg" alt="Modal Arrow Right" />
                }
              >
                {`Shop all ${product.name}s`}</Button>
            </Box>
          </Box>
        </React.Fragment>
      }
      enterTouchDelay={0}
      leaveDelay={500}
      leaveTouchDelay={90000}
      placement={position}
    >
      {children}
    </ModalTooltip>
  )
}

HeroTooltip.defaultProps = {
  product: {},
  position: 'right'
};

HeroTooltip.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  product: PropTypes.object.isRequired,
  position: PropTypes.oneOf(['top-start', 'top', 'top-end', 'left', 'right', 'bottom-start', 'bottom', 'bottom-end'])
};

export default HeroTooltip;
