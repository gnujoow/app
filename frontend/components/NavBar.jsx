import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

export default class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <AppBar
          title="My AppBar"
          onLeftIconButtonTouchTap={this.handleToggle}
        />

        <Drawer open={this.state.open}>
          <AppBar
            title="Menu"
            iconElementRight={
              <IconButton onClick={this.handleClose}>
                <NavigationClose />
              </IconButton>
            }
            showMenuIconButton={false}
          />
          <Link to='/'>
            <MenuItem onTouchTap={this.handleClose}>처음으로</MenuItem>
          </Link>
          <Link to='/follow'>
            <MenuItem onTouchTap={this.handleClose}>둘러보기</MenuItem>
          </Link>
        </Drawer>
      </div>
    );
  }
}
