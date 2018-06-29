console.log("newsletter.js is started");

document.getElementById("submit").addEventListener("click", sendJson);

function createJson() {
    console.log("in methode");
    let firstname= document.getElementById("firstname").value;
    let lasttname= document.getElementById("lastname").value;
    let birthdate= document.getElementById("birthdate").value;
    let email= document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let favoriteColor = document.getElementById("favoritecolor").value;
    let checkboxAGB = document.getElementById("Privacy_&_Policy").value;

    let entryJson = {
        "firstnam" : firstname,
        "lastname" : lasttname,
        "birthdate" : birthdate,
        "emai" : email,
        "address" : address,
        "favoritecolor" : favoriteColor,
        "cheboxJsonAGB" : checkboxAGB
    }

    return entryJson;

}

function sendJson() {
    let data = createJson();

    fetch("/api/newsletter/",
        {
            method: "POST",
            body: data
        })
        .then(function(res){ console.log(res.toString()) })
        .then(function(data){ alert( JSON.stringify( data ) ) })

}