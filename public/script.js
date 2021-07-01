const pathname = window.location.pathname;

const doTheThing = () => { 
    if (pathname === '/') {
        window.location = './otherpage.html'
    } else {
        window.location = './404.html' 
    }
};

const onlyButton = document.getElementById("theOnlyButton")

if (onlyButton) {
    onlyButton.onclick = doTheThing;
}


const handleForm = () => {
 let inputVal =  document.getElementById("form04Input").value;
 if (inputVal.length === 0) {
     inputVal = "/";
 }
 window.location = inputVal;
}

const formButton = document.getElementById("form04Button");

if (formButton) {
    formButton.onclick = handleForm;
}