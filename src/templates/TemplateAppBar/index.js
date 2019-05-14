import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
    overflow: 'hidden'
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class TemplateAppBar extends React.Component {
  render() {
    const { classes, children } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Grupo ZAP - Teste Engenharia de Software
            </Typography>
          </Toolbar>
        </AppBar>
        <div>{children}</div>
      </div>
    );
  }
}

TemplateAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
};

export default withStyles(styles)(TemplateAppBar);
