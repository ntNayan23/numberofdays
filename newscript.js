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
   
}

function img_generator(){
    var name = prompt("enter your name .... :)");
    if(name== 'nikita'|| name == 'Nikita'||name== 'NIKITA'){
        var image = document.createElement('img');
        var div = document.getElementById('img_generator');
        image.src='Word Art.png';
        div.appendChild(image);
    }
}