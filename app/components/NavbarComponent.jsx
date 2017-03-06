import React from 'react'
import {Link} from 'react-router'
import Login from './Login'
import WhoAmI from './WhoAmI'
import SignupContainer from '../containers/SignupContainer'

export default (props) => {


  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid" id="mainNav">
          <div className="navbar-header">
           <Link to={'/products'} className="navbar-brand" id="shopperName">Riddikulus</Link>
          </div>
        <ul className="nav navbar-nav navbar-right">
          {props.user && props.user.isAdmin && <li><Link to="/admin">Admin Panel</Link></li>}
          <li className="nav-login">
            {props.user ? <WhoAmI/> : <Login/>}
          </li>
          <li>
            <Link to="/cart" className="navbar-link">
              <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
              (1)
            </Link>
          </li>
        </ul>
        </div>
      </nav>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li className="active"><Link to="/">Beasts <span className="sr-only">(current)</span></Link></li>
            <li><Link href="#">Accessories</Link></li>
            <li><Link href="#">Training</Link></li>
          </ul>
          <form className="navbar-form navbar-left">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search" />
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>
      </nav>
    </div>
  )
}
