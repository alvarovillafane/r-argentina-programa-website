import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink  } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const useStyles = makeStyles(theme => ({
  active: {
    color: blue[800],
    fontWeight: 'bold'
  },
  icon: {
    color: 'inherit'
  },
}));

function ListItemLink(props) {
  const { icon, primary, to } = props;
  const classes = useStyles();

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <NavLink to={to} {...itemProps} innerRef={ref} />
      )),
    [to],
  );

  return (
    <li>
      <ListItem button 
        component={renderLink} 
        exact={true} 
        to={to} 
        activeClassName={classes.active}
      >
        {icon ? <ListItemIcon className={classes.icon}>{icon}</ListItemIcon> : null}
        <ListItemText className={classes.listItemText} primary={primary}/>
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default ListItemLink;
