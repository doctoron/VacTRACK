import React from 'react';
import Home from '../../Pages/Home';
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
  DropdownItem,
} from 'reactstrap';

class MenuBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  toggle (e) {
    e.preventDefault();
    console.log('this was clicked');
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  logOut (e) {
    e.preventDefault();
    sessionStorage.removeItem('authenticated');
    this.props.history.push('/login');
  }


  render () {
    console.log(this.state)
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/login">VacTRACK</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Nav className="ml-auto" navbar>
            <NavItem>
              {!sessionStorage.getItem('authenticated')
                ?
                <Button color="danger" onClick={this.props.toggle}> Login</Button>
                :
                <Button color="danger" onClick={this.logOut}> Logout</Button>} {' '}
                
              {sessionStorage.getItem('authenticated')
                ?
                <Button color="success" onClick={this.toggleNested}> MyVacTrack</Button>
                : null
              }
            </NavItem>
            <NavItem>
              <NavLink href="https://www.who.int/campaigns/immunization-week/2018/en/">
                World Immunization Week </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.who.int/campaigns/immunization-week/2018/en/">  </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Resources
                </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="http://www2.cdc.gov/nip/adultimmsched/">Adult Immunization Assessment Tool</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="http://apps.who.int/worldimmunizationweek/">Test Your Vaccination Knowledge</NavLink>
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