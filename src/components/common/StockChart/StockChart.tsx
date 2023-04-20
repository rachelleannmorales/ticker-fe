import * as React from 'react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import moment from 'moment';


interface IChartProps {
  name: string,
  data: any[],
  handleMouseOver: (e:any) => void
  options?: any,
}

const StockChart: React.FC<IChartProps> = ({name, data, handleMouseOver, options={}}) => {
  const chartOptions = {
    title: { text: name },
    series: [
      {
        name: "Stock Price",
        data: data,
      }
    ],
    xAxis: {
      type: "datetime",
    },
    yAxis: {
      title: {
        text: "Price",
      }
    },
    plotOptions: {
      series: {
          point: {
              events: {
                  mouseOver: function(e: any) {
                    e.preventDefault();
                    handleMouseOver(e)
                  }
              }
          },
          events: {
              mouseOut: function () {
                  
              }
          }
      }
  },
  } as any

  return (
    <HighchartsReact
    highcharts={Highcharts}
    options={chartOptions}
    constructorType={'stockChart'}
  />
  )
};

export default StockChart;