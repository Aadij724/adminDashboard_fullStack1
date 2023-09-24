import "./ListTable.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ListTable = () => {

    function createData(trackingId, img, product, customer, date, amount, paymentMethod, status) {
        return { trackingId, img, product, customer, date, amount, paymentMethod, status };
      }
      
    const rows = [
        createData(6375482, "https://fastly.picsum.photos/id/3/200/200.jpg?hmac=N5yYUNYl5gOUcaMmTtnNNtx839TN2qaNM4SaXhQl65U", "Acer nitro 5", "John Smith", "1 March", 4833, "Cash on delivery", "Approved"),
        createData(7563893, "https://fastly.picsum.photos/id/3/200/200.jpg?hmac=N5yYUNYl5gOUcaMmTtnNNtx839TN2qaNM4SaXhQl65U", "Playstation 5", "Michael Doe", "1 March", 987432, "Online Payment", "pending"),
        createData(7485745, "https://fastly.picsum.photos/id/3/200/200.jpg?hmac=N5yYUNYl5gOUcaMmTtnNNtx839TN2qaNM4SaXhQl65U", "Reddragon S101", "John Smith", "1 March", 98375, "Cash on delivery", "pending"),
        createData(8974189, "https://fastly.picsum.photos/id/3/200/200.jpg?hmac=N5yYUNYl5gOUcaMmTtnNNtx839TN2qaNM4SaXhQl65U", "Razer Blade 15", "Jane Smith", "1 March", 62354, "Online", "Approved"),
        createData(9873941, "https://fastly.picsum.photos/id/3/200/200.jpg?hmac=N5yYUNYl5gOUcaMmTtnNNtx839TN2qaNM4SaXhQl65U", "Asus Rog S", "Harold Pots", "1 March", 12093, "Online", "pending"),
    ];

    return (
        <div className="list">
            <div className="title">
                Latest Transactions
            </div>
            <div className="table">
                <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Tracking Id</TableCell>
                        <TableCell align="tablecell">Product</TableCell>
                        <TableCell align="tablecell">Customer</TableCell>
                        <TableCell align="tablecell">Date</TableCell>
                        <TableCell align="tablecell">Amount</TableCell>
                        <TableCell align="tablecell">Payment Method</TableCell>
                        <TableCell align="tablecell">Status</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.trackingId}>
                        <TableCell align="tablecell">{row.trackingId}</TableCell>
                        <TableCell align="tablecell">
                            <div className="product">
                                <img src={row.img} alt=""/>
                                <span>{row.product}</span>
                            </div>
                        </TableCell>
                        <TableCell align="tablecell">{row.customer}</TableCell>
                        <TableCell align="tablecell">{row.date}</TableCell>
                        <TableCell align="tablecell">{row.amount}</TableCell>
                        <TableCell align="tablecell">{row.paymentMethod}</TableCell>
                        <TableCell align="tablecell">
                            <div className={ row.status=="Approved" ? "status approved" : "status pending"}>
                                {row.status}
                            </div>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default ListTable;