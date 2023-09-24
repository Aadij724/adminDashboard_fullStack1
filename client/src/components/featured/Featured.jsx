import "../featured/Featured.scss";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from "react-circular-progressbar";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
    return (
        <div className="featured">
            <div className="top">
                <h1>Total Revenue</h1>
                <MoreVertOutlinedIcon className="icon"/>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
                </div>
                <div className="title">Total sales made today</div>
                <div className="amount">$420</div>
                <div className="caution">Previous transactions processing. Last payments may not be included.</div>
                <div className="details">
                    <div className="detailbox">
                        <div className="head">
                            Target
                        </div>
                        <div className="tail negative">
                            <KeyboardArrowDownIcon className="icon"/>
                            <span>$12.4k</span>
                        </div> 
                    </div>
                    <div className="detailbox">
                        <div className="head">
                            Last Week
                        </div>
                        <div className="tail positive">
                            <KeyboardArrowUpIcon className="icon"/>
                            <span>$12.4k</span>
                        </div> 
                    </div>
                    <div className="detailbox">
                        <div className="head">
                            Last Month
                        </div>
                        <div className="tail positive">
                            <KeyboardArrowUpIcon className="icon"/>
                            <span>$12.4k</span>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;