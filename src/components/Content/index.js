import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom'
import Header from '../Header'
import DrawerContent from '../DrawerContent'
import Home from '../Home'
import Overview from '../Overview'
import Curso from '../Curso'
import CodigoDeConducta from '../CodigoDeConducta'
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      flexShrink: 0,
      width: drawerWidth,
      zIndex: 0
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    padding: '16px',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3),
    }
  },
  title: {
    [theme.breakpoints.up('md')]: {
      display: 'block',
      flexGrow: 1,
    }
  },
}));

function Content(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <Header onClick={handleDrawerToggle} />
        <nav className={classes.drawer}>
          <Hidden smDown implementation="css">
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{ paper: classes.drawerPaper, }}
              ModalProps={{ keepMounted: true, }}
            >
              <DrawerContent onLinkClick={handleDrawerToggle}/>
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer
              classes={{ paper: classes.drawerPaper }}
              variant="permanent"
            >
              <DrawerContent />
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar}/>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/overview' component={Overview} />
              <Route path='/curso-javascript' render={() => <Curso />} />
              <Route path='/clases-react' render={() => <Curso react />} />
              <Route path='/codigo-de-conducta' component={CodigoDeConducta} />
              <Route component={NoMatch} />
            </Switch>
        </main>
    </div>
  );
}

function NoMatch({ location }) {
  return (
    <div>
      <Typography variant="h5" component="h1">Oh no! Página no encontrada</Typography>
    </div>
  );
}

export default Content;
