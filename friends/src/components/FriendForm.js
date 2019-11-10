import React, { useState } from 'react';

const FriendForm = ({submitFriend, initialValues }) => {
    const [friend, setFriend] = useState(initialValues || {name: "", age: "", email: ""});
    const handleChange = e => setFriend({...friend, [e.target.name]: e.target.value});
    const handleSubmit = e => {
        e.preventDefault();
        submitFriend(friend);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name = "name"
                placeholder="name"
                value={friend.name}
                onChange={handleChange}
            />
            <input
                name = "age"
                placeholder="age"
                value={friend.age}
                onChange={handleChange}
            />
            <input
                name = "email"
                placeholder="email"
                value={friend.email}
                onChange={handleChange}
            />
            <button type="submit">Add Friend</button>
        </form>
    );
};

export default FriendForm;