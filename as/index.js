document.getElementById("login").onclick=function(){
    const username=document.getElementById("username").value;
    if(username.includes("@")!==true)
    {
        window.alert("Not a valid username");
        
    }
    if(username.includes("@")===true)
    {
        const password=document.getElementById("password").value;
        const details=username + "-" + password;
        console.log(details);
    }
}
