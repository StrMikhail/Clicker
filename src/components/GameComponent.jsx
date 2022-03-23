import React, { useState, useEffect } from 'react';

const Game = () => {
     
    const stylesBtn = "btn btn-warning m-2 p-1"

    const [totalClicks, setTotalClicks] = useState(0)

    const [count, setCount] = useState(Number)

    const [clickValue, setClickValue] = useState(1)
    const [clickPrice, setClickPrice] = useState(10)
    
    // noob---------------------------------------------------------------
    const [noobCounter, setNoobCounter] = useState(0)
    const [noobPrice, setNoobPrice] = useState(500)
    const [noobIncome, setNoobIncome] = useState(5)
    //--------------------------------------------------------------------


    //Total Clicks--------------------------------------------------------
    const getTotalClicks = () => {
        setTotalClicks(totalClicks+1)
    }
    // Counter------------------------------------------------------------
    const getCount = () => {
        getTotalClicks()
        setCount(count+clickValue)
    }
    //Upgrade click-------------------------------------------------------
    const getUpClickValue = () => {
        if (count >= clickPrice){ 
            setCount(count - clickPrice)
            setClickValue(Math.round(clickValue*1.2)+1)
            setClickPrice(Math.round(clickPrice*2.2))
        }
       
    }
    //Upgrade noob--------------------------------------------------------
    const getNoob = () => {
        if (count >= noobPrice){
        setClickValue(clickValue + noobIncome)
        setNoobCounter(noobCounter+1)
        setNoobPrice(Math.round(noobPrice*2.2))
        setNoobIncome(Math.round(noobIncome*1.2)+1)
        setCount(count - noobPrice)

        }
    }

    return (
        <div className='container'>
            <div className='upgrades'>

                <button type="button" className={stylesBtn} 
                        onClick={getUpClickValue}>
                    Upgrade click ${clickPrice}
                    <p>+{clickValue} per/click</p>
                </button>

                <button type="button" className={stylesBtn}
                    onClick={getNoob}>
                    
                    
                    Upgrade noob ${noobPrice}
                    <p>+{noobIncome} per/click</p>
                </button>
                <button type="button" className={stylesBtn}>Купить помощника за {0} монет</button>
                <button type="button" className={stylesBtn}>Купить умеющего за {0} монет</button>
                <button type="button" className={stylesBtn}>Купить опытного за {0} монет</button>


            </div>

            <div className='clicker-container'>
                <div className='info'>
                    <h4>Total ${count}</h4>
                </div>

                <div className='clicker'>
                    <button type="button" className="btn btn-primary m-2"
                        onClick={getCount}>
                        <h3>Click me</h3>
                        <p>{clickValue} per/click</p>
                    </button>
                    <p>Всего кликов по кнопке {totalClicks}</p>
                </div>

                <div className='helpers-info'>
                    <div>Noob: {noobCounter} lvl</div> 
                    <div>Helper</div>
                    <div>Junior</div>
                    <div>Middle</div>
                    <div>Senior</div>
                </div>

            </div>

        </div>
    );
};

export default Game;