import React, {
  useCallback,
  useEffect,
  useState
} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Typography,
  makeStyles,
  useMediaQuery
} from '@material-ui/core';
import HeroTooltip from 'src/components/HeroTooltip';
import TagButton from 'src/components/TagButton';
import DragTooltip from 'src/components/DragTooltip';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

const products = [
  {
    id: 'jason_wu_chair',
    name: 'chair',
    title: 'Jason Wu Chair',
    description: 'Performance Velvet Rust',
    className: 'tagJasonWuChair',
    smDownPosition: 'bottom'
  },
  {
    id: 'brooks_coffee_table',
    name: 'table',
    title: 'Brooks Coffee Table',
    description: 'White wash oak',
    className: 'tagBrooksCoffeeTable',
    smDownPosition: 'bottom-end'
  },
  {
    id: 'payton',
    name: 'rug',
    title: 'Payton',
    description: 'Hand knotted rug',
    className: 'tagPayton',
    smDownPosition: 'top'
  },
  {
    id: 'sloan_sectional',
    name: 'sectional',
    title: 'Sloan Sectional',
    description: 'Vintage Plush Pewter',
    className: 'tagSloanSectional',
    smDownPosition: 'bottom-start'
  },
  {
    id: 'reese_side_table',
    name: 'table',
    title: 'Reese Side Table',
    description: 'Painted Black',
    className: 'tagReeseSideTable',
    smDownPosition: 'bottom-end'
  }
];

const useStyles = makeStyles((theme) => ({
  root: {},
  heroContainer: {
    position: 'relative',
    height: '100vh',
    minWidth: 900,
    width: '100%'
  },
  heroImage: {
    position: 'absolute',
    height: '100vh',
    maxHeight: 880,
    minHeight: 643,
    objectFit: 'cover',
    objectPosition: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    paddingLeft: theme.spacing(18),
    paddingRight: theme.spacing(18),
    [theme.breakpoints.down('md')]: {
      paddingLeft: 10,
      paddingRight: 10,
    }
  },
  slideContainer: {
    marginTop: 85,
    [theme.breakpoints.down('sm')]: {
      marginTop: 50
    }
  },
  slide: {
    [theme.breakpoints.down('sm')]: {
      position: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100vw',
      textAlign: 'center',
      padding: theme.spacing(0, 2)
    }
  },
  btnStart: {
    borderRadius: 30,
    marginTop: 32,
    padding: '19px 35px'
  },
  tagsContainer: {
    position: 'relative',
    height: '100%',
    padding: '2rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: 200
    }
  },
  tag: {
    position: 'absolute'
  },
  tagJasonWuChair: {
    marginTop: 45,
    marginLeft: 85,
    [theme.breakpoints.down('md')]: {
      marginTop: 25,
      marginLeft: 50,
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 25,
      marginLeft: 10,
    }
  },
  tagBrooksCoffeeTable: {
    marginTop: 165,
    marginLeft: 202
  },
  tagSloanSectional: {
    top: 95,
    right: 390,
    [theme.breakpoints.down('md')]: {
      top: 100,
      right: 300,
    },
    [theme.breakpoints.down('sm')]: {
      top: 145,
      right: 230,
    }
  },
  tagReeseSideTable: {
    top: '50%',
    right: 0
  },
  tagPayton: {
    bottom: 50,
    marginLeft: 102
  },
  dragTooltip: {
    position: 'fixed',
    bottom: 20,
    marginRight: 'auto',
    marginLeft: 'auto',
    left: 0,
    right: 0
  },
  description: {
    marginTop: 15
  }
}));

const TagsContainer = (props) => {
  const classes = useStyles();
  const isSmDown = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <div className={classes.tagsContainer}>
      {
        products.map(product => (
          <HeroTooltip
            key={product.id}
            disableHover={isSmDown}
            product={product}
            position={isSmDown ? product.smDownPosition : undefined}
          >
            <TagButton
              className={clsx(classes.tag, classes[product.className])}
              product={product}
            />
          </HeroTooltip>
        ))
      }
    </div>
  );
};

const Hero = ({ className, ...rest }) => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [isDragTipHide, setDragTipHide] = useState(false);

  const handleDragLeaveEvent = useCallback((event) => {
    setDragTipHide(true);
    window.removeEventListener('scroll', handleDragLeaveEvent, false)
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleDragLeaveEvent)
  }, [isMountedRef, handleDragLeaveEvent]);

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <div className={classes.heroContainer}>
        <img
          className={classes.heroImage}
          src="/static/images/hero-back.jpg"
          width="100%"
          alt="Hero"
        />
        <div className={classes.content}>
          <div className={classes.slideContainer}>
            <div className={classes.slide}>
              <Typography
                variant="h1"
                color="textPrimary"
              >
                the refresh sale
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
              >
                15% off sitewide to recharge your living space. Ends Friday, 2/19
              </Typography>
              <Typography
                className={classes.description}
                variant="subtitle2"
                color="textSecondary"
              >
                15+ collections, 100+ fabrics, 20+ legs
              </Typography>
              <Button
                className={classes.btnStart}
                color="primary"
                component={RouterLink}
                disableElevation
                to="/app"
                variant="contained"
                endIcon={
                  <Box ml={1}>
                    <img src="/static/icons/arrow.svg" alt="Explore Arrow Right Icon" />
                  </Box>
                }
              >
                Start Customizing
              </Button>
            </div>
          </div>
          <TagsContainer />
        </div>
      </div>
      <DragTooltip className={classes.dragTooltip} isHidden={isDragTipHide} />
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string
};

export default Hero;
