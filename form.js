console.log()

function onClick(){
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;

    console.log('onClick', {firstName}, {lastName})
}