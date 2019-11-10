import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosWithAuth from '../uttils/axiosWithAuth';
import FriendForm from './FriendForm';
import FriendCard from "./FriendCard";
import { Route, Redirect } from 'react-router-dom';

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
            .then(res => console.log(res) || setFriendsList(res.data))
            .catch(err => console.log(err.response));
    };

    const editFriend = friend => {
        axiosWithAuth()
            .put(`http://localhost:5000/api/friends/${friend.id}`, friend)
            .then(res => console.log(res) || setFriendsList(res.data) || props.history.push("/friends"))
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
            <Route exact path="/friends" render={props => <FriendForm {...props} submitFriend={addFriend}/>}/>
            {/*<FriendForm submitFriend={addFriend}/>*/}
            {friendsList.map(friend => {
                return <FriendCard key={friend.id}
                                   friend={friend}
                                   deleteFriend={deleteFriend}
                />
            })}
            <Route exact path="/friends/edit/:id" render={props => {
                console.log(props);
                const currentFriend = friendsList.find(friend => friend.id == props.match.params.id);
                if (!currentFriend) {
                    return <Redirect to="/friends"/>
                }
                return <FriendForm {...props} submitFriend={editFriend} initialValues = {currentFriend}/>
            }}/>
        </div>
    )
};

export default Friends;