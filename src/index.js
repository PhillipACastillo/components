import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
  return (
    <div className = "ui container comments">
      <ApprovalCard>
        <CommentDetail
          avatar = {faker.image.avatar()}
          author = "Sam"
          timeAgo = "Today at 4:00PM"
          text = "Great last blog post!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar = {faker.image.avatar()}
          author = "Alex"
          timeAgo = "Today at 2:00AM"
          text = "Really learned something here."
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar = {faker.image.avatar()}
          author = "Jane"
          timeAgo = "Yesterday at 5:00PM"
          text = "Never gonna let you down."
        />
      </ApprovalCard>
    </div>
  )
};


ReactDOM.render(<App />, document.querySelector('#root'));