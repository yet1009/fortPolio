
const _ipt = document.querySelector('.input_pack');

function selectText() {
    var selectionText = "";

    if (document.getSelection) {

        selectionText = document.getSelection();

    } else if (document.selection) {

        selectionText = document.selection.createRange().text;
        // document.selection.surroundContents(`<span>${selectionText}</span>`)
        // selectionText = document.selection.surroundContents('<span></span>')
    }   

    return selectionText;
}

document.onmouseup = function(e) {    
        // // e.preventDefault();
        // // // console.log(selectText());
        // // document.getElementById("console").innerHTML = selectText();
        // // _txtArea.innerHTML = "<span class='color'>"+selectText()+"</span>";
        // _ipt.innerHTML += `<span>${selectText()}</span>`
        // /* if(selectText().length >= 1) {
        // } */

        Range.surroundContents(`<span>${selectText()}</span>`)
}

// document.onselectionchange = function() {
//         _ipt.innerHTML = `<span>${selectText()}</span>`

// }