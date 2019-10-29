import React from 'react';
import ListItemLink from '../components/ListItemLink'
import ExternalLinks from '../components/ExternalLinks'
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import MailIcon from '@material-ui/icons/Mail';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  toolbar: {
    ...theme.mixins.toolbar,
    backgroundColor: '#0c9ae7'
  },
});


class DrawerContent extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.toolbar}>
          <ExternalLinks/>
        </div>
        <Divider />
        <List>
            <ListItemLink to="/" primary="Home" icon={<InboxIcon />} />
            <ListItemLink to="/codigo-de-conducta" primary="Codigo de conducta" icon={<MailIcon />} />
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(DrawerContent);
