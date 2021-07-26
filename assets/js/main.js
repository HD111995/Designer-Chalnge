function confirm() {
    console.log("hi")
    document.getElementById("cap").innerHTML = "&#10004;<br>YOUR EMAIL HAS BEEN CONFIRMED.<br>THANKS FOR SUBSCRIBING!"
    document.getElementById("cap").style.fontSize = "46px"
    document.getElementById("para").innerHTML = "Now we just need to confirm your email adress.please click the link in the email we sent you.Thanks!"
    document.getElementById("em").style.display = "none"
    document.getElementById("sub").value = "BACK TO DESIGNERCHALNGE.COM"
    document.getElementById("sub").style.width = "30vw"
    document.getElementById("sub").style.height = "3vw"
    document.getElementById("sub").style.marginLeft = "35vw"
    document.getElementById("sub").style.backgroundColor = "#3C30FF"
}