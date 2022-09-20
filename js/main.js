let text=document.getElementById("text");

let toggleBtn = document.getElementById("togglebtn");

let colors = ["yellow",'red','blue','green'];

let flag = 0;

var handleToggle = function () {
    text.style.color= colors[flag];
    flag++;
    if (flag >= 3){
       flag=0;
    }


};

toggleBtn.addEventListener('click', handleToggle);