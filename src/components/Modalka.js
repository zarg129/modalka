import React, { useEffect, useState } from 'react';
import img from './assets/Vector.png';
import card from './assets/card.svg';
import classnames from 'classnames';

const padTime = time => {
  return String(time).length === 1 ? `0${time}` : `${time}`;
};

const format = time => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return `00:${minutes}:${padTime(seconds)}`;
};

const Modalka = ({ setLoading }) => {
  const [counter, setCounter] = useState(960);
  const [option, setOption] = useState('Банковская карта');
  const [amount, setAmount] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault()
    let value = 0;
    
    if (amount === 100) {
      value = 50;
    } else if (amount === 200) {
      value = 100;
    } else if (amount === 1000) {
      value = 500;
    };
    
    switch (value) {
      case 50:
        return alert(`Вы выбрали способ оплаты: ${option}. Сумма пополнения 50$`);
      case 100:
        return alert(`Вы выбрали способ оплаты: ${option}. Сумма пополнения 100$`);
      case 500:
        return alert(`Вы выбрали способ оплаты: ${option}. Сумма пополнения 500$`);
      default:
        return alert('Выберите бокс');
    };
  };

  useEffect(() => {
    let timer;

    if (counter > 0) {
      timer = setTimeout(() => setCounter(c => c - 1), 1000);
    };

    return () => {
      if (timer) {
        clearTimeout(timer);
      };
    };
  }, [counter]);

  return(
    <div className="modalka">
      <div className="modalka__top">
        <span className="modalka__span">+100%</span>
        <button className="modalka__close" onClick={() => setLoading(false)}>✖</button>
      </div>
      {counter === 0 ? <div className='modalka__timer'>Время закончилось</div> : <div className="modalka__timer"><img className="modalka__image" src={img} />{format(counter)}</div>}
      <h1 className="modalka__title">Увеличьте свой депозит!</h1>
      <img className="modalka-svg" src={card} />
      <select className="modalka__select select" value={option} onChange={(event) => setOption(event.target.value)}>
        <option className="select__item" value="Банковская карта">Банковская карта</option>
        <option className="select__item" value="Биткоин">Биткоин</option>
        <option className="select__item" value="Выставить счет">Выставить счет</option>
      </select>
      <div className="modalka__cards cards">
        <div className={classnames('cards__item', amount === 100
        ? 'cards__item-active'
        : 'cards__item'
        )} onClick={() => setAmount(100)}>
          <div className="cards__container">
            <p className="cards__text">Пополнить на</p>
            <p className="cards__amount">50$</p>
            <p className="cards__text-g">Получить</p>
            <p className="cards__amount-g">100$</p>
          </div>
    
          <div className="pretty p-icon p-round p-pulse cards__radio">
            <input type="checkbox" readOnly={true} checked={amount === 100 ? true : false} />
            <div className="state p-success">
              <i className="icon mdi mdi-check"></i>
              <label></label>
            </div>
          </div>
        </div>

        <div className={classnames('cards__item', amount === 200
        ? 'cards__item-active'
        : 'cards__item'
        )} onClick={() => setAmount(200)}>

          <div className="cards__container">
            <p className="cards__text">Пополнить на</p>
            <p className="cards__amount">100$</p>
            <p className="cards__text-g">Получить</p>
            <p className="cards__amount-g">200$</p>
          </div>
          
          <div className="pretty p-icon p-round p-pulse cards__radio">
            <input type="checkbox" readOnly={true} checked={amount === 200 ? true : false} />
            <div className="state p-success">
              <i className="icon mdi mdi-check"></i>
              <label></label>
            </div>
          </div>
        </div>

        <div className={classnames('cards__item', amount === 1000
        ? 'cards__item-active'
        : 'cards__item'
        )} onClick={() => setAmount(1000)}>

          <div className="cards__container">
            <p className="cards__text">Пополнить на</p>
            <p className="cards__amount">500$</p>
            <p className="cards__text-g">Получить</p>
            <p className="cards__amount-g">1000$</p>
          </div>
          
          <div className="pretty p-icon p-round p-pulse cards__radio">
            <input type="checkbox" readOnly={true} checked={amount === 1000 ? true : false}/>
            <div className="state p-success">
              <i className="icon mdi mdi-check"></i>
              <label></label>
            </div>
          </div>

        </div>
      </div>
      <div className="modalka__counter">
        <p className="modalka__text-g">{amount}$</p> будет зачислено на ваш счет
      </div>
      <button className="modalka__button button" type='submit' onClick={handleSubmit}>Пополнить</button>
      <p className="modalka__info">При пополнении счета с банковской карты списание средств<br/> происходит по курсу банка клиента</p>
      <a href='#' className="modalka__link">Подробнее</a>
    </div>
  );
};

export default Modalka;
