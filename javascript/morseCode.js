'use strict';

const alphabet = {a: '• ▬', b: '▬ • • •', c: '▬ • ▬ •',
        d: '▬ • •', e: '•', f: '• • ▬ •', g: '▬ ▬ •',
        h: '• • • •', i: '• •', j: '• ▬ ▬ ▬', k: '▬ • ▬',
        l: '• ▬ • •', m: '▬ ▬', n: '▬ •', o: '▬ ▬ ▬',
        p: '• ▬ ▬ •', q: '▬ ▬ • ▬', r: '• ▬ •', s: '• • •',
        t: '▬', u: '• • ▬', v: '• • • ▬', w: '• ▬ ▬',
        x: '▬ • • ▬', y: '▬ • ▬ ▬', z: '▬ ▬ • •',
        1: '• ▬ ▬ ▬ ▬', 2: '• • ▬ ▬ ▬', 3: '• • • ▬ ▬',
        4: '• • • • ▬', 5: '• • • • •', 6: '▬ • • • •',
        7: '▬ ▬ • • •', 8: '▬ ▬ ▬ • •', 9: '▬ ▬ ▬ ▬ •',
        0: '▬ ▬ ▬ ▬ ▬',
        ',': '▬ ▬ • • ▬ ▬', '.': '• ▬ • ▬ • ▬', '!': '▬ • ▬ • ▬ ▬',
        '?': '• • ▬ ▬ • •',
        /// German letters
        ä: '• ▬ • ▬', ü: '• • ▬ ▬', ö: '▬ ▬ ▬ •', ß: '• • • ▬ ▬ • •'
        }
      
 function convertToMorse(text) {
    let text_converted = '';
    let lastLetter = text.slice(-1)
    let newText = text.slice(0, -1)
    for (var letter of newText.toLowerCase()) {
        if (letter === ' ') {
            // wide space => 7 spaces
            text_converted += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
        } else if (letter in alphabet === false){
            text_converted += 'not Morse Code letter&nbsp;'
        } else {
            text_converted += alphabet[letter] + '&nbsp;&nbsp;&nbsp;'
        } 
        };
    text_converted += alphabet[lastLetter]
    return text_converted
    };

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
        };
    postTask ();                        
    });

function postTask (){
    document.querySelector('form').onsubmit = () => {
        const inputValue = document.querySelector('#inputText').value;
        const convrValue = convertToMorse(inputValue)
        const post = document.createElement('p');
        post.className = `convTxt`;
        post.innerHTML = inputValue + ' => ' + '( ' + convrValue + ' )' + DEL;   
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