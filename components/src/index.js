import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetails 
                    author="Davi" 
                    timeAgo="Today at 17:53" 
                    content="Nice post!" 
                    img={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails 
                    author="Alana" 
                    timeAgo="Today at 14:20" 
                    content="Cool!" 
                    img={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails 
                    author="Jane" 
                    timeAgo="Today at 13:00" 
                    content="This helped me a lot..." 
                    img={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));