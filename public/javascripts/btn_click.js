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

};