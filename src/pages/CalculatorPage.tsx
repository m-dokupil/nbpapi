import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody } from '../components/styled/Card';
import { Button } from '../components/styled/Button';
import { fetchCurrencyData } from '../api';
import { Currency } from '../interfaces/general';
import { ErrorMessage, ConversionOptionsContainer, MessageBox } from '../components/styled/Ui';

type ConvertionDirection = 'toPLN' | 'fromPLN';

const CalculatorPage: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [currency, setCurrency] = useState<string>('');
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [conversionDirection, setConversionDirection] = useState<ConvertionDirection>('toPLN');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const getCurrencies = async () => {
      const data: Currency[] = await fetchCurrencyData();
      setCurrencies(data);
    };
    getCurrencies();
  }, []);

  const handleConversion = () => {
    setError('');
    
    if (!currency) {
      setError('Please select a currency.');
      return;
    }

    if (!amount) {
      setError('Please enter an amount.');
      return;
    }

    const selectedCurrency = currencies.find(c => c.code === currency);
    if (selectedCurrency) {
      const numericAmount = parseFloat(amount);
      if (conversionDirection === 'toPLN') {
        setConvertedAmount(numericAmount * selectedCurrency.mid);
      } else {
        setConvertedAmount(numericAmount / selectedCurrency.mid);
      }
    }
  };

  const handleDirectionChange = (direction: ConvertionDirection) => {
    setAmount('');
    setConvertedAmount(0);
    setConversionDirection(direction);
  };

  const handleMessageDisplay = () => {
    const displayCurrency = conversionDirection === 'toPLN' ? currency : 'PLN';
    const displayConvertedCurrency = conversionDirection === 'toPLN' ? 'PLN' : currency;

    return `${amount} ${displayCurrency}  =  ${convertedAmount.toFixed(2)} ${displayConvertedCurrency}`;
  };

  return (
    <Card>
      <CardHeader>Currency Converter</CardHeader>
      <CardBody>
        <ConversionOptionsContainer>
          <label>
            <input
              type="radio"
              value="toPLN"
              checked={conversionDirection === 'toPLN'}
              onChange={() => handleDirectionChange('toPLN')}
            />
            to PLN
          </label>
          <label>
            <input
              type="radio"
              value="fromPLN"
              checked={conversionDirection === 'fromPLN'}
              onChange={() => handleDirectionChange('fromPLN')}
            />
            from PLN
          </label>
        </ConversionOptionsContainer>

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          onFocus={() => {
            setConvertedAmount(0);
            setAmount('');
          }}
        />
        <select
          value={currency}
          onChange={e => setCurrency(e.target.value)}
        >
          <option value="">Select Currency</option>
          {currencies.map(c => (
            <option key={c.code} value={c.code}>{c.currency}</option>
          ))}
        </select>
        <Button onClick={handleConversion}>Convert</Button>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        {convertedAmount > 0 && (
          <MessageBox>{handleMessageDisplay()}</MessageBox>
        )}
      </CardBody>
    </Card>
  );
};

export default CalculatorPage;
