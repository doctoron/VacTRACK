import React from 'react';
// import Home from '../../Pages/Home';
import { withRouter } from 'react-router-dom';
import {
  Button,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class MenuBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  // toggle (e) {
  //   console.log('this was clicked');
  //     this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }
  logOut (e) {
    e.preventDefault();
    sessionStorage.removeItem('authenticated');
    console.log(this.props)
    //this.props.toggle()
    
    // this.setState=({
    //   isOpen: !this.state.isOpen
    // })
    // How do I return to the login to start over here?
    // this.props.toggle();
    // this.props.history.push('/');
  }
  // logIn (e) {
  //   e.preventDefault();
  //   this.props.toggle();
  // }

  render () {
   //console.log(this.props)
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/login">VacTRACK</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Nav className="ml-auto" navbar>
            <NavItem>
              {this.props.auth
                ?
                <Button color="danger" onClick={this.props.toggle}> Logout</Button>
                :
                <Button color="danger" onClick={this.props.toggle}> Login</Button>}{" "}

              {this.props.auth
                ?
                <Button color="success" onClick={this.toggleNested}> MyVacTrack</Button>
                : null
              }
            </NavItem>
            <NavItem>
              <NavLink href="https://www.who.int/campaigns/immunization-week/2018/en/" target="_blank">
                World Immunization Week </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.who.int/campaigns/immunization-week/2018/en/" target="_blank">  </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Resources
                </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="http://www2.cdc.gov/nip/adultimmsched/" target= "_blank">Adult Immunization Assessment Tool</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="http://apps.who.int/worldimmunizationweek/" target= "_blank">Test Your Vaccination Knowledge</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Blog (Future Enhancement)
                  </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(MenuBar);