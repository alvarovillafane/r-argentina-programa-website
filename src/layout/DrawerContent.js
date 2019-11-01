import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemLink from '../components/ListItemLink'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExternalLinks from '../components/ExternalLinks'
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SvgIcon from '@material-ui/core/SvgIcon';
import data from '../data/clases.json';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  toolbar: {
    ...theme.mixins.toolbar,
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
  },
  list: {
    padding: '8px',
    '& .MuiListItemIcon-root': {
      minWidth: 'auto',
      marginRight: '8px',
    },
    '& .MuiButtonBase-root': {
      borderRadius: '4px',
      marginBottom: '4px',
    },
    '& .MuiTypography-root': {
      fontSize: '.9rem',
      fontWeight: 'bold',
    },
    '& .MuiListItemText-root': {
      marginBottom: '0'
    }
  },
  nested: {
    '& .MuiButtonBase-root': {
      paddingLeft: '48px',
    },
    '& .MuiTypography-root': {
      fontWeight: '500',
    }
  },
  icon: {
    fill: 'inherit',
  },
});

function PoliceBadgeIcon() {
  return (
    <SvgIcon>
      <path d="M12 4.21C13.24 4.72 14.65 5 16 5C17.05 5 18.1 4.84 19.08 4.54C18.5 5.5 18 6.71 18 8C18 9.32 18.54 10.93 19.1 12.63C19.5 13.83 20 15.33 20 16C20 17.03 16.47 19 12 19.96C7.54 19 4 17.03 4 16C4 15.33 4.5 13.83 4.9 12.63C5.46 10.93 6 9.32 6 8C6 6.71 5.5 5.5 4.92 4.54C5.9 4.84 6.96 5 8 5C9.35 5 10.76 4.72 12 4.21M20 2C18.85 2.64 17.4 3 16 3C14.6 3 13.14 2.63 12 2C10.86 2.63 9.4 3 8 3C6.6 3 5.15 2.64 4 2L2 4C2 4 4 6 4 8S2 14 2 16C2 20 12 22 12 22S22 20 22 16C22 14 20 10 20 8S22 4 22 4L20 2M15.05 16.45L11.97 14.59L8.9 16.45L9.72 12.95L7 10.61L10.58 10.3L11.97 7L13.37 10.29L16.95 10.6L14.23 12.94L15.05 16.45" />
    </SvgIcon>
  );
}

function DrawerContent(props) {
  const { classes, onLinkClick } =   props;
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
        <ListItemLink 
          to="/" 
          primary="Home" 
          onClick={onLinkClick} 
          icon={<HomeOutlinedIcon/>} 
        />
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <SchoolOutlinedIcon className={classes.icon}/>
          </ListItemIcon>
          <ListItemText primary="Curso" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List className={classes.nested}>
            {clasesDelCurso.map((clase, index) =>
                <ListItemLink 
                  key={index} 
                  to={`/clase/${clase.id}`} 
                  primary={`Clase ${clase.id}`} 
                  onClick={onLinkClick}
                />
              )}
          </List>
        </Collapse>
        <ListItemLink onClick={onLinkClick} to="/codigo-de-conducta" primary="Código de conducta" icon={<PoliceBadgeIcon />} />
      </List>
    </div>
  );
}

export default withStyles(styles)(DrawerContent);
