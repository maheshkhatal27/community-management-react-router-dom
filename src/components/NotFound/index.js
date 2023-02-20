import Navbar from "../Navbar"
import "./index.css"

export const NotFound = () => {
  return (
    <>
    <Navbar />    
     <div className="not-found-container">
    <h1 className="not-found-text">Page Not Found</h1>
    <img src="https://res.cloudinary.com/dodmtflaq/image/upload/v1676914057/community-maintenance/404pg_cssr4v.png" alt="not-found" className="not-found-img" />
    </div>

    </>
   
  )
}

export default NotFound
