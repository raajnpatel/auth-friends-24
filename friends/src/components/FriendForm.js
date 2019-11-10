import React, { useState } from 'react';

const FriendForm = props => {
    const [friend, setFriend] = useState({name: "", email: "", age: ""});
    const handleChange = e => setFriend({...friend, [e.target.name]: e.target.value});
    return (
        <form>
            <input
                name = "name"
                placeholder="name"
                value={friend.name}
                onChange={handleChange}
            />
            <input
                name = "email"
                placeholder="email"
                value={friend.email}
                onChange={handleChange}
            />
            <input
                name = "age"
                placeholder="age"
                value={friend.age}
                onChange={handleChange}
            />
            <button type="submit">Add Friend</button>
        </form>
    );
};

export default FriendForm;