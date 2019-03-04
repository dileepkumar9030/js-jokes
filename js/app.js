
const mainBtn=document.getElementById('mainBtn');
const result = document.getElementById('result');
const imgContainer = document.getElementById('img');

mainBtn.addEventListener('click', function(){
    /*const ajax = new XMLHttpRequest();
    const url = 'https://api.chucknorris.io/jokes/random';
    ajax.open('GET', url, true);

    ajax.onload = function(){
        if(this.status===200){
            const data = JSON.parse(this.responseText);
            //console.log(data);
            const {icon_url:img, value:joke}=data;
            //console.log(img, joke);
            result.textContent=joke;
            imgContainer.src=img;
        }
    }

    ajax.onerror= function(){
        console.log('There is an error');
    }
    ajax.send(); */

    const ajax = new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        const url='https://api.chucknorris.io/jokes/random';
        xhr.open('GET', url, true);
        xhr.onload=()=>{
            if(xhr.status===200){
                resolve(xhr.responseText);
            }else{

                reject(xhr.statusText);
            }
        };

        xhr.onerror=()=>{
            reject(Error(`There is an error`));
        }

        xhr.send();
    });

    ajax.then((response)=>{
        const data = JSON.parse(response);
        const {icon_url:img, value:joke} = data;
        result.textContent=joke;
        imgContainer.src=img;
    }).catch(error=>console.log(error));
})
