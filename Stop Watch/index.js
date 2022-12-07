let timer,hour,minute,second,my_int; //varaibles declare
let getsec=0,getmin=0,gethour=0;

function stopwatch()
{
this.start=function()               //object create
{
    hour=document.getElementById('hour');        //DOM Reference
 minute=document.getElementById('minute');
    second=document.getElementById('second');

    if(getsec>=0)                   // If Condition
    {
        getsec++;
        second.innerHTML=getsec;
    }
if(getsec<10)
{
    second.innerHTML="0" + getsec ;
}                                  
if(getsec>=60)
{
    getsec=0;
    getmin++;
   minute.innerHTML=getmin;
}
if(getmin<10)
{
minute.innerHTML="0" + getmin + "." ;
}
if(getmin>=10)
{
minute.innerHTML = getmin + ".";
}
if(getmin>=60)
{
    getmin=0;
    gethour++;
    hour.innerHTML=gethour;
}
if(gethour<10)
{
    hour.innerHTML = "0" + gethour + ".";
}
if(gethour>=10)
{
    hour.innerHTML =  gethour + ".";
}

my_int=setTimeout(my_ob.start,1000);
    
}                              //start end

this.stop = function(){
    clearTimeout(my_int);
}                             //stop end

this.reset = function()
{
if(getsec>=0)
{
getsec= 0;
getmin=0;
gethour=0;
second.innerHTML = "0" + getsec ;
minute.innerHTML = "0" + getmin + ".";
hour.innerHTML = "0" + gethour + ".";
clearTimeout(my_int);
}
}                               //reset end

}                                 //stopwatch end                                
  let my_ob=new stopwatch();

//stopwatch()