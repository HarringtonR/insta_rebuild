import React, { Component } from 'react';

import {Link} from 'react-router-dom';


class Footer extends Component {
	state = {
		isHome: false,
		isProf: true,
	}

	handleClick(e) {
		e.stopPropagation()
		console.log('inside handleClick')

		this.setState(prevState => ({
			isHome: !this.state.isHome,
			isProf: !this.state.isProf,
		}))
	}


	render() {

		let username = localStorage.getItem('username')

		const isHome = (this.state.isHome) ? 'noHome' : 'homeButtonHome'
		const isProf = (this.state.isProf) ? 'notProfile' : 'userProfileHome'


		return (
			<div className = 'footer'>
				<Link to={'/newsfeed'} onClick = {(e) => this.handleClick(e)}>
   				<div className={isHome}></div>
    		</Link>
      		<img className="button" src="https://res.cloudinary.com/drsaojfyp/image/upload/v1541516078/Screen_Shot_2018-11-06_at_9.48.07_AM.png" alt="Logo" />
    			<Link to = {`/AddPhoto/${username}`}>
    				<img className="button addPhoto" src="https://res.cloudinary.com/drsaojfyp/image/upload/v1541515748/Screen_Shot_2018-11-06_at_9.47.42_AM.png" alt="Camera"/>
    			</Link>
    			<img className="button notification" src="https://res.cloudinary.com/drsaojfyp/image/upload/v1541516172/Screen_Shot_2018-11-06_at_9.53.27_AM.png" alt="Camera"/>
    			<Link to={`/profilepage/${username}`} onClick = {(e) => this.handleClick(e)}>
     				<div className={isProf}></div>
      		</Link>
			</div>
		)
	}
}

export default Footer;