//Dom Structers
let screen=document.querySelector('.screen');
let buttons=document.querySelectorAll('.btn');
let clear=document.querySelector('.btn-clear');
let equal=document.querySelector('.btn-equal');
let remove=document.querySelector('.btn-remove')
//Number and Operator Buttons Configuration
buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value =e.target.dataset.num
            screen.value+=value;
        })
      })
//Equal Button Configuration      
equal.addEventListener('click',function(e){
        if(screen.value === '')
        {
            screen.value = "Please Enter";
        }
        else
        {
            let answer = eval(screen.value);
            screen.value=answer;
        }
    })
//Clear Button Configuration
clear.addEventListener('click',function(e){
        screen.value="";
    })
//Remove Button Configuration
remove.addEventListener('click',function(e){       
            screen.value=screen.value.slice(0,-1)                       
    })

