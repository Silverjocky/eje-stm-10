//Calculadora
function sumaNumeros(){
    //Declaracion let y const 
    const n1=parseFloat(document.getElementById('ent1').value);
    const n2=parseFloat(document.getElementById('ent2').value);
    //Proceso
    const res = n1 + n2;
    //Salida
    document.getElementById('resultado').innerHTML= 'Resultado: '+res;
    //alert('Resultado suma: ' + res);
}
function restaNumeros(){
    const n1=parseFloat(document.getElementById('ent1').value);
    const n2=parseFloat(document.getElementById('ent2').value);
    const res = n1 - n2;
    document.getElementById('resultado').innerHTML= 'Resultado: '+res;
    //alert('Resultado:' + res);
}
function multiNumeros(){
    const n1=parseFloat(document.getElementById('ent1').value);
    const n2=parseFloat(document.getElementById('ent2').value);
    const res = n1 * n2;
    document.getElementById('resultado').innerHTML= 'Resultado: '+res;
    //alert('Resultado:' + res);
}
function divNumeros(){
    const n1=parseFloat(document.getElementById('ent1').value);
    const n2=parseFloat(document.getElementById('ent2').value);
    const res = n1 / n2;
    document.getElementById('resultado').innerHTML= 'Resultado: '+res;
    //alert('Resultado:' + res);
}