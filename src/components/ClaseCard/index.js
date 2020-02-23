import React from 'react';
import ClaseDialog from '../ClaseDialog';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  gridItem: {
    overflow: 'hidden',
  },
  card: {
    maxWidth: 345,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    margin: '0 auto',
  },
  media: {
    height: 140,
  },

}));

const ClaseCard = ({clase}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {videoId, title, thumbnail} = clase;
  const ClaseDialogProps = {
    videoId,
    title,
    handleClose,
    open
  }

  return (
    <>
      <Grid item className={classes.gridItem} xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardActionArea className={classes.cardAction} onClick={handleOpen}>
            <CardMedia
              className={classes.media}
              image={thumbnail}
              title={title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <ClaseDialog {...ClaseDialogProps}/>
    </>
  )
}

ClaseCard.propTypes = {
  clase: PropTypes.object.isRequired,
};

export default ClaseCard;

