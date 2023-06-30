import React from 'react'
import RightEdge from "../components/RightEdge";
import Slider from "../components/Slider";
import LeftEdge from "../components/LeftEdge";
import Row from "../components/Row";
import Trands from "../components/Trands";
import Sceleton from '../components/Trands/Sceleton';
import Footer from "../components/Footer";
import Menu from '../components/Menu';
import Category from '../components/Category';
import Block from '../components/Block';
import {useDispatch, useSelector} from 'react-redux';
import {setTrand} from '../components/redux/slices/FilterSlice'
import '../styles/Home.css'

export default function Home ({searchValue,setSearchValue}){

  const trand= useSelector(state=>state.filter.trand);
  const dispatch = useDispatch();
const[items,setItems]=React.useState([]);
const [isLoading,setisLoading]=React.useState(true);
const block= React.useRef();



React.useEffect(() => {
  document.body.addEventListener('click', (event) => {
    console.log(event.path || (event.composedPath && event.composedPath()));
    if(!event.composedPath().includes(block.current)){
      setSearchValue('')
          }
  });
}, []);


React.useEffect(()=>{
  setisLoading(true)
  const trands = trand>0 ? `category=${trand}`:'';
  const search = searchValue ? `&search=${searchValue}`: '';

    fetch(`https://63b5fb4e58084a7af3a674cf.mockapi.io/books?${trands}${search}`)
    .then((res)=>{
    return res.json()
  })
  .then((json)=>{
    setItems(json)
    setisLoading(false)
  })
  
}, [trand,searchValue])



    const containerStyles={
        width:'55%',
        height:'470px',
      };
      const slider = [
        {url:"https://citatnica.ru/wp-content/uploads/2020/09/1-5.jpg", title:'City'},
        {url:"https://bestseller.kz/upload/iblock/ac8/ac85ebc1e577764259f2b78b407caa7b.jpg", title:'City'},
        {url:"https://i.ytimg.com/vi/3TFYeOn1b1s/maxresdefault.jpg", title:'City'},
      ]

     
      const arr=['Хиты','Новинки'];
    
    const onChangeTrand=(i)=>{
      dispatch(setTrand(i))
    }
    return(
     <> 
     <Menu></Menu>
    {
      searchValue && (
        <div ref={block} className="block">
        {
            items.map((obj)=>
            <Block key={obj.id} {...obj}/>)
        }
        </div>
      )
      
    }
     
     
      <Category ></Category>
       <div className="container_home">
       <RightEdge></RightEdge>
        <div style={containerStyles}>
         <Slider slider={slider}></Slider>
         </div>
         <LeftEdge></LeftEdge>
       </div>
       <Row></Row>
       <div className="text">
        {
          arr.map((books,i)=><h4 onClick={()=>onChangeTrand(i)} className={trand===i ? 'active' : ''}>{books}</h4>)
        }
       </div>
       <div className="books">
        {
          isLoading
          ?
          [...new Array(10)].map((_,index)=><Sceleton key={index}/>)
          : items.map((obj)=>
            <Trands key={obj.id} {...obj}/>
          )
        }
       </div>
       <Footer></Footer>
     </>
    )
}