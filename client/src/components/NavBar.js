import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {


	render() {
    let username = localStorage.getItem('username')
		return (
			<div className = 'navBar'>

				<Link to ={`/WebCam/${username}`}><img className="camera" src="https://res.cloudinary.com/drsaojfyp/image/upload/v1541461559/Screen_Shot_2018-11-05_at_6.45.41_PM.png" alt="Camera"/></Link>
				<Link to ={`/Main`}><img className="logo" src="https://res.cloudinary.com/drsaojfyp/image/upload/v1541460938/Screen_Shot_2018-11-05_at_6.35.27_PM.png" alt="Logo"/></Link>
				<img className="messages" src="https://res.cloudinary.com/drsaojfyp/image/upload/v1541461257/Screen_Shot_2018-11-05_at_6.40.48_PM.png" alt="Camera"/>
			</div>
		)
	}
}

export default NavBar;
