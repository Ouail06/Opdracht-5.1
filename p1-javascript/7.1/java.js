function geld  (){
    
    let product = 60;
    let budget = 100;

    if ( budget>product) {
      document.getElementById("h1").innerHTML = "niet genoeg"
      document.getElementById("h1") .style.color = "red";
    }
      else {
        document.getElementById("h1").innerHTML =  "genoeg"
        document.getElementById("h1") .style.color = "green";
      }
    }

