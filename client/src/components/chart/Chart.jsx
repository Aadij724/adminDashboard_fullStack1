import "../chart/Chart.scss";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Chart = ({height, width, title}) => {

    const data = [
        { name: "January", Total: 1200 },
        { name: "February", Total: 2100 },
        { name: "March", Total: 900 },
        { name: "April", Total: 1600 },
        { name: "May", Total: 800 },
        { name: "June", Total: 1700 },
    ]

    return (
        <div className="chart">
            <div className="title">{title}</div>
            <ResponsiveContainer width={width} height={height} className="responsive-container">
                <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 5,
                    right: 10,
                    left: 10,
                    bottom: 0,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" className="chartgrid"/>
                <XAxis dataKey="name" stroke="#888" />
                <Tooltip />
                <Area type="monotone" dataKey="Total" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;