import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'



const App = () => {
  return (
    <div className = "ui container comments">
      <CommentDetail
        avatar = {faker.image.avatar()}
        author = "Sam"
        timeAgo = "Today at 4:00PM"
        text = "Great last blog post!"
      />
      <CommentDetail
        avatar = {faker.image.avatar()}
        author = "Alex"
        timeAgo = "Today at 2:00AM"
        text = "Really learned something here."
      />
      <CommentDetail
        avatar = {faker.image.avatar()}
        author = "Jane"
        timeAgo = "Yesterday at 5:00PM"
        text = "Never gonna let you down."
      />
    </div>
  )
};


ReactDOM.render(<App />, document.querySelector('#root'));