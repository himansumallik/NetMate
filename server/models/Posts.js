import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        userId : {
            type: String,
            requied: true,
        },
        firstName : {
            type: String,
            requied: true,
        },
        lastName : {
            type: String,
            requied: true,
        },
        location : String,
        description: String,
        picturePath: String,
        userPicturePath: String,
        likes: {
            type: map,
            of: Boolean,
        },
        comments:{
            type: Array,
            default: []
        }
    },
    {timestamps: true}
);

const Post = mongoose.model("Post", postSchema);

export default Post;