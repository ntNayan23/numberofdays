function numberofdays(){
    var birthyear = prompt("enter your birth year .... :)");
    var ageIndays = (2022-birthyear)*365;
    console.log(ageIndays);
    var h1 = document.createElement('h1');
    h1.setAttribute('id','numberofdays');
    var textAnswer = document.createTextNode("Your Are "+ ageIndays + " Days Old...:)");
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

}
function reset(){
    document.getElementById('flex-box-result').remove();
    document.getElementsByClassName('flex-box-container-1').remove
}
