import React from 'react';
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
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import Login from '../LoginModal/Login'
import Modal from '../LoginModal/Modal'
export default class Example extends React.Component {

  constructor (props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle () {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render () {
    console.log(this.props)
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">VacTRACK</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                {/* <Modal name="Denise"/> */}
                <Modal />
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
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
    <div>
        <Nav pills>
          <NavItem>
          <NavLink href="https://www.who.int/campaigns/immunization-week/2018/en/">
                <h2>VacTRACK</h2> </NavLink>
          </NavItem>
            <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle nav caret>
                  MyVacTRACK
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header></DropdownItem>
                <DropdownItem nav={Modal}>MyVac</DropdownItem>
                <DropdownItem nav={Login}>Login</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
                <NavItem>
                  <NavLink href="https://www.who.int/campaigns/immunization-week/2018/en/">World Immunization Week </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="http://www2.cdc.gov/nip/adultimmsched/">Adult Vaccine Assessment Tool</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="http://apps.who.int/worldimmunizationweek/" >Test Your Knowledge Quiz</NavLink>
                </NavItem>
        </Nav>
    </div>
            );
          }
        }
