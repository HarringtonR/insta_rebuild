import React, { Component } from 'react';

export default class Likes extends Component{
  render(){
    return(
      <div className="commentContainer">
        <img className='userImg' src={this.props.like.profpic_url} alt="UserImg"/>
        <div className="likesCaptionContainer">
          <div className = "username">{this.props.like.username}</div>
          <div>{this.props.like.full_name}</div>
        </div>
      </div>
    )
  }
}
