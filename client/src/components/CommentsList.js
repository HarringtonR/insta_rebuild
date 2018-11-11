import React, { Component } from 'react';
import axios from 'axios';
import Comment from './Comment'

export default class comments extends Component{
  state = {
      user_id:'',
      comment:'',
      apiDataLoaded: false,
      apiData: [],
    }

  componentDidMount() {
    this.commentRefresh()
  }

   async handleInputChange(e){
    const name = e.target.name
    const value = e.target.value
    await this.setState(prevState => ({
       [name]: value
    }));
    // console.log("this is state: ", this.state)
  }

  commentRefresh(){
    const picture_id = localStorage.getItem('picture_id')

    axios.get(`/comments/${picture_id}`)
    .then((res) => {
      console.log('this is res: ', res.data.data);
      console.log('this is state: ', this.state)
      const data = res.data.data;
      this.setState({
        apiData: data,
        apiDataLoaded:true
      })
    })
      .catch(err => console.log(err));
      console.log('this is state: ', this.state)
  }


  handleFormSubmit(e){
    e.preventDefault()
    // console.log('STATE', this.state)
    const picture_id = localStorage.getItem('picture_id')
    const user_id = localStorage.getItem('user_id')
    axios.post(`comments/${picture_id}`, {
       picture_id: picture_id,
       user_id: user_id,
       comment: this.state.comment,
    })
    this.setState({
      comment:''
    })
    this.commentRefresh()

    // .catch(err => console.log(err));
    // e.target.reset();
  }

  renderComments() {
      console.log('this is state: ',this.state)
      if(this.state.apiDataLoaded) {
        return this.state.apiData.map(d => {
          return(
            <Comment key ={d.id} comment={d} />
          )
        })
      } else return <p>Loading...</p>
    }

  renderPic(){

  }

  render(){
    console.log(this.props.location.state.data)
    return(
      <div >
        <div className="commentsList">
          {this.renderComments()}
        </div>
        <div className="commentField">
          <img className='commenterPic' src={this.props.location.state.data.profpic_url} alt="UserImg"/>
          <div className='commentandpost'>
            <input
                className= 'commentBox'
                type="text"
                placeholder="Add a comment..."
                name="comment"
                value={this.state.comment}
                onChange={(e) => this.handleInputChange(e)}
            />
            <input 
                type="submit" value="Post" 
                onClick={(e) => this.handleFormSubmit(e)} 
                className='post'
            />
          </div>
        </div>
      </div>
    )
  }
}
