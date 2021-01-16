var bucketList = [];

var ListItem = document.getElementById("list-container");

function add (){
    let value = document.getElementById("input-field").value;
    bucketList.push(value);
    show();
}

function show(){
    ListItem.innerHTML = "";
    for(let i=0; i<bucketList.length; i++){
    let li = document.createElement("li");
    li.innerHTML = bucketList[i]+`<span><img class="checked" onclick="remove(`+i+`)" src="https://i1.faceprep.in/tick-mark.png"/></span>`;
li.className="list";
ListItem.appendChild(li);
}
}

function remove (i){
    bucketList.splice(i,1);
    show();
}

function reset(){
    bucketList = [];
    show();
}