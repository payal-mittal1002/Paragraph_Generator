const btn=document.getElementsByClassName("btn");
const input=document.getElementById("num");
const container=document.querySelector(".container");

let noOfWords=0;
function getnum(){
    noOfWords=Number(input.value);
    generate(noOfWords);    
}
function text(n){
    let txt="";
    const v="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    for(let i=0;i<n;i++){
        
           
            
                let random=((Math.random()*25).toFixed());
                
            txt+=(v[(((Math.random())*25).toFixed())].toLowerCase());
             
        }
    return txt;
}


function generate(noOfWords){
    const para=document.createElement("p");
    let txt="";
     for(let i=0;i<noOfWords;i++){
        let random=((Math.random()*5).toFixed());
       
        txt += text(random);
        txt+=" ";
     }
   
    para.innerHTML=txt;
    para.setAttribute("class","para");
    
    container.append(para);   
}


