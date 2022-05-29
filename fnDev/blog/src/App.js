/* eslint-disable */
import { useState } from 'react';
import './App.css';
import Modal from './Modal';
import Profile from './Profile';

function App() {

  let title = 'BLOG'
  let [글제목, b] = useState(['Javascript', 'react', 'node'])
  let [like, c] = useState(0);
  let [modal, setModal] = useState(false)
  let [ttl, setTtl] = useState(0);
  let [입력값, setValue] = useState('')


  return (
    <div className="App">
      <div className="black-nav">
        <h4>{title}</h4>
      </div>

      {
        글제목.map((item, idx) => {

          return(
            <div className="list" key={idx}>
              <h4 onClick={(e) => {
                setModal(true);
                setTtl(idx);
              }}>{item} {idx === 0 ? <span onClick={(e) => { e.stopPropagation(); c(like++); }}>😘 {like}</span> : null} </h4>
              <p>2월 17일 발행</p>
              <button className="btn" onClick={() => {
                let 복사본 = [...글제목];
                복사본.splice(idx, 1);
                b(복사본)
              }}>삭제</button>
            </div>
          )

        })
      }


      <button className="btn" onClick={ () => {

        let 글복사 = [...글제목];
        글복사[2] = 'HTMLCSS';
        b(글복사)

      }}>제목 변경</button>

      <button className="btn" onClick={() => {

        let 글복사 = [...글제목];
        글복사.sort();
        b(글복사);

      }}>제목 정렬</button>

      <button className="btn" onClick={() => {

        setModal(!modal)

      }}>팝업 띄우기</button>

      <div className="ipt_box">
        <input type="text" className="ipt" placeholder="" onChange={(e) => { 
          setValue(e.target.value);
          }} />
        <button className="btn" onClick={() => {
          b([
            입력값,
            ...글제목
          ])
        }}>만들기</button>
      </div>

      {
        modal === true ? <Modal 글제목={글제목} fn={b} ttl={ttl} /> : null
      }
      
      <Profile />
    </div>
  );
}


export default App;
