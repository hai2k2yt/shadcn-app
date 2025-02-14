'use client'

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis} from "recharts";
import data from '@/data/analytics'

import React from 'react'

const AnalyticsChart = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            Analytics For This Year
          </CardTitle>
          <CardDescription>
            Views Per Month
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div style={{width: '100%', height: 300}}>
            <ResponsiveContainer>
              <LineChart width={1000} height={300} data={data}>
                <Line type="monotone" dataKey={'uv'} stroke={'#8884d8'} />
                <CartesianGrid stroke={'#ccc'} />
                <XAxis dataKey={'name'} />
                <YAxis />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default AnalyticsChart;