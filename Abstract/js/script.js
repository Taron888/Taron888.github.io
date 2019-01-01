function drmenu1() {
    document.getElementById('drop1').getElementsByTagName('ul')[0].setAttribute("style", "visibility:visible");

}

function close1() {
    document.getElementById('drop1').getElementsByTagName('ul')[0].setAttribute("style", "visibility:hidden");
}

function drmenu2() {
    document.getElementById('drop2').getElementsByTagName('ul')[0].setAttribute("style", "visibility:visible");
}

function close2() {
    document.getElementById('drop2').getElementsByTagName('ul')[0].setAttribute("style", "visibility:hidden");
}

function divchange1() {
    document.querySelector('#box1').setAttribute('style', 'height:460px')
}

function divclose1() {
    document.querySelector('#box1').setAttribute('style', 'height:0px')
}

function divchange2() {
    document.querySelector('#box2').setAttribute('style', 'height:460px')
}

function divclose2() {
    document.querySelector('#box2').setAttribute('style', 'height:0px')
}

function divchange3() {
    document.querySelector('#box3').setAttribute('style', 'height:460px')
}

function divclose3() {
    document.querySelector('#box3').setAttribute('style', 'height:0px')
}



function divchange5() {
    document.querySelector('#box5').setAttribute('style', 'height:460px')
}

function divclose5() {
    document.querySelector('#box5').setAttribute('style', 'height:0px')
}

function divchange6() {
    document.querySelector('#box6').setAttribute('style', 'height:460px')
}

function divclose6() {
    document.querySelector('#box6').setAttribute('style', 'height:0px')
}








let arr=[0,1,2]
let i=0;
function timing(){
if(i==arr[0]){
    document.querySelector('#slide2').setAttribute('style', 'visibility: hidden;');
    document.querySelector('#slImg1').setAttribute('style', 'height:460px');
i++;
}
else if(i==arr[1]){
    document.querySelector('#slImg2').setAttribute('style', 'height:460px');
i++;
}
else if(i==arr[2]){
    document.querySelector('#slide2').setAttribute('style', 'visibility: visible;');
    document.querySelector('#slImg3').setAttribute('style', 'height:460px');
i=0;
}
setTimeout('timing()',3000);
}


let arr1=[0,1,2]
let k=0;
function closetiming(){
    if(k==arr1[0]){
        document.querySelector('#slide2').setAttribute('style', 'visibility: hidden;');
        document.querySelector('#slImg3').setAttribute('style', 'height:0px');
    k++;
    }
    else if(k==arr1[1]){
        document.querySelector('#slImg2').setAttribute('style', 'height:0px');
    k++;
    }
    else if(k==arr1[2]){
        document.querySelector('#slImg3').setAttribute('style', 'height:0px');
        document.querySelector('#slide2').setAttribute('style', 'visibility: visible;');
    k=0;
    }
    setTimeout('closetiming()',3000);
}

function sect2(){
    document.querySelector('#aj1').setAttribute('style', 'height:100%');
}
function closeSect2(){
    document.querySelector('#aj1').setAttribute('style', 'height:0px');
}

function sect3(){
    document.querySelector('#aj2').setAttribute('style', 'height:100%');
}
function closeSect3(){
    document.querySelector('#aj2').setAttribute('style', 'height:0px');
}

function sect5(){
    document.querySelector('#aj3').setAttribute('style', 'height:100%');
}
function closeSect5(){
    document.querySelector('#aj3').setAttribute('style', 'height:0px');
}

function sect6(){
    document.querySelector('#aj4').setAttribute('style', 'height:100%');
}
function closeSect6(){
    document.querySelector('#aj4').setAttribute('style', 'height:0px');
}
