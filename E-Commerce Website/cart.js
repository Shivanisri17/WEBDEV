//Apply

document.getElementById("apply").addEventListener('click',function()
{
  let applyc = document.getElementById('applymsg').value;

  

  if(applyc == "")
  {
    
    alert("Please Enter your Coupon Code...");

  }
 
  else if(applyc === "RICSH1714")
  {
 
 alert("Coupon Code is Applied on your Cart!!");
  
 }

 else
 {
    alert("Invalid Coupon Code..");
 }

  
  document.getElementById('applymsg').value = "";
})


//proceed 

function btn()
{
let amntp1 = document.getElementById('amnt1');
let amntp2  = document.getElementById('amnt2');

if(amntp1.value ==="" || amntp2.value ==="")

{
  alert('Please Enter Your Amount!!');
}
else if(isNaN(amntp1.value) || isNaN(amntp2.value))
{
  alert("Invalid Number!!"); 
}
else 
{
  alert('Thank You !! Shopping With Us , Your Payment method is Loading......');
}

document.getElementById('amnt1').value = "";
document.getElementById('amnt2').value = "";

}

