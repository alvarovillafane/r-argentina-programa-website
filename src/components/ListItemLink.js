import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink  } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  listItem: {
    borderRadius: '4px',
    marginBottom: '4px',
  },
  listItemIcon: {
  },
  listItemText: {
    fontSize: '.9rem'
  },
  active: {
    background: 'rgba(12, 154, 231, .08)',
    '& .MuiListItemText-primary, & svg': {
      fontWeight: '600',
    },
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
        className={classes.listItem}
      >
        {icon ? <ListItemIcon className={classes.listItemIcon}>{icon}</ListItemIcon> : null}
        <ListItemText classes={{primary:classes.listItemText}} primary={primary} />
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
