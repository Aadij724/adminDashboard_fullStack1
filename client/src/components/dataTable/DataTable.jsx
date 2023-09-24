import "../dataTable/DataTable.scss";
import { DataGrid } from '@mui/x-data-grid';
// import { userColumns, userRows, productRows } from "../../dataTableSource.js";
import { userColumns } from "../../dataTableSource.js";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import DataContext from "../../context/Data/DataContext";


const DataTable = ({page})=> {

    const rows_d = useContext(DataContext);

    // const [data, setData] = useState( page==="users" ? userRows : productRows );

    const [data, setData] = useState(page==="users" ? rows_d.userRows : rows_d.productRows)

    const handleClick = (id)=>{
        if( page==="users") {
            rows_d.userRows = rows_d.userRows.filter((row)=>{
                if(row.id!==id)
                    return row;
                })
            setData(rows_d.userRows);
        } else if ( page==="products" ) {
            rows_d.productRows = rows_d.productRows.filter((row)=>{
                if(row.id!==id)
                    return row;
                })
            setData(rows_d.productRows);
        }
        
    }

    const actionColumn = {
        field: "action", 
        headerName: "Action", 
        width: 180, 
        renderCell: (params) => {
            return (
                <div className="action">
                    <Link to={`/${page}/${params.row.id}`} style={{textDecoration: "none"}}>
                        <div className="view">View</div>
                    </Link>
                    <div className="delete" onClick={()=>handleClick(params.row.id)}>Delete</div>    
                </div>
            )
        },
    };
    
    const columns = userColumns.concat(actionColumn);

    return (
        <DataGrid className="datatable"
            rows={data}
            columns={columns}
            initialState={{
            pagination: {
                paginationModel: { page: 0, pageSize: 5 },
            },
            }}
            pageSizeOptions={[5, 10, 20]}
            checkboxSelection
        />
    )
};

export default DataTable;