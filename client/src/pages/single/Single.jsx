import "../single/Single.scss";
import Navbar from "../../components/navbar/Navbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Chart from "../../components/chart/Chart";
import ListTable from "../../components/listTable/ListTable";

const Single = ()=> {
    return (
        <div className="single">
            <Sidebar/>
            <div className="single-container">
                <Navbar/>
                <div className="top">
                    <div className="left">
                        <div className="edit">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="https://fastly.picsum.photos/id/343/400/400.jpg?hmac=OAMnrxMqp1LKMAqQJBWij5j5fqLf5RKwOgCEJvmv00Y" alt=""/>
                            <div className="details">
                                <h1>Jane Doe</h1>
                                <div className="detail-item">
                                    <div className="itemHead">Email: </div>
                                    <div className="itemValue">email@email.com</div>
                                </div>
                                <div className="detail-item">
                                    <div className="itemHead">Phone: </div>
                                    <div className="itemValue">+91 7465374844</div>
                                </div>
                                <div className="detail-item">
                                    <div className="itemHead">Address: </div>
                                    <div className="itemValue">Etton street 234, New York</div>
                                </div>
                                <div className="detail-item">
                                    <div className="itemHead">Country: </div>
                                    <div className="itemValue">USA</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart height={"90%"} width={"100%"} title={"User Spending (Last 6 Months)"} />
                    </div>
                </div>
                <div className="bottom">
                    <ListTable/>
                </div>
            </div>
        </div>
    );
};

export default Single;
