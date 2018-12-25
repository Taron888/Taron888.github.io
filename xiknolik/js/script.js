function choisex() {
    document.getElementById('tapo').style.display='none';
    function foo(elment) {
        elment.style.backgroundImage="url('images/x.png')";
        document.getElementById('tapo').style.display='inline-block';
        document.getElementById('tapx').style.display='none';
        
    }
    let element = document.getElementById('tapx').value;
    document.getElementById('block1').onclick=function () { foo(this) };
    document.getElementById('block2').onclick=function () { foo(this) };
    document.getElementById('block3').onclick=function () { foo(this) };
    document.getElementById('block4').onclick=function () { foo(this) };
    document.getElementById('block5').onclick=function () { foo(this) };
    document.getElementById('block6').onclick=function () { foo(this) };
    document.getElementById('block7').onclick=function () { foo(this) };
    document.getElementById('block8').onclick=function () { foo(this) };
    document.getElementById('block9').onclick=function () { foo(this) };
   
}

function choiseo() {
    document.getElementById('tapx').style.display='none';
    function boo(elment) {
        elment.style.backgroundImage="url('images/o.png')";
        document.getElementById('tapx').style.display='inline-block';
        document.getElementById('tapo').style.display='none';
    }
    let element = document.getElementById('tapo').value;
    document.getElementById('block1').onclick=function () { boo(this) };
    document.getElementById('block2').onclick=function () { boo(this) };
    document.getElementById('block3').onclick=function () { boo(this) };
    document.getElementById('block4').onclick=function () { boo(this) };
    document.getElementById('block5').onclick=function () { boo(this) };
    document.getElementById('block6').onclick=function () { boo(this) };
    document.getElementById('block7').onclick=function () { boo(this) };
    document.getElementById('block8').onclick=function () { boo(this) };
    document.getElementById('block9').onclick=function () { boo(this) };
    
}