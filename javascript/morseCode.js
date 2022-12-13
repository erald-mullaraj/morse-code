const DEL = '<button class="delete">Delete</button>'

document.addEventListener('DOMContentLoaded', function() {
    //by defaultm submit button is disabled
    document.querySelector('#submit').disabled = true;
    document.querySelector('#inputText').onkeyup = () => {
        if (document.querySelector('#inputText').value.length > 0) {
            document.querySelector('#submit').disabled = false;
        } else {
            document.querySelector('#submit').disabled = true;
        }
    }
    postTask ();                        
    });

function postTask (){
    document.querySelector('form').onsubmit = () => {
        const inputValue = document.querySelector('#inputText').value;
        const post = document.createElement('p');
        post.className = `convTxt`;
        post.innerHTML = inputValue + DEL;     
        document.querySelector('#posts').append(post);                       
        document.querySelector('#inputText').value = '';
        document.querySelector('#submit').disabled = true;                       
        // stop form from submitting
        return false
    }   
}

document.addEventListener('click', event => {
    const element = event.target;                        
         if (element.className === 'delete') {
            element.parentElement.style.animationPlayState = 'running';
            element.parentElement.addEventListener('animationend', () =>  {
                element.parentElement.remove();
            });
        }             
    }) 