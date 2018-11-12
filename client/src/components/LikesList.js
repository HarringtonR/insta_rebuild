import React, { Component } from 'react';
import Likes from './Likes';

export default class LikesList extends Component{
  state = {
      user_id:'',
      comment:'',
      apiDataLoaded: true,
      apiData: this.props.apiData,
    }

  renderLikes() {
      console.log('this is state: ',this.state)
      if(this.state.apiDataLoaded) {
        return this.state.apiData.map((d, i)=> {
          return(
            <Likes key={i} like={d}/>
          )
        })
      } else return <p>Loading...</p>
    }

  render(){
    return(
      <div className="commentsList">
          {this.renderLikes()}
      </div>
    )
  }
}
