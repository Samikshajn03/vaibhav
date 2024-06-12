let divs = document.querySelectorAll(".box");

idx=1;
for(div of divs){
div.innerText=`new value for ${idx}`;
idx++;
}