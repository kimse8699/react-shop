import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import data from './data.jsx'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  let [shoes] = useState(data)

  return (
    <div>

      <Routes>
        <Route path='/' element={<div>메인페이지임</div>}/>
        <Route path='/detail' element={<div>상세페이지임</div>} />
      </Routes>

      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#Cart">Cart</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

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
