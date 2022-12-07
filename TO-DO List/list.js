document.getElementById('btn').addEventListener('click',function()
{
    let input = document.getElementById('input').value;

    //creating the todo list elements
    let elem = document.createElement('li');
    let btn1 = document.createElement('button');
    let btn2 = document.createElement('button');
    btn1.innerHTML = "Done";
    btn2.innerHTML = "Delete";
    elem.innerText = input;

    if(input == "")
    {
        alert("Please Enter your List!");
        return;
    }

    let ul = document.querySelector('ul');

             //Appending the created elements to html
             ul.appendChild(elem);
             elem.appendChild(btn1);
             elem.appendChild(btn2);

             //Adding styles to list
             //btn1
             btn1.style.border = "none";
             btn1.style.marginLeft = "5%";
             btn1.style.borderRadius = "6px";
             btn1.style.backgroundColor = "#b4b3d8";
             btn1.style.padding="6px";
             
           
              //btn1
              btn2.style.border = "none";
              btn2.style.marginLeft = "3%";
              btn2.style.borderRadius = "6px";
              btn2.style.backgroundColor = "#b4b3d8";
              btn2.style.padding="6px";

 
             //elem
             elem.style.paddingBottom = "5px";
             elem.style.paddingTop = "15px";
             elem.style.paddingRight = "15px";
             elem.style.fontSize = "30px";
             elem.style.color= "violet";

             //Adding functionality to created buttons
    btn1.addEventListener('click',function(){
        elem.style.textDecoration = "line-through";
    });
    

    btn2.addEventListener('click',function(){
        elem.remove();
    });

document.getElementById('input').value = "";

})