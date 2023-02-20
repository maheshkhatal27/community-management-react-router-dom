import Navbar from "../Navbar"
import ReactPlayer from "react-player"
import "./index.css"

const Gallery = () => {
  return (
    <>
        <Navbar />
        <div className="gallery-container">
            <nav className="contact-us-navbar">Files Uploaded By Residents</nav>
            <div className="files-container">
                <img src="https://res.cloudinary.com/dodmtflaq/image/upload/v1676906998/community-maintenance/iamge1_npocxi.png" alt="files" className="file-resize" />
                <img src="https://res.cloudinary.com/dodmtflaq/image/upload/v1676906914/community-maintenance/img1_mnn2lv.png" alt="files" className="file-resize" />
                <ReactPlayer url="https://www.youtube.com/watch?v=HG5c4Fx1kVU" height="200px" width="300px" />   
            </div>
        </div>
    </>
  )
}

export default Gallery