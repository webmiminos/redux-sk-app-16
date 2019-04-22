import React,{Component} from 'react';
import { connect } from 'react-redux';
import '../App.css'

import Comments from '../components/Comments'
import AddComment from '../components/Add';

import { addComment, removeComment} from '../actions';


let App = (props) => {

  const { comments, removeComment, addComment } = props;

  return (
      <div className="comments">
      <AddComment addComment={addComment}/>
        <Comments comments={comments} removeComment={removeComment} />
      
      </div>
    )
};

const mapStateToProps = (state) => {
  return {
    comments: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeComment: (id) => dispatch(removeComment(id)),
    addComment: (name, date, text) => dispatch(addComment(name, date, text))
  }
};

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
