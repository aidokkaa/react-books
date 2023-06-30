import '../../styles/Trands.css'
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addItem } from '../redux/slices/CartSlice'

export default function Trands({id,imageUrl,title,price}){
  const dispatch = useDispatch()
  const cartItem= useSelector(state=>state.cart.items.find(obj=>obj.id===id));
 
  const addedCount = cartItem ? cartItem.count:0

    const onClickAdd=()=>{
        const item={
            id,title,imageUrl,price
        };
        dispatch(addItem(item))
    
    }
  
    return(
        <>
        <div className="item-book">
           <div className="row-green">Хиты</div>
           <img src={imageUrl} alt="" />
             <h5>{title}</h5>
             <h4>{price} тг</h4>
             <div onClick={onClickAdd} className="btn">
                <span>Добавить</span>
                <div  className="count">
                  {addedCount >0 && <i>{addedCount}</i>}
                </div>
             </div>
        </div>
        </>
    )
}