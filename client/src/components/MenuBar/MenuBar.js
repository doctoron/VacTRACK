import React from 'react';
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
    this.state = {
      isOpen: false
    };
  }
  // toggle (e) {
  //   e.preventDefault();
  //   console.log('this was clicked');
  //   this.setState({
  //     isOpen: true
  //   });
  // }
  render () {
    console.log(this.state)
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">VacTRACK</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
            <Nav className="ml-auto" navbar>
              <NavItem>
                {/* <Modal name="Denise"/> */}
                <Button color="danger" onClick={this.props.toggle}>Login</Button> {' '}
                { sessionStorage.getItem('authenticated') === 'true' ? 
                  <Button color="success" onClick={this.toggleNested}  > MyVacTrack</Button> 
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