import React from 'react';
import './Barchart.css'
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const labels = ["Shein", "Hennes & Mauritz", "Fast Retailing", "Inditex"]
const options = {
  layout: {
    padding: {
      left: 0,

    }
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    y: {
      border: {
        color: 'white'
      }
    },
    x: {
      border: {
        color: 'white'
      }
    },
    yAxes: [{
      ticks: {
        beginAtZero: true,
        fontColor: 'red',
        fontSize: 20,
        padding: 100,
      },
    }]
  },
  plugins: {
    legend: {
      labels: {
        font: {
          size: 15,
        },
        position: "bottom",
      }
    },

  }

}

export const data = {
  labels,
  datasets: [
    {
      label: "Market capitalization Value,$B",
      data: [100, 20, 50, 55],
      backgroundColor: "aqua",
      borderColor: "none",
      borderWidth: 0,
    },
  ],
};
const Barchart = () => {
  return (
    <div className='bar-sizing-wrapper'>
      <div className='bar-sizing-heading'>
        <p>Gen'z make up majority of Shein Ads Spend</p>
        <h6>Shein valued more than H&M and Zara combined</h6>
        <a href='https://www.bloomberg.com/news/articles/2022-04-04/shein-s-100-billion-valuation-would-top-h-m-and-zara-combined?leadSource=uverify%20wall'>View Source</a>
      </div>
      <div className='bar-sizing'>
        <Bar options={options} data={data}></Bar>
        <div className='bar-details'>
          <p>Shein is not only dominating the fast-fashion category, but it also dwarfs most private companies in the world. It’s been widely reported that it’s now worth more than Zara and H&M combined<br /><br />
            Data on Shein’s marketing spend shows that, while Gen Z makes up the bulk of its target audience, it isn’t the only segment the brand is going after. Women ages 18-24 make up a plurality of its target audience in social ad spend at around 44%</p>
        </div>
      </div>
    </div>
  )
}

export default Barchart