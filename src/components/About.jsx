import React from 'react';
import './AboutUs.css';
import Header from './Header';
import img17 from '../Assets/img17.jpeg';
import img18 from '../Assets/img18.jpeg';
import img19 from '../Assets/img19.jpeg';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, AreaChart, Area, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ScatterChart, Scatter } from 'recharts';



// Chart data
const pieData = [
  { name: 'Natural Products', value: 55 },
  { name: 'Chemical Products', value: 30 },
  { name: 'Hybrid Products', value: 15 },
];

const lineData = [
  { month: 'Jan', sales: 30 },
  { month: 'Feb', sales: 45 },
  { month: 'Mar', sales: 70 },
  { month: 'Apr', sales: 60 },
  { month: 'May', sales: 90 },
  { month: 'Jun', sales: 100 },
];

const barData = [
  { name: 'Natural', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Chemical', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Hybrid', uv: 2000, pv: 9800, amt: 2290 },
];

const areaData = [
  { month: 'Jan', uv: 400, pv: 2400, amt: 2400 },
  { month: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { month: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
];

const radarData = [
  { subject: 'Natural', A: 120, B: 110, fullMark: 150 },
  { subject: 'Chemical', A: 98, B: 130, fullMark: 150 },
  { subject: 'Hybrid', A: 86, B: 130, fullMark: 150 },
];

const scatterData = [
  { x: 100, y: 200 },
  { x: 120, y: 100 },
  { x: 170, y: 300 },
  { x: 140, y: 250 },
  { x: 150, y: 400 },
  { x: 110, y: 280 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const AboutUs = () => {
  return (
    <div className='hello'>
      <Header />
      <div className="about-us container">
        {/* Intro Section */}
        <section className="about-intro">
          <h1>About Us</h1>
          <p>
            Welcome to our skincare brand! We are dedicated to providing the best in natural skincare products.
          </p>
        </section>

        {/* Pie Chart Section */}
        <section className="charts-section">
          <h2>Product Composition</h2>
          <div className="row">
            <div className="col-md-6">
              <PieChart width={400} height={400}>
                <Pie
                  data={pieData}
                  cx={200}
                  cy={200}
                  labelLine={false}
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </div>

            {/* Line Chart Section */}
            <div className="col-md-6">
              <h2>Sales Trend</h2>
              <LineChart
                width={500}
                height={300}
                data={lineData}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </div>
          </div>

          {/* Bar Chart Section */}
          <h2>Product Type vs Value</h2>
          <BarChart width={600} height={300} data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" fill="#8884d8" />
            <Bar dataKey="pv" fill="#82ca9d" />
          </BarChart>

          {/* Area Chart Section */}
          <h2>Monthly UV and PV Data</h2>
          <AreaChart
            width={600}
            height={400}
            data={areaData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>

          {/* Radar Chart Section */}
          <h2>Product Types Comparison</h2>
          <RadarChart outerRadius={90} width={500} height={400} data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar name="Product A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name="Product B" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            <Legend />
          </RadarChart>

          {/* Scatter Chart Section */}
          <h2>Scatter Chart Example</h2>
          <ScatterChart width={500} height={400}>
            <CartesianGrid />
            <XAxis type="number" dataKey="x" name="X Value" />
            <YAxis type="number" dataKey="y" name="Y Value" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend />
            <Scatter name="A Series" data={scatterData} fill="#8884d8" />
          </ScatterChart>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
