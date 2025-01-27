import "./Rightbar.css";
import {Users} from "../../dummyData";
import Online from "../online/Online";


const Rightbar = ({profile}) => {
  const HomeRightbar=()=>{
    return(
      <>
      <div className="birthdayContainer">
          <img src="assets/gift.png" className="birthdayImg" alt="" />
          <span className="birthdayText"> <b>Pola Foster</b> and <b>3 other friends  </b> have a birthday today</span>
        </div>
        <img src="assets/ad.png" className="rightbarAd" alt="" />
        <h4 className="rightbarTitle">Online Frineds</h4>
        <ul className="rightbarFriendList">

        {Users.map((user)=>(
          <Online key={user.id} user={user}/>
        ))}
          </ul></>
    )
  }
  const ProfileRightbar=()=>{
    return(
      <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York</span>
          
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue"> Madrid</span>
          
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
          
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarfollowings">
        <div className="rightbarfollowing">
          <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarfollowing">
          <img src="/assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarfollowing">
          <img src="/assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarfollowing">
          <img src="/assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarfollowing">
          <img src="/assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile?<ProfileRightbar/>:<HomeRightbar/>}
      </div>
   
    </div>
  )
}

export default Rightbar
