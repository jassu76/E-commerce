

const bar = document.getElementById('bar');
const nav = document.getElementById('navli');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
 if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}



document.querySelector("#from").addEventListener("submit", validation);
function validation(e) {
    let name = document.querySelector("#email").value;
    console.log(name);
    let pass = document.getElementById('pass').value;  
    console.log(pass);
    e.preventDefault();
   try {
         if(!name) throw 'please fill email '
         if(!pass) throw 'please fill password'
        
   } catch (error) {
     if(!name) {
        document.getElementById('se').innerHTML = error
     }
     else if(!pass){
        document.getElementById('sp').innerHTML = error
       
     }
     e.preventDefault();
   }

}


// <---------------pagination------------------->


const pagination = document.getElementById('pagination');
let allpage = 15;


function elem(allpage, page){
    let li='';
    let beforepage = page -1;
    let afterpage = page +1;
    let liActive;

    if(page>1){
        li +=`<li class="numbe" onclick="elem(allpage, ${page-1})"><i class="fa fa-arrow-left"  aria-hidden="true"></i></li>`
    }
    for(let i=beforepage;i<=afterpage;i++){

     if(i>allpage){
        continue;
     }
     if(i==0){
        i=i+1;
     }

        if(page==i){
          liActive='active'
        }else{
            liActive='';
        }
        li+=`<li class="numbe ${liActive}">${i}</li>`
    }
    if(page<allpage){
        li += `<li class="numbe" onclick="elem(allpage, ${page+1})"><i class="fa fa-arrow-right" aria-hidden="true"></i></li>`
    }
       pagination.innerHTML= li;

}
elem(allpage,2);


// <-----------------------img----------------------->
  




// <------------login------------------->


    


function openpopup(params) 
{
    let popup= document.getElementById("demo");
    popup.classList.add("open-popup");  
         
}

function closedpopup(){
    let popup= document.getElementById("demo");
    popup.classList.remove("open-popup");
}




