import React, { Link } from 'react';
import Modal from '../LoginModal';
import {
  Button,
  Collapse,
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

export default class MenuBar extends React.Component {
  constructor (props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render () {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>VacTRACK</NavbarBrand>
          {/* <NavbarBrand href="/">VacTRACK</NavbarBrand> */}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Modal}> </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.who.int/campaigns/immunization-week/2018/en/" target="">
                  World Immunization Week </NavLink>
                {/* <NavLink href="/components/">Components</NavLink> */}
              </NavItem>
              <NavItem>
                <NavLink> </NavLink>
                {/* <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink> */}
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}