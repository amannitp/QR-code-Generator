let api_url='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='

    const userInput=document.querySelector('input')
    const QRCodeBtn=document.querySelector('button')
    const imageSource=document.querySelector('img')
    const imgBox=document.querySelector('#imgBox')

    QRCodeBtn.addEventListener('click',getQRCode)

    function getQRCode(e){
        if(userInput.value!==''){
            generateQRCode(api_url);
        }
        else if (userInput.value===''){
            userInput.classList.add('error')
            setTimeout(() => {
                userInput.classList.remove('error')
            }, 1000);
        }
    }

     function generateQRCode(url){
        
        imageSource.src=url+userInput.value;
        imgBox.classList.add("show-img")
        userInput.value=''

    }