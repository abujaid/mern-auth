import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import
{
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/authActions'

class Navegation extends Component
{
    constructor (props)
    {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle ()
    {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    onLogoutClick = () =>
    {
        this.props.logoutUser()
    }
    render ()
    {
        const { name } = this.props.auth.user
        const { isAuthenticated } = this.props.auth
        const authLinks = (
            <React.Fragment>
                <NavItem>
                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Products
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            <Link className="nav-link" to="/add-product">Add Product</Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link className="nav-link" to="/products">Products</Link>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                    <span className="navbar-text mr-3">
                        <strong>Welcome {name ? name.toUpperCase() : ''}
                        </strong>
                    </span>
                    <Link to="#" className="nav-link" onClick={this.onLogoutClick}>Logout</Link>
                </NavItem>
            </React.Fragment>
        )
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {isAuthenticated ? authLinks : ''}
                        </Nav >
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
const mpaStateToProps = state =>
{
    return {
        auth: state.auth
    }
}
export default connect(mpaStateToProps, { logoutUser })(Navegation)