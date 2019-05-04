import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

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
          <NavLink href="https://www.who.int/campaigns/immunization-week/2018/en/" target="">
                World Immunization Week </NavLink>
          </NavItem>
            <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle nav caret>
                  Dropdown
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
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
