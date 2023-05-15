import express from "express";
import User from "../models/User.js";

/* READ */
const getUser = async(req, res) => {
    try{
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch{
        res.status(404).json({ error: error.message});
    }
} 

const getUserFriends = async(req, res) => {
    try{
        const { id } = req.params;
        const user = await User.findById(id);
        
        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id)) 
        )

        const formattedFriends = friends.map(
            ({_id, firstName, lastName, occupatioin, location, picturePath}) => {
                return {_id, firstName, lastName, occupatioin, location, picturePath};
            }
        )
         res.status(200).json(formattedFriends);

    } catch{
        res.status(404).json({ error: error.message});
    }
} 

/* UPDATE */

const addremoveFriend = async(req, res) => {
    try{

        const {id, friendId} = req.params;
        const user = await User.findById(id);
        const friend = await User.findById(id);

        

    } catch(err){
        res.status(404).json({error: err.message})
    }
}

export default {getUser, getUserFriends, addremoveFriend}