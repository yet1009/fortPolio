/* eslint-disable */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data';
import Shoes from './Shoes';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Details from './routes/Details.js'
import axios from 'axios'

function App() {

  let [shoes,setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link> */}

      <Routes>
        <Route path="/" element={

            <>
              <div className="main-bg">
              </div>

              <div className="container">
                <div className="row">
                  {
                    shoes.map((item) => {
                      return (
                        <Shoes item={item} />
                      )
                    })
                  }
                </div>
              </div>

              <button onClick={() => {
                axios.get('https://codingapple1.github.io/shop/data2.json').then((result) => {
                  let arr = result.data;
                  console.log(shoes)
                  console.log(arr)
                  setShoes([
                    ...shoes,
                    ...arr
                  ])
                }).catch(() => {
                  console.log('실패함')
                })

                

              }}>더보기</button>
            </>

        }  />

        <Route path="/detail/:id" element={ <Details shoes={shoes} /> } />
        


        <Route path="/about" element={
          <>
            <div>어바웃</div>
            <Outlet></Outlet> {/* nested route의 자식요소가 보여지게 하는법 */}
          </>
        } >
          <Route path="member" element={<div>멤버</div>} />
        </Route>
        {/* <Route path="*" element={<div>없는 페이지입니다.</div>} /> */}

        <Route path="/event">
          <Route path="one" element={
            <div className="eventOne">
              <h3>오늘의 이벤트</h3>
              <p>첫 주문시 양배추즙 서비스</p>
            </div>
          } />
          <Route path="two" element={
            <div className="eventTwo">
              <h3>오늘의 이벤트</h3>
              <p>생일기념 쿠폰받기</p>
            </div>
          } />

        </Route>

      </Routes>

      

    </div>
  );
}

export default App;
