import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import './pieChartBox.scss';

const data = [
  { name: 'Mobile', value: 400, color: '#f70776' },
  { name: 'Desktop', value: 300, color: '#6643b5' },
  { name: 'Laptop', value: 300, color: '#f8b400' },
  { name: 'Tablet', value: 200, color: '#ff5722' },
];

const PieChartBox = () => {
  return (
    <div className="pieChartBox">
      <h1>Leads by Source </h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{
                background: '#5585b5',
                borderRadius: '5px',
                border: '1px solid #fff',
              }}
            />
            <Pie
              data={data}
              innerRadius={'70%'}
              outerRadius={'90%'}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ background: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
