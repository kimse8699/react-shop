import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import data from './data.jsx'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail.jsx'

function App() {
  let [shoes] = useState(data)
  let  navigate = useNavigate();

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home" onClick={()=>{navigate('/')}}>Home</Nav.Link>
          <Nav.Link href="#Cart" onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <div>
            <div className='main-bg'></div>

            <div className="container">
              <div className="row">
                {
                  shoes.map(function(a, i){
                    return (<Card data={shoes[i]}></Card>)
                  })
                }
              </div>
            </div>
          </div>
        }/>
        <Route path='/detail' element={<Detail></Detail>} />
        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>멤버임</div>} />
          <Route path='location' element={<div>위치정보임</div>} />
        </Route>
          <Route path='/event' element={<Event></Event>}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path='two' element={<div>생일기념 쿠폰받기기</div>} />
        </Route>
      </Routes>

    </div>
  )
}

function Event(){
  return (
    <div>
      <h1>오늘의 이벤트</h1>
      <Outlet></Outlet>
    </div>
  )
}

function About(){
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props) {
    return (
      <div className='col-md-4'>
        <img src={props.data.img_url} width='80%'></img>
        <h4>{props.data.title}</h4>
        <p>{props.data.price}</p>
      </div>
    )
}

export default App
