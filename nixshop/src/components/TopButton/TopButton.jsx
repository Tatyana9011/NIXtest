import s from './TopButton.module.css';
import top from "../../img/top.svg";
import { useSelector } from 'react-redux';

const TopButton = () => {
  const btnTopShow = useSelector(state => state.cart.btnTopShow);
  const scroll = event => {
    event.preventDefault();
    let deviceWindow = document.getElementById('up');
    deviceWindow.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  if (btnTopShow) {
    return(
            <div id='top'>
                <img src={top} alt="up" onClick={scroll} className={s.up}/>
            </div>
    )
  } else {
    return "";
  }
}
export default TopButton;