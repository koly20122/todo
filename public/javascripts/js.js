window.onload=function(){
  var todoList=[];//all arr
  
  if(localStorage.getItem("todo")!=undefined){ //ceck and parse JSON 
    todoList=JSON.parse(localStorage.getItem("todo"));
    out();
  }
  document.getElementById("clr").onclick=function(){ //delete localstorage
    localStorage.clear();
    location.reload(true);
  }
  var temp={};
  document.getElementById("add").onclick=function(){ //creat obj and stringify JSON
    var d =document.getElementById("in").value; 
    temp.todo=d;
    temp.check=false;
    var i=todoList.length;
    todoList[i]=temp;
    console.log(todoList);
    out();
    localStorage.setItem("todo",JSON.stringify(todoList));
  }
  function out(){ //print input and checkbox
    var out="";
    for (var i in todoList){
      if (todoList[i].check==true){
        out+="<input type='checkbox' checked>";
      } else{
        out+="<input type='checkbox'>";
        }
      out+=todoList[i].todo+"<br/>"; 
    }
    document.getElementById("out").innerHTML=out;
  }   
}

  
  
