import "./topbar.css";
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
const Topbar = () => {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">SocialMedia</span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <SearchIcon className="searchIcon"/>
                <input type="text"  className="searchInput" placeholder="Search for friend, post or video"/>
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">

                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <PersonIcon/>
                    <span className="topbarIconBadge">1</span>

                </div>
                <div className="topbarIconItem">
                    <ChatIcon/>
                    <span className="topbarIconBadge">1</span>

                </div>
                <div className="topbarIconItem">
                    <NotificationsIcon/>
                    <span className="topbarIconBadge">1</span>

                </div>

            </div>
            <img src="/assets/person/1.jpeg" className="topbarImg" alt="" />
        </div>
    </div>
  )
}

export default Topbar
