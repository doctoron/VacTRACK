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
    console.log(this.props)
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>VacTRACK</NavbarBrand>
          {/* <NavbarBrand href="/">VacTRACK</NavbarBrand> */}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Modal name=""/>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.who.int/campaigns/immunization-week/2018/en/" target="">
                  World Immunization Week </NavLink>
                {/* <NavLink href="/components/">Components</NavLink> */}
              </NavItem>
              <NavItem>
                <NavLink href="https://www.who.int/campaigns/immunization-week/2018/en/">  </NavLink>
                {/* <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink> */}
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
          </Collapse>
        </Navbar>
      </div>
    );
  }
}