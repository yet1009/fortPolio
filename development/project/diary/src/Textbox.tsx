/* eslint-disable */
import { notEqual } from 'assert';
import React, { useState } from 'react';




interface ClsName {
    large: string,
    small: string,
}

let txtRange = (() => {
    
    let sel: any, range: any, content: Node, node: Element;

    return {

        setValue: function() {
            sel = window.getSelection();

            if(!sel) return;

            range = sel.getRangeAt(0);
            content = range.cloneContents();
            node = document.createElement('span');
        },

        getText: function() {
            this.setValue();
            return sel.toString();
        },
        getHTML() {
            this.setValue();
            const span = document.createElement('span');
            span.appendChild(content);
            return span.innerHTML;
        },
        replace() {
            this.setValue();
            node.innerHTML = sel;
            if(!sel.isCollapsed) {
                
                console.log(sel);
                range.deleteContents();
                range.insertNode(node);
                
                console.log(node);
                if(node.className !== 'border') {
                    node.classList.add('border')
                }
            }

        }
    }


})()


function Textbox() {
    
    let fsize: number = 16;

    let SizeChange = (e: React.MouseEvent<HTMLButtonElement>) => {

        const _txtBox = document.querySelector('.text_box');
        const clsObj: ClsName = {
            large: 'btn btn_font_plus',
            small: 'btn btn_font_minus',
        }

        if( _txtBox instanceof HTMLDivElement) {
            let txt = _txtBox.textContent;
            let _target = e.currentTarget.className;

            if( _target === clsObj.large && txt!.length > 0 ) {
                if( fsize > 30 ) return;
                _txtBox.style.fontSize = `${fsize+=2}px`;
            }
    
            if( _target === clsObj.small && txt!.length > 0 ) {
                if( fsize < 14 ) return;
                _txtBox.style.fontSize = `${fsize-=2}px`;
            }
        }

    }
    

    return(
        <div className="typing_wrap">
            
            <div className="text_box" contentEditable="true"></div>
            <div className="utility_box">
                <div className="utility">
                    <ul>
                        <li>
                            <button type="button" className="btn btn_font_type" title="글꼴설정" onClick = { () => {
                            } }></button>
                        </li>
                        <li>
                            <button type="button" className="btn btn_font_plus" title="글씨크게" onClick={ SizeChange }></button>
                        </li>
                        <li>
                            <button type="button" className="btn btn_font_minus" title="글씨작게" onClick={ SizeChange }></button>
                        </li>
                        <li>
                            <button type="button" className="btn btn_font_underline" title="글자밑줄" onClick = { () => {
                                txtRange.replace()
                            } } ></button>
                        </li>
                        <li>
                            <div className="uploadimg">
                                <label>
                                    <input type="file" />
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}



export default Textbox;