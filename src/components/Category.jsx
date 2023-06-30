import React from 'react'
import img from '../assets/img/Burger_Menu-128.webp'
import "../styles/Category.css"
export default function Category (){
    const [selected,setSelected]=React.useState(0)
    const [open,setOpen]=React.useState(false);
    const category = React.useRef();
    const cat=['Художественная литература','Детская литература','Семья.Быт','Образование','Здоровье и красота','Спорт и Туризм']
    React.useEffect(() => {
      document.body.addEventListener('click', (event) => {
        // console.log(event.path || (event.composedPath && event.composedPath()));
        if(!event.composedPath().includes(category.current)){
             setOpen(false)
                 console.log('click outs')
              }
      });
    }, []);
    return(
        <>
        <div ref={category}  className="cat">
          <div  onClick={()=>setOpen(!open)} className="cat_label">
          <img className="img" style={{width:'30px'}} src={img} alt="" />
              <h1 className="category">Категорий</h1>
          </div>
         {
            open && (
                <div className="cat_items">
                <ul>
                  {
                    cat.map((item,index)=><li key={index} onClick={()=>setSelected(index)}
                     className={selected===index ? 'active' : ''}>{item}</li>)
                  }
                </ul>
              </div>
            )
         }
        
       
         </div>
        </>
    )
}