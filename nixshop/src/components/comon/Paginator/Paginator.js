import React, { useState } from 'react';
import s from './Paginator.module.css';

//currentPage-текущая страница
let Paginator = ({ currentPage, totalItemsCount, pageSize, onPageChanged, portionSize = 2 }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize); //узнаем сколько станиц вообще
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    //portionSize сколько страниц отобажать юзеру
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.userButtonConteiner} >
            {portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }} className={s.userButtonPrev} />}
            {
                pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                        return <button key={p} onClick={() => { onPageChanged(p) }} className={
                            `${s.userButton}
                    ${currentPage === p && s.userButtonActive}`}> {p} </button>
                    })
            }
            {portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }} className={s.userButtonNext}></button>
            }
        </div>
    )
}


export default Paginator 