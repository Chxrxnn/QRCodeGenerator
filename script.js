document.addEventListener("DOMContentLoaded",function(){
    const btn=document.getElementById("btn");
    const input = document.getElementById("input");
    const qrImage = document.getElementById("qrImage");
    const qrBox = document.getElementById("qrBox");

    btn.addEventListener("click",function(){
        if(input.value.length>0){
            qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input.value;
        input.value="";
        qrBox.classList.add("show");

        }
            else{
                input.classList.add("error");
                input.style.outline="1px solid red";
                setTimeout(()=>{
                    input.classList.remove("error");
                    input.style.outline="none";
                },1000);

               
            }
            });

});