import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts';
import './barChartBox.scss';

type Props = {
  title: string;
  color: string;
  dataKey: string;
  chartDataKey: object[];
};

const BarChartBox = (props: Props) => {
  return (
    <div className="barChartBox">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{
                background: '#131720',
                borderRadius: '5px',
                border: '1px solid #fff',
              }}
              labelStyle={{ display: 'none' }}
              cursor={{ fill: 'none' }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
