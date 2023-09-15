import React, { useState, useContext } from 'react';

import FieldUserDataProp from './components/FieldUserDataProp/FieldUserDataProp'

import DBDisposers from '../db'
import Context from './context'

const Wrapper = () => {
  const defoultContext = useContext(Context)
  const [context, setContext] = useState(defoultContext)
  const [result, setResult] = useState([])

  const comfortWeightDisposers = DBDisposers.map(item => {
    let sum = Number(item.soundProofingBoolean) + Number(item.quietStart) + Number(item.autoWater) + Number(item.autoPowerOff)
    if (sum == 0 || sum == 1) {
      item.comfort = 'Стандарт'
      return item
    } else if (sum == 2) {
      item.comfort = 'Комфорт'
      return item
    } else {
      item.comfort = 'Ультра Комфорт'
      return item
    }
  })

  const getModel = (event) => {
    event.preventDefault()

    const query2 = context
    const queryKeys = Object.keys(context)

    const filteredArray = comfortWeightDisposers.filter((product) => {
      return queryKeys.every((key) => {
        return product[key] == query2[key]
      })
    })

    if (filteredArray.length === 0) {
      const noResult = () =>{
        return(
          <div className='constructor__card constructor__card_noResult'>
            <span className='constructor__value'>Увы, соотвествий не найдено!</span>
            <span className='constructor__value'>Попробуйте изменить параметры...</span>
          </div>
        )
        }
      setResult(noResult)
    } else {
      const itemDisposers = filteredArray.map((item, index) =>
        <div className='constructor__card' key={index}>
          <div className='constructor__name-wrap'>
            <img className='constructor__img' src={item.image} alt={item.model} />
            <a href={item.link} target='_blank' className='constructor__link'>BORT {item.model}</a>
            <button className='constructor__button' type="button" onClick={() => { location.href = item.link }}>Перейти</button>
          </div>
          <div className='constructor__value-wrap'>
            <span className='constructor__value'>Мощность: {item.power}</span>
            <span className='constructor__value'>Объем камеры: {item.volume} мл</span>
            <span className='constructor__value'>Размер: {item.size} мм</span>
            <span className='constructor__value'>Шумоизоляция: {item.soundProofing}</span>
            <span className='constructor__value'>Тихий запуск: {item.quietStart ? 'есть' : 'нет'}</span>
            <span className='constructor__value'>Управление: {item.control}</span>
            <span className='constructor__value'>Автоподача воды: {item.autoWater ? 'есть' : 'нет'}</span>
          </div>
        </div>
      )
      setResult(itemDisposers)
    }


  };

  return (
    <Context.Provider value={[context, setContext]}>
      <div className="constructor">
        <h3 className='constructor__title'>Подбор модели измельчителя</h3>
        <form onSubmit={getModel}>
          <div className='constructor__fields'>
            <FieldUserDataProp propLabelId='quantity-id' propLabel='Количество человек в семье' propValueOne='1 - 3 человек' propValueTwo='4 - 6 человек' propValueThree='6 - 8 человек' />
            <FieldUserDataProp propLabelId='size-id' propLabel='Размер измельчителя' propValueOne='Малый' propValueTwo='Средний' propValueThree='Большой' />
            <FieldUserDataProp propLabelId='comfort-id' propLabel='Комфорт использования' propValueOne='Стандарт' propValueTwo='Комфорт' propValueThree='Ультра Комфорт' />
          </div>
          <button className='constructor__button' type="submit">Подобрать</button>
        </form>
        <span className='constructor__result'>Вам подойдут модели...</span>
        <div>{result}</div>
      </div>
    </Context.Provider>
  );

}

export default Wrapper;