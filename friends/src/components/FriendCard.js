import React from 'react';

const FriendCard = ({friend, deleteFriend}) => {
    return (
        <div>
            Name: {friend.name} Age: {friend.age} Email: {friend.email}
            <button onClick={() => deleteFriend(friend.id)}>Delete</button>
        </div>
    )
};

export default FriendCard;