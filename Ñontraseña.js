var password = "KOCK"

function passcheck(){
    if(document.getElementById('pass').value != password){
    alert('Lafufu');
    return false;}

    if(document.getElementById('pass').value == password){
    alert('Labubu');
    return true;}
}