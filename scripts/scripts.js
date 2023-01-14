window.addEventListener("keydown", (e) => {
    document.getElementById( "result").innerHTML = `The key pressed is <span>${e.key}</span><span>Key Code: ${e.keyCode}</span>`;
  });

  function myfunction(a,b){
    return a*b;
  }
  document.getElementById("arrow").innerHTML=myfunction(3,8);
  
