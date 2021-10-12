const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');


const messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', function(){
    // console.log("Everything is OK! ");
    const content = messageIn.value;

    if (content === ""){
        alert("Please! Type Your Message");
    }else{
        messageOut.innerHTML = content;
        messageIn.value = "";
    }
        
});

        
