import React, { useState } from 'react'
import styles from './Chart.module.css'
import { convertData } from '../../helpers/convertData'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

function Chart({ chart, setChart }) {
    const [type, setType] = useState("prices")

    console.log(convertData(chart, type))
    return (
        <div className={styles.container}>
            <span className={styles.cross} onClick={() => setChart(null)}>X</span>
            <div className={styles.chart}>
                <div className={styles.graph}>
                    <ChartComponent data={convertData(chart, type)} type={type} />
                </div>
            </div>
        </div>
    )
}

export default Chart

const ChartComponent = ({ data, type }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} width={400} height={400}>
                <CartesianGrid strokeDasharray="3 3" stroke="#404042" />
                <XAxis hide dataKey="date" />
                <YAxis domain={["auto", "auto"]} dataKey={type} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey={type} stroke="#8884d8" strokeWidth="2px" />
            </LineChart>
        </ResponsiveContainer>
    )
}