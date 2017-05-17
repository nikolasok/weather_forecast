window.onload = function(){
    function sendcity() {
        var attr=document.getElementById('textbox').value;
        console.log(attr);
        if(attr.length!=0) {
            console.log(attr);
            window.location.pathname = "/daily/"+attr;
        }
    }

document.getElementById('like').onclick=function(){

    sendcity();
 };

    document.querySelector('input').addEventListener('keydown', function(e) {
        if (e.keyCode === 13) {
            // можете делать все что угодно со значением текстового поля
            sendcity();
            console.log(this.value);
        }
    });

};