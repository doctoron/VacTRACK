import React from 'react';
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
    return (
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
