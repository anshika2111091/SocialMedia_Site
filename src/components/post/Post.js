import "./post.css";
import { More, MoreVert } from "@mui/icons-material";

const Post = () => {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/person/1.jpeg" alt="" />
                    <span className="postUsername">Safak Kocaoglu</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                  <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey! Its my first post</span>
                <img className="postImg" src="/assets/post/1.jpeg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postButtonLeft">
                <img  className="likeIcon" src="assets/like.png" alt="" />
                    <img  className="likeIcon" src="assets/heart.png" alt="" />
                    <span className="postLikeCounter">32 people liked it</span>
                  
                </div>
                <div className="postButtonRight">
                    <span className="postCommentText">9 comments</span>
                </div>
            </div>
        </div>
      
      
    </div>
  )
}

export default Post
