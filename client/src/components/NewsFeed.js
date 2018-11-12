import React, { Component } from 'react';
import Picture from './Picture';
import axios from 'axios';
import { disableBodyScroll } from 'body-scroll-lock';


class NewsFeed extends Component {
	state = {
	    apiDataLoaded: false,
	    apiData: null,
	  }

	componentDidMount() {
  	axios.get('/newsfeed')
   	.then( res => {
      this.setState(prevState => ({
        apiDataLoaded: true,
        apiData: res.data.data
      }))
    })
   	this.targetElement = document.querySelector('.scroll')
   	disableBodyScroll(this.targetElement)
	}

	renderPictures() {
		if(this.state.apiDataLoaded) {
			return this.state.apiData.map(d => {
				return(
					<Picture key ={d.id} picture={d}/>
				)
			})
		} else return <p>Loading...</p>
	}

	render(){

		return (
			<div className="newsFeed">
				<div className="scroll">
					{this.renderPictures()}
				</div>
			</div>
		)
	}
}



export default NewsFeed;
