let selectElem = document.querySelector('select');

let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme(){
    let current = selectElem.value;

    if (current == 'dark') {
       document.body.className = 'dark';
       document.querySelector("img").setAttribute("src", "./byui-logo_white.png");
        //give body the dark class
        //add different image by changing src
    }
    else{
        document.body.className = '';
        document.querySelector("img").setAttribute("src", "./byui-logo_blue.webp");
        //take off class
        //change the image back to original
    }
}