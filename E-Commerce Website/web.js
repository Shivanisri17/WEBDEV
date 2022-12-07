//Subscribe 

document.getElementById("btype").addEventListener('click', function()
{
let progress = document.getElementById("mtype").value;

if(progress == "")
{
  alert("Please Enter Your E-Mail ID...");
  
}
else if(!progress.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
{
alert("Invalid E-Mail ID...");
}

else
{
  alert("Thank you!! Visiting our page Keep Supporting and Our Future Updates will Sent on your E-mail ID!!");
 
}
document.getElementById('mtype').value = "";

});


