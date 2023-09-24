import "../home/Home.scss";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import ListTable from "../../components/listTable/ListTable.jsx";
import { useContext } from "react";
import darkThemeContext from "../../context/darkTheme/darkThemeContext";
import "../../style/dark.scss";

const Home = ()=> {


    return(
        <div className={"home"}>
            <Sidebar/>
            <div className="home-container">
                <Navbar/>
                <div className="widgets">
                    <Widget type="users"/>
                    <Widget type="orders"/>
                    <Widget type="earnings"/>
                    <Widget type="balance"/>
                </div>
                <div className="charts">
                    <Featured/>
                    <Chart height={"90%"} width={"100%"} title={"Last 6 Months (Revenue)"}/>
                </div>
                <div className="listTable">
                    <ListTable/>
                </div>
            </div>
        </div>
    )
};

export default Home;