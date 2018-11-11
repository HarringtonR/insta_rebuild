import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


class PictureSingle extends Component {
	state = {
		isLike: false,
    	likes:''
	}

  componentDidMount(){
    this.likesCounter()
  }

	async handleClick(e) {
		e.stopPropagation()
		const user_id = localStorage.getItem('user_id')
    	console.log('inside handleClick')
    	axios.post('/like', {
    	picture_id: this.props.picture.id,
    	user_id: user_id,
    })
		this.setState(prevState => ({
			isLike: !prevState.isLike
		}))
    await this.likesCounter()
	}

  handleCommentClick(e){
    e.stopPropagation()
    console.log('comment click')

    localStorage.setItem('picture_id', this.props.picture.id)
  }

  handleClick(e) {
    e.stopPropagation()
    console.log('inside deleteClick')
  }

  likesCounter() {
    axios.get(`http://localhost:3001/finsta/like/${this.props.picture.id}`)
    .then((res) => {
      const data = res.data.data;
      this.setState({
        likes: data.length,
      })
      console.log(res.data.data)
    })
      .catch(err => console.log(err));
      // console.log('this is state: ', this.state)
  }

	render () {
		const isLike = (this.state.isLike) ? 'liked' : 'noLike'
		const data = this.props.picture

		return (
			<div>
				<div className='headofpic'>
					<div className= 'userInformationNewsfeed'>
						<img className='userImg' src={this.props.picture.profpic_url} alt="UserImg"/>
						<div className="usernameTop">{this.props.picture.username}</div>
					</div>
					<div className='delete' onClick = {(e) => this.handleClick(e)}></div>
				</div>
				<img className='picture' src={this.props.picture.img_url} alt="Camera" onClick = {(e) => this.handleClick(e)}/>
				<div className='actions'>
					<div className={`${isLike}`}></div>
					<Link to={{
						pathname: '/commentslist',
						state: { data }
					}}
						className='commentButton'
						onClick = {(e) => this.handleCommentClick(e)}
					>
					</Link>
					<div className='messageButton'></div>
				</div>
				<div className='usernameCaption'>
          			<Link to= {{
          				path: '/likes',
          				state: { data }
          			}}
          				className="likes"
          				>{this.state.likes} Likes</Link>
					<div className="likesCaptionContainer">
  						<div><span className='this'>{this.props.picture.username}</span> {this.props.picture.caption}</div>
          			</div>
				</div>
			</div>
		)
	}

}

export default PictureSingle;
