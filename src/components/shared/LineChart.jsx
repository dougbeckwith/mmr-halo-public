import {Line} from 'react-chartjs-2'
//eslint-disable-next-line
import {Chart as ChartJS} from 'chart.js/auto'

const Graph = ({chartData}) => {
  return <Line data={chartData} />
}

export default Graph
