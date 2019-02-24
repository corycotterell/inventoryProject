import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from 'react-router'
import HomeIcon from '@material-ui/icons/Home'
const styles = {
  root: {
    flexGrow: 1,
  },
  color:{
    backgroundColor: "#BF00FF"
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.goToLogin = this.goToLogin.bind(this)
    this.goToHome = this.goToHome.bind(this)
    this.goToMyInventory = this.goToMyInventory.bind(this)
    this.goToRegister = this.goToRegister.bind(this)
  }
  goToLogin() {
    this.props.history.push("/login")
  }
  goToHome() {
    this.props.history.push('/home')
  }
  goToMyInventory() {
    this.props.history.push('/inventory')
  }
  goToRegister(){
    this.props.history.push('/register')
  }
  render() {
    // const { classes } = this.props;
    return (
      <div className={this.props.classes.root}>
        <AppBar className={this.props.classes.color}position="static">
          <Toolbar>
            <IconButton onClick={this.goToHome} className={this.props.classes.menuButton} color="inherit" aria-label="Menu">
              <HomeIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={this.props.classes.grow}>
              Oil Inventory Management
          </Typography>
            <Button onClick={this.goToMyInventory} color="inherit">Inventory</Button>
            <Button onClick={this.goToLogin} color="inherit">Login</Button>
            <Button onClick={this.goToRegister} color="inherit">Register</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Navbar));
