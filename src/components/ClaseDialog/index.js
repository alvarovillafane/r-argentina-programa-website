import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import YouTube from 'react-youtube';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  videoContainer: {
    width: '95%',
    maxWidth: 640,
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      width: '80%',
    },
  },
  videoWrapper: {
	  position: 'relative',
	  paddingBottom: '56.25%', /* 16:9 */
	  paddingTop: '25px',
    height: '0',
    marginTop: theme.spacing(3),
	  overflow: 'hidden',
    '& iframe': {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      [theme.breakpoints.up('sm')]: {
        position: 'relative',
        width: 640,
        height: 360,
      },
    }
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ClaseDialog = ({handleClose, open, title, videoId}) => {
  const classes = useStyles();

  return (
    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.videoContainer}>
        <div className={classes.videoWrapper}>
          <YouTube videoId={videoId} />
        </div>
      </div>
    </Dialog>
  );
}

ClaseDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  videoId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired, 
};

export default ClaseDialog;
