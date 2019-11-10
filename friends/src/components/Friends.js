import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosWithAuth from '../uttils/axiosWithAuth';
import FriendForm from './FriendForm';

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
    return (
        <div>
            <h2>Friends</h2>
            <FriendForm/>
            {friendsList.map(friend => {
                return <div key={friend.id}>{friend.name}</div>
            })}

        </div>
    )
};

export default Friends;