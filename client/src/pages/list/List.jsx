import "../list/List.scss";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import DataTable from "../../components/dataTable/DataTable.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";

const List = ({page})=> {

    return (
        <div className="list1">
            <div className="sidebar">
                <Sidebar className="sidebar"/>
            </div>
            <div className="list-container">
                <Navbar className="navbar"/>
                <div className="heading">    
                    <div className="ttl">Add new {page==="users" && <>User</>}{page==="products" && <>Product</>}</div>
                    <Link to={`/${page}/new`} style={{textDecoration: "none"}}>
                        <div className="ttlbtn">Add new</div> 
                    </Link> 
                </div>
                <div className="container">
                    <DataTable page={page}/>
                </div>
            </div>
        </div>
    );

};

export default List;