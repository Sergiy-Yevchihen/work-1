//події клавіатури
const refs = {
    output: document.querySelector('.js-output'),
    clearBtn: document.querySelector('.js-clear'),

};

window.addEventListener("keypress", onKeypress);
refs.clearBtn.addEventListener('click', onClearOutput);

//keydown реагуе на будь які клавіши включно з службовими
//keypress окрім службових тільки текстові
function onKeypress(event) {
    console.log(event);
    refs.output.textContent += event.key;
}

function onClearOutput() {
    refs.output.textContent = '--';
}