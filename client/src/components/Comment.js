import React, { Component } from 'react';

export default class Comment extends Component{

  render(){

    return(

      <div className="commentContainer">
        <img className='userImgComments' src={this.props.comment.profpic_url} alt="UserImg"/>
        <div className="likesCaptionContainer">
          <div>
            <span className = "usernameComment">{this.props.comment.username}</span>
            {this.props.comment.comment}
          </div>
        </div>
      </div>
    )

  }
}
