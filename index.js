let mainDiv=document.querySelector('#buttons')
let display=document.querySelector('#display')

mainDiv.addEventListener('click',(a) => {
    let sumbol=a.target.innerText
 
   if(sumbol =='C'){
       display.innerHTML=" ";
   }else if(sumbol =='Esc'){
       let numbers =display.innerText;
       let numArr =numbers.split("")
       let deletArr =numArr.pop()
       let result =numArr.join('')
    display.innerHTML=`<h1>${result}</h1>`
   }else if(sumbol== "=" ){
       let natija =eval(display.innerText);
       display.innerHTML=`<h1>${natija}</h1>`
   }else if(sumbol.length >3 || display.innerText.length >17){

   }
   else{
       display.innerHTML+=`<h1>${sumbol}</h1>`
   }

})