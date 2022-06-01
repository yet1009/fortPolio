import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import {Nav} from 'react-bootstrap'


let YellowBtn = styled.button`
    background: ${ props => props.bg };
    color: ${ props => props.bg == 'gold' ? 'white' : 'black'};
    padding: 0 10px;
`
let Box = styled.div`
    background: grey;
    padding: 20px;
`



function Details(props) {

    useEffect(() => {

        let setid = setTimeout(() => {
            setAlert(false)
        },2000)
        return () => {
            clearTimeout(setid)
        }
        
    })
    
    let [alert, setAlert] = useState(true);
    let [count, setCount] = useState(0);
    let {id} = useParams();
    let [tab, setTab] = useState(0);

    return (
        <div className="container">

            {
                alert == true 
                ?
                <div className="alert alert-warning">
                    2초이내 구매시 할인
                </div> 
                : null

            }

            {count}
            <button onClick={() => {setCount(count+1)}}>증가</button>
                <YellowBtn bg="gold">버튼</YellowBtn>
                <YellowBtn bg="tomato">버튼</YellowBtn>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>

            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab} />
           
            
            

        </div> 
    )

    
}

function TabContent(props) {

    if(props.tab == 0) {
        return <div>내용0</div>
    }else if(props.tab == 1) {
        return <div>내용1</div>
    }else if(props.tab == 2) {
        return <div>내용2</div>
    }

}


export default Details;