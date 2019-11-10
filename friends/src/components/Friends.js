import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosWithAuth from '../uttils/axiosWithAuth';
import FriendForm from './FriendForm';
import FriendCard from "./FriendCard";

const Friends = (props) => {
    const [friendsList, setFriendsList] = useState([]);
    useEffect(() => {
       axiosWithAuth()
           .get('http://localhost:5000/api/friends', {
               headers: {
                   Authorization: localStorage.getItem('token')
               }
           })
           .then(res => {
               setFriendsList(res.data);
           })
           .catch(err => console.log(err.response));
    }, []);

    const addFriend = friend => {
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', friend)
            .then(res =>console.log(res) || setFriendsList(res.data))
            .catch(err => console.log(err.response));
    };

    const deleteFriend = id => {
        axiosWithAuth()
            .delete(`http://localhost:5000/api/friends/${id}`)
            .then(res => console.log(res) || setFriendsList(res.data))
            .catch(err => console.log(err.response));
    };

    return (
        <div>
            <h2>Friends</h2>
            <FriendForm submitFriend={addFriend}/>
            {friendsList.map(friend => {
                return <FriendCard key={friend.id}
                                   friend={friend}
                                   deleteFriend={deleteFriend}
                />
            })}

        </div>
    )
};

export default Friends;