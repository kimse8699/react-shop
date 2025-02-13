import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components'

function Detail(props) {

  let {id} = useParams(); 

  useEffect(()=>{
    setTimeout(() => {
      
    }, 2);
  })

  return (
    <div className="container">
      <Discount></Discount>
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes.find(shoes => shoes.id == id).title}</h4>
          <p>{props.shoes.find(shoes => shoes.id == id).content}</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div>
  ) 
}

export default Detail;

function Discount(){
  return (
    <div className="alert alert-warning">
      2초 이내 구매시 할인
    </div>
  )
}