import { useEffect, useState, } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody } from '../components/styled/Card';
import { StyledTable } from '../components/styled/Table';
import { fetchCurrencyData } from '../api';
import { Currency } from '../interfaces/general';

const HomePage: React.FC = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);

  useEffect(() => {
    const getCurrencies = async () => {
      const data: Currency[] = await fetchCurrencyData(); 
      setCurrencies(data);
    };
    getCurrencies();
  }, []);

  return (
    <div>
      <Card>
        <CardHeader>Current Exchange Rates</CardHeader>
        <CardBody>
          <StyledTable>
            <thead>
              <tr>
                <th>Currency</th>
                <th>Code</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody>
              {currencies.map(currency => (
                <tr key={currency.code}>
                  <td>
                    <Link to={`/currency/${currency.code}`}>{currency.currency}</Link>
                  </td>
                  <td>{currency.code}</td>
                  <td>{currency.mid}</td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </CardBody>
      </Card>
    </div>
  );
};

export default HomePage;
