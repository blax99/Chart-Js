import "./App.css";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import sourceData from './data/sourceData.json'
import sourceData2 from './data/sourceData2.json'
import sourceData3 from './data/sourceData3.json'

const App = () => {
  const lineData = {
    labels: sourceData2.map((data) => data.label),
    datasets: [{
      label: "Students",
      data: sourceData2.map((data) => data.value),
      backgroundColor: 'red'
    },
    {
      label: "Teachers",
      data: sourceData3.map((data) => data.value),
      backgroundColor: 'blue',
    }]
  };


  const controlOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
  const responsiveOptions = {
    responsive: true
  }
  const BarData = {
    labels: sourceData.map((data) => data.label),
    datasets: [{
      label: 'Counts',
      data: sourceData.map((data) => data.value),
      backgroundColor: sourceData.map((data) => data.color),
      borderRadius: 5
    }]
  };
  const DonutData = {
    labels: ['A', 'B', 'C'],
    datasets: [{
      label: 'revenue',
      data: sourceData.map((data) => data.value),
      backgroundColor: sourceData.map((data) => data.color)
    }]
  };
  return (
    <div className="dashboard" >
      <div className="dataCard RevenueCard">
        <Line
          data={lineData}
          options={controlOptions}
        />
      </div>
      <div className="dataCard CustomCard">
        <Bar
          data={BarData}
          options={responsiveOptions}
        />
      </div>
      <div className="dataCard CategoryCard">
        <Doughnut
          data={DonutData}
          options={responsiveOptions}

        />
      </div>
    </div >
  )
}

export default App;