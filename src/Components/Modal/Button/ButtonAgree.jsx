import { BsBoxArrowLeft } from 'react-icons/bs';

import css from "./ButtonAgree.module.css";


const ButtonAgree = () => {
return (
    <button className={`${css.modalBtn} ${css.btnAgree}`} >Yes <BsBoxArrowLeft className={css.icon} /></button>

)
}

export default ButtonAgree;