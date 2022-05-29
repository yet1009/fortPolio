export default function Modal(props) {
    
    console.log(props);
    return (
        <div className="modal">
            <h4>제목: {props.글제목[props.ttl]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            {/* <button className="btn" onClick={() => {
                console.log(props);
                let 복사본 = [...props.글제목];
                복사본[0] = 'Webpack';
                props.fn(복사본)
            }}>글 수정</button> */}
        </div>
    )

}