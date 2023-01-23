/*
import Chart from 'react-apexcharts'
import './donutChart.scss'
interface IDonutProps{
  series: any[],
  colors?: any[],
  labels?: any[],
  width: number,
  type: "line" | "area" | "bar" | "histogram" | "pie" | "donut" | "radialBar" | "scatter" | "bubble" | "heatmap" | "candlestick" | "boxPlot" | "radar" | "polarArea" | "rangeBar" | "treemap" | undefined
  showLegend?: boolean,
  legendPosition?: "right" | "top" | "bottom" | "left",
  fileNameToUpload?: string,
  height?: number,
  legendOffsetY?: number,
  chartOffsetY?: number,
  fontWeightLegend?: number
  anotherInfo?: any
}




const DonutChart = ({series,legendOffsetY,chartOffsetY, height,colors,labels, width, type, showLegend, legendPosition, fileNameToUpload, fontWeightLegend, anotherInfo}: IDonutProps) => {

  const optionsChart = {
    series,
    chart:{
      width,
      type,
      animations: {
        enabled: false},
        dynamicAnimation: {
          enabled: false,

      }
    },

    plotOptions:{
      pie:{
      }
    },
    dataLabels:{
      enabled: false
    },
    legend: {
      show: showLegend
    },

    fill: {
      type: 'gradient',
      colors
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  }



    return (
      <div className="donut">
        <Chart options={optionsChart} series={series} type={type} width={200} />
      </div>
    );

}

export default DonutChart;
*/

import { Doughnut } from 'react-chartjs-2';
import './donutChart.scss'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement);

interface IDonutProps{
  series: any[],
  colors?: any[],
  labels?: any[],
  width: number,
  type: "line" | "area" | "bar" | "histogram" | "pie" | "donut" | "radialBar" | "scatter" | "bubble" | "heatmap" | "candlestick" | "boxPlot" | "radar" | "polarArea" | "rangeBar" | "treemap" | undefined
  showLegend?: boolean,
  legendPosition?: "right" | "top" | "bottom" | "left",
  fileNameToUpload?: string,
  height?: number,
  legendOffsetY?: number,
  chartOffsetY?: number,
  fontWeightLegend?: number
  anotherInfo?: any
}

const DonutChart = ({series,legendOffsetY,chartOffsetY, height,colors,labels, width, type, showLegend, legendPosition, fileNameToUpload, fontWeightLegend, anotherInfo}: IDonutProps) =>{
return(
  <Doughnut
            data={{
              labels: series,
              datasets: [{
                  data: series,
                  backgroundColor: colors
              }]
          }}

        />
)
}

export default DonutChart