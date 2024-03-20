let personnane :string = ``;

personnane = prompt(`what is your name?`)|| ``;

if(personnane !== null && personnane !==``){
    alert(`Hello ${personnane}, world you like to learn some python today?`)
}
else{
    alert(`you have to fill your name !`)
}