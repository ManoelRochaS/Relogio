
/*Declaração das Variáveis necessárias*/
const buttonDigital = document.getElementById("buttonDigital");
const buttonAnalogic = document.getElementById("buttonAnalogic");
const boxDigital = document.getElementById("boxDigital");
const boxAnalogic = document.getElementById("boxAnalogic");
const displayText = document.getElementById("displayText");
const Time = document.getElementsByClassName("Time");
let controlDigital = true;
let controlAnalogic = true;

/*Configuração dos Estilos e Css da Aplicação*/
buttonDigital.addEventListener("click", ()=>{
    boxDigital.style.display = (controlDigital) ? "flex" : "none";
    controlDigital = (controlDigital) ? false : true; 
})

buttonAnalogic.addEventListener("click", ()=>{
    boxAnalogic.style.display = (controlAnalogic) ? "flex" : "none";
    controlAnalogic = (controlAnalogic) ? false : true; 
})

/*Configuração e Construção dos Displays (Digital e Analógico)*/
setInterval(()=>{
    const CurrentDate = new Date();
    //Configuração Display Digital
    displayText.innerHTML = toString(edtTime(CurrentDate.getHours()), edtTime(CurrentDate.getMinutes()), edtTime(CurrentDate.getSeconds()));
    //Configuração Display Analógico
    innerAnalog(CurrentDate.getHours(), CurrentDate.getMinutes(), CurrentDate.getSeconds(), 0);
},1000);

/* --- Funções Auxiliares - Display Digital */
function toString(Hour, Minute, Second){
    return (Hour < 12) ? `${Hour} : ${Minute} : ${Second} AM` : `${Hour} : ${Minute} : ${Second} PM`;
}
function edtTime(Time){
    return (Time < 10) ? `0${Time}` : Time;
}

/* --- Funções Auxiliares - Display Analógico*/
function innerAnalog(Hour, Minute, Second, control){
    for(var i = 0; i < 3; i++){
        if(i==0){control = (30 * Hour + Minute / 2)};
        if(i==1){control = (6 * Minute)};
        if(i==2){control = (6 * Second)};
        Time[i].style.transform = `rotate(${control}deg)`;
    }
}
