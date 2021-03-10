"use strict";

let body = document.getElementsByTagName("body");
console.log("🚀 ~ file: script.js ~ line 84 ~ body", body);

function DomElement(){
    this.selector = ".block"; 
    this.height = 0; 
    this.width = 0; 
    this.bg = 0; 
    this.fontSize = 0;
    
    this.makeBlock = function(){
        if(this.selector[0] === "."){
            let newDiv = document.createElement("div");
            body[0].prepend(newDiv);
            newDiv.innerHTML = "Привет!";
            newDiv.classList.add(this.selector.slice(1));
            newDiv.style.width="100px";
            newDiv.style.height="100px";
            newDiv.style.background ="red";
            newDiv.style.fontSize ="10px";

        }else if(this.selector[0] === "#"){
            let newDiv = document.createElement("div");
            body[0].prepend(newDiv);
            newDiv.innerHTML = "Привет!";
            newDiv.id = this.selector.slice(1) ;
            newDiv.style.width="100px";
            newDiv.style.height="100px";
            newDiv.style.background ="blue";
            newDiv.style.fontSize ="10px";
        }
    }

}

let dom = new DomElement();
dom.makeBlock();