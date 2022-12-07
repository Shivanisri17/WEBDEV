function message()
{
    let Name =  document.getElementById('fname');
    let email =  document.getElementById('femail');
    let sub =  document.getElementById('fsub');
    let msg =  document.getElementById('fmsg');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');
    const dangermail = document.getElementById('alert');

    if(Name.value === "" || email.value === "" || sub.value === "" || msg.value === "")
{
    danger.style.display = 'block';

}
else if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))

{
  dangermail.style.display = 'block';
}

else
{
    setTimeout(()=>{
        Name.value = '';
        email.value = '';
        sub.value = '';
        msg.value = '';
 },2000);

    success.style.display = 'block';
}

setTimeout(()=>{
    danger.style.display = 'none';
    success.style.display = 'none';
    dangermail.style.display = 'none';
}, 4000);

}
  

