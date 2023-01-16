import ReactApexChart, {Props} from 'react-apexcharts';
// import './DonutChart.css'

interface IDonutProps{
  series: any[],
  colors: any[],
  labels: any[],
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

export const DonutChart = ({series,legendOffsetY,chartOffsetY, height,colors,labels, width, type, showLegend, legendPosition, fileNameToUpload, fontWeightLegend, anotherInfo}: IDonutProps) => {

    const propsChart : Props =
      {
        series, //DINAMICO
        options: {
          dataLabels: {
            enabled: true,
            style: {
              colors: ['white']
            }

          },
          labels, //DINAMICO
          colors, //DINAMICO
          legend: {
            show: showLegend ?? true,
            position: legendPosition ?? 'right',
            offsetY:legendOffsetY ?? 8,
            fontWeight: fontWeightLegend ?? 800

          },
          tooltip: {
            enabled: false,
            // custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            //   let total = 0;
            //   for (let x of series) { total += x; }
            //   let selected = series[seriesIndex]
            //   return `
            //   <div class="arrow_box">
            //     <div style='font-weight: 600'>${w.config.labels[seriesIndex] === 'OTROS' ? JSON.stringify(anotherInfo.slice(4, anotherInfo.length+1)).replace(/\[|]|"/g, '').replace(/,/g, ", ") : w.config.labels[seriesIndex]}</div>
            //     <div style='font-weight: 600'>TOTAL: ${selected}</div>
            //     <div style='font-weight: 600'>PORCENTAJE: ${(selected / total * 100).toFixed(2)}%</div>
            //   </div>`
            // }
          },

            chart: {
              type: type ?? undefined,
              toolbar:{
                show:  false,
                // export: {
                //   csv: {
                //     filename: fileNameToUpload,
                //     headerCategory: 'Categoría',
                //     headerValue: 'Valor',
                //   },
                //   svg: {
                //     filename: fileNameToUpload,
                //   },
                //   png: {
                //     filename: fileNameToUpload,
                //   }
                // },

              }
            },

              plotOptions: {},

        },

      }

      if(type) {
        let typeChart : string= type
        if(type === 'donut'){
          typeChart = 'pie'
        }

        propsChart.options!.plotOptions =  {
            [typeChart]: {
              offsetY: chartOffsetY ?? 50,
                  customScale: 1.2,
                  donut: {

                    size: '65%',
                    labels: {
                      show: false,
                      name: {
                        show: false,
                        // formatter: function (val) {
                        //   return `${val}`
                        // },
                        fontSize: '22px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 800,
                        offsetY: -10,
                        color: 'black',
                      },
                      value: {
                        show: false,
                        fontSize: '16px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 400,
                        color: 'black',
                        offsetY: 16,
                        // formatter: function (val) {
                        //     return val
                        //   }
                      },

                      total: {
                        show: false,
                        color: 'black',
                        label: 'Total',
                        // formatter: function (w: { config: { series: any[]; }; }) {

                        //   const reducer = (accumulator: any, curr: any) => accumulator + curr;
                        //   const total = (w.config.series.reduce(reducer)).toFixed(2)
                        //   return total
                        // }
                      },

                  }
                }
              }
    }
  }


      return (

        // <div style={{width: '100%',display: 'flex', justifyContent: 'center'}}>
        //   <div className="chart-wrap">
        //     <div id="chart">
              <ReactApexChart options={propsChart.options} series={propsChart.series} type={type ?? undefined} width={100} height={100} />
        //     </div>
        //   </div>

        // </div>
      );
    }


export default DonutChart