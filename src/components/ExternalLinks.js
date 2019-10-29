import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import GitHubIcon from '@material-ui/icons/GitHub';
import RedditIcon from '@material-ui/icons/Reddit';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  appBarButton: {
    color: 'white',
  },
});

function SlackIcon() {
  return (
    <SvgIcon>
      <path d="M6,15A2,2 0 0,1 4,17A2,2 0 0,1 2,15A2,2 0 0,1 4,13H6V15M7,15A2,2 0 0,1 9,13A2,2 0 0,1 11,15V20A2,2 0 0,1 9,22A2,2 0 0,1 7,20V15M9,7A2,2 0 0,1 7,5A2,2 0 0,1 9,3A2,2 0 0,1 11,5V7H9M9,8A2,2 0 0,1 11,10A2,2 0 0,1 9,12H4A2,2 0 0,1 2,10A2,2 0 0,1 4,8H9M17,10A2,2 0 0,1 19,8A2,2 0 0,1 21,10A2,2 0 0,1 19,12H17V10M16,10A2,2 0 0,1 14,12A2,2 0 0,1 12,10V5A2,2 0 0,1 14,3A2,2 0 0,1 16,5V10M14,18A2,2 0 0,1 16,20A2,2 0 0,1 14,22A2,2 0 0,1 12,20V18H14M14,17A2,2 0 0,1 12,15A2,2 0 0,1 14,13H19A2,2 0 0,1 21,15A2,2 0 0,1 19,17H14Z" />
    </SvgIcon>
  );
}

function TwitchIcon() {
  return (
    <SvgIcon>
         <path d="M4,2H22V14L17,19H13L10,22H7V19H2V6L4,2M20,13V4H6V16H9V19L12,16H17L20,13M15,7H17V12H15V7M12,7V12H10V7H12Z" />
    </SvgIcon>
  );
}

class ExternalLinks extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <IconButton 
            aria-label="github"
            target="_blank" 
            href="https://github.com/r-argentina-programa/introduccion-a-js"
            rel="noopener noreferrer" 
            className={classes.appBarButton}
          >
            <GitHubIcon />
          </IconButton>
        <IconButton 
            aria-label="youtube"
            target="_blank" 
            href="https://www.youtube.com/channel/UCXfQLgiBQPIzBp8-nRsG0KA"
            rel="noopener noreferrer" 
            className={classes.appBarButton}
          >
            <YouTubeIcon />
          </IconButton>
        <IconButton 
            aria-label="twitch"
            target="_blank" 
            href="https://www.twitch.tv/rargentinaprograma/"
            rel="noopener noreferrer"
            className={classes.appBarButton}
          >
            <TwitchIcon />
          </IconButton>
          <IconButton 
            aria-label="reddit"
            target="_blank" 
            href="https://www.reddit.com/r/argentina/comments/d9wzkh/alguno_que_ande_corto_de_guita_pero_muy/"
            rel="noopener noreferrer"
            className={classes.appBarButton}
          >
            <RedditIcon />
          </IconButton>
          <IconButton 
            aria-label="slack"
            target="_blank" 
            href = "https://join.slack.com/t/rargentinaprograma/shared_invite/enQtODAyODIzOTIwNTQ1LTNmNWVkMzcyMjVjZTk4MDk2ZjdjOTQ2MWNhYWFjMzZkNGU5ZTgxMWFmMjk3ZDRkYWUxNWRhZWZlNjI4ZmExZWI"
            rel="noopener noreferrer"
            className={classes.appBarButton}
          >
            <SlackIcon />
        </IconButton>
      </div>
    );
  }
}

export default withStyles(styles)(ExternalLinks);
