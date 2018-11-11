import React, { Component } from 'react';

class ProfilePicture extends Component {
	state = {
		isLike: false
	}

	handleClick(e) {
		e.stopPropagation()
		console.log('inside handleClick')

		this.setState(prevState => ({
			isLike: !prevState.isLike
		}))
	}

	render () {
		const isLike = (this.state.isLike) ? 'liked' : 'noLike' 
		console.log('hi')
		return (

			<div>
				<img className='profilePic' src={this.props.picture.img_url} alt="Camera" onClick = {(e) => this.handleClick(e)}/>
			</div>
		)
	}

}

export default ProfilePicture;