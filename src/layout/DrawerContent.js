import React from 'react';
import ListItemLink from '../components/ListItemLink'
import ExternalLinks from '../components/ExternalLinks'
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import MailIcon from '@material-ui/icons/Mail';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import data from '../data/clases.json';

const styles = theme => ({
  toolbar: {
    ...theme.mixins.toolbar,
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
  },
  list: {
    padding: '8px',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
});


function DrawerContent(props) {
  const { classes } =   props;
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const clasesDelCurso = data.clases;
  
  return (
    <div>
      <div className={classes.toolbar}>
        <ExternalLinks/>
      </div>
      <Divider />
      <List className={classes.list}>
        <ListItemLink to="/" primary="Home" icon={<InboxIcon />} />
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Curso" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List className={classes.nested}>
            {clasesDelCurso.map((clase, index) => {
              return <ListItemLink key={index} to={`/clase/${clase.id}`} primary={`Clase ${clase.id}`} icon={<InboxIcon />} />
            })}
          </List>
        </Collapse>
        <ListItemLink to="/codigo-de-conducta" primary="Código de conducta" icon={<MailIcon />} />
      </List>
    </div>
  );
}

export default withStyles(styles)(DrawerContent);
