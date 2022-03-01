function Textbox() {
    return(
        <div className="typing_wrap">

            <div className="text_box" contentEditable="true">

            </div>
            <div className="utility_box">
                <div className="utility">
                    <ul>
                        <li>
                            <button type="button" className="btn btn_font_type" title="글꼴설정"></button>
                        </li>
                        <li>
                            <button type="button" className="btn btn_font_plus" title="글씨크게"></button>
                        </li>
                        <li>
                            <button type="button" className="btn btn_font_minus" title="글씨작게"></button>
                        </li>
                        <li>
                            <button type="button" className="btn btn_font_underline" title="글자밑줄"></button>
                        </li>
                        <li>
                            <button type="button" className="btn btn_font_cancelline" title="글자취소줄"></button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Textbox;