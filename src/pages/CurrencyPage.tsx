import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Card, CardHeader, CardBody } from '../components/styled/Card';
import { Button } from '../components/styled/Button';
import { fetchCurrencyDetails } from '../api';
import { CurrencyDetailsResponse } from '../interfaces/general';
import { Chart, CategoryScale, LinearScale, LineElement, PointElement, Filler, Tooltip } from 'chart.js';

Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Filler, Tooltip);

const chartOptions = {
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
    tooltip: {
      mode: 'index' as const,
      intersect: false
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Date',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Exchange Rate',
      },
    },
  },
};


const CurrencyPage: React.FC = () => {
  const { code } = useParams<{ code: string | undefined }>();
  const [currencyData, setCurrencyData] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const last366Days = new Date(new Date().setDate(new Date().getDate() - 366)).toISOString().split('T')[0];
  const today = new Date();
  const formattedToday = today.toISOString().split('T')[0];
  const thirtyDaysEarlier = new Date(today.setDate(today.getDate() - 30)).toISOString().split('T')[0];
  const [startDate, setStartDate] = useState<string>(thirtyDaysEarlier);
  const [endDate, setEndDate] = useState<string>(formattedToday);

  const getCurrencyDetails = useCallback(async () => {
    const data: CurrencyDetailsResponse = await fetchCurrencyDetails(code!, startDate, endDate);
  
    setCurrencyData(data.rates.map(rate => rate.mid));
    setLabels(data.rates.map(rate => rate.effectiveDate));
  }, [code, startDate, endDate]);

  const handleDateChange = () => {
    if (code) {
      getCurrencyDetails();
    }
  };

  useEffect(() => {    
    getCurrencyDetails();
  }, [code, getCurrencyDetails]);

  const chartData = {
    labels,
    datasets: [
      {
        label: `Exchange Rate of ${code}`,
        data: currencyData,
        borderColor: '#3498db',
        backgroundColor: 'rgba(52, 152, 219, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <Card>
      <CardHeader>
        {code} Exchange Rate
      </CardHeader>
      <CardBody>
        <label htmlFor="start-date">From:</label>
        <input
          type="date"
          id="start-date"
          placeholder={startDate}
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          max={endDate} 
          min={last366Days}
        />
        <label htmlFor="end-date">To:</label>
        <input
          type="date"
          id="end-date"
          placeholder={endDate}
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          min={startDate}
          max={new Date().toISOString().split('T')[0]}
        />
        <Button onClick={handleDateChange}>Update Chart</Button>
        <Line data={chartData} options={chartOptions}/>
      </CardBody>
    </Card>
  );
};

export default CurrencyPage;
