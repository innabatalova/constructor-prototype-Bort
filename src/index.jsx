import React, { useState, useContext } from 'react';

import { Typography, Button, Card, Link } from '@mui/material';
import FieldUserDataForProp from './components/FieldUserDataForProp/FieldUserDataForProp'
import FieldUserDataThreeProp from './components/FieldUserDataThreeProp/FieldUserDataThreeProp'
import FieldUserDataTwoProp from './components/FieldUserDataTwoProp/FieldUserDataTwoProp'

import DBDisposers from '../db'
import Context from './context'

const Wrapper = () => {

  const defoultContext = useContext(Context);
  const [context, setContext] = useState(defoultContext);

  const [result, setResult] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault()

    const query2 = context
    const queryKeys = Object.keys(context);

    const filteredArray = DBDisposers.filter((product) => {
      return queryKeys.every((key) => {
        return product[key] == query2[key];
      });
    });

    const itemDisposers = filteredArray.map((item) =>
      <Card sx={{ marginBottom: 2 }}>
        <Typography variant="h5" color="primary" sx={{ marginBottom: 1 }}>{item.model}</Typography>
        <Link href={item.link} target='_blank' variant="h6" color="primary" sx={{ marginBottom: 1 }}>{item.link}</Link>
        <Typography variant="body2" color="secondary" sx={{ marginBottom: 1 }}>Мощность: {item.power}</Typography>
        <Typography variant="body2" color="secondary" sx={{ marginBottom: 1 }}>Объем камеры: {item.volume} мл</Typography>
        <Typography variant="body2" color="secondary" sx={{ marginBottom: 1 }}>Размер: {item.size} мм</Typography>
      </Card>
    )
    setResult(itemDisposers)
  };


  return (
    <Context.Provider value={[context, setContext]}>
      <Typography variant="h2" color="primary" sx={{ marginBottom: 6 }}>Прототип конструктора подбора модели</Typography>
      <form className="field-form" onSubmit={handleSubmit}>
        <div className='field-wrapper'>
          <FieldUserDataForProp propLabelId='power-id' propLabel='Мощность' propValueOne='390 Вт' propValueTwo='560 Вт' propValueThree='750 Вт' propValueFor='780 Вт' />
          <FieldUserDataThreeProp propLabelId='quantity-id' propLabel='Количество человек в семье' propValueOne='1 - 3 чел' propValueTwo='4 - 6 чел' propValueThree='6 - 8 чел' />
          <FieldUserDataTwoProp propLabelId='diameter-id' propLabel='Диаметр сливного отверстия' propValueOne='90 - 94 мм' propValueTwo='более 94 мм' />
          <FieldUserDataTwoProp propLabelId='control-id' propLabel='Управление' propValueOne='пневмокнопка' propValueTwo='беспроводная кнопка' />
          <FieldUserDataThreeProp propLabelId='soundproofing-id' propLabel='Шумоизоляция' propValueOne='полная' propValueTwo='частичная' propValueThree='нет' />
          <FieldUserDataTwoProp propLabelId='reverce-id' propLabel='Автореверс' propValueOne='да' propValueTwo='нет' />
          <FieldUserDataTwoProp propLabelId='booster-id' propLabel='Усилитель мощности' propValueOne='да' propValueTwo='нет' />
        </div>
        <Button variant="contained" type="submit" sx={{ marginTop: 6 }}>Подобрать</Button>
      </form>

      <Typography variant="h5" color="primary" sx={{ marginTop: 6, marginBottom: 6 }}>Вам подойдут модели...</Typography>
      <div className="result-wrapper">{result}</div>
    </Context.Provider>
  );

}

export default Wrapper;