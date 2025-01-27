import "./post.css";
import {MoreVert } from "@mui/icons-material";
import {Users} from "../../dummyData";
import {useState} from "react";


const Post = ({post}) => {
    const [like,setLike]=useState(post.like);
    const [isLiked,setIsLiked]=useState(false);
    const likeHandler=()=>{
        setLike(isLiked? like-1:like+1);
       setIsLiked(!isLiked);
    }
   
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={Users.filter((u)=>u.id===post.userId)[0].profilePicture} alt="" />
                    <span className="postUsername">{Users.filter((u)=>u.id===post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                  <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postButtonLeft">
                <img  className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
                    <img  className="likeIcon" onClick={likeHandler} src="assets/heart.png" alt="" />
                    <span className="postLikeCounter" >{like} people liked it</span>
                  
                </div>
                <div className="postButtonRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
      
      
    </div>
  )
}

export default Post
