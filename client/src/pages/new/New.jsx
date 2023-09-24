import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "../new/New.scss";
import NoPhotographyIcon from '@mui/icons-material/NoPhotography';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from "react";

const New = ({inputArr, title})=> {

    const [profileimg, setProfileimg] = useState("");

    const handleChange = (e) => {
        const url = URL.createObjectURL(e.target.files[0]);
        console.log(e.target.files[0]);
        setProfileimg(url);
    }

    const handleSubmit = (e) => {
        
    }

    return (
        <div className="new">
            <Sidebar className="sidebar"/>
            <div className="new-container">
                <Navbar/>
                <div className="container">
                    <div className="top">
                        {title}
                    </div>
                    <div className="bottom">
                        <div className="left">
                            { profileimg ? <img src={profileimg} alt="" className="imgAlt"/> : <NoPhotographyIcon className="imgAlt"/>}
                        </div>
                        <div className="right">
                            <form>
                                <div className="formInput">
                                    <div className="itemv imgUpl">
                                        <div><span>Image:</span></div>
                                        <label htmlFor="file1">
                                            <DriveFolderUploadIcon id="uploadIcon"/>
                                        </label>
                                        <input onChange={(e)=>handleChange(e)}  type="file" id="file1" style={{display: "none"}}></input>
                                    </div>
                                </div>

                                {inputArr.map( (ele)=>{
                                    return(
                                        <div id={ele.id} className="formInput">
                                            <div className="itemh">{ele.label}</div>
                                            <input type={ele.type} placeholder={ele.placeholder}></input>
                                        </div>
                                    )} 
                                )}
                                
                                <button className="btn" onClick={handleSubmit}>Send</button>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;