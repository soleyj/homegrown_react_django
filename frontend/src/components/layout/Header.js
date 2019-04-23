    
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import  PropTypes from "prop-types";
import { logout } from '../../actions/auth';



export class Header extends Component {

static porpTpyes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

  render() {
    const {isAuthenticated,user} = this.props.auth;

    const authLinks = (
      <li className="nav-item">
      <button onClick ={this.props.logout} className ="nav-link btn bnt-info btn sm">Logout</button>
    </li>
    );

    const guestLinks = (
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Login
        </Link>
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </li>
    );


    return (
        <nav className="navbar navbar-sm navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
            {isAuthenticated ? authLinks: guestLinks}
            </div>
        </div>
        </nav>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect (mapStateToProps,{logout})(Header);
