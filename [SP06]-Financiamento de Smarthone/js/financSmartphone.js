function trocarImagem(){
    let celular = document.getElementById("smartphones").value

    if (celular == "iphone12"){
        document.getElementById("fotoSmartphone").src= "/[SP06]-Financiamento de Smarthone/img/iphone12.png"
    }else if(celular == "iphone11"){
            document.getElementById("fotoSmartphone").src= "/[SP06]-Financiamento de Smarthone/img/iphone11.png"
    }
    else if(celular == "iphone10"){
        document.getElementById("fotoSmartphone").src= "/[SP06]-Financiamento de Smarthone/img/iphone10.jpg"
    }
    else if(celular == "iphone8"){
        document.getElementById("fotoSmartphone").src= "/[SP06]-Financiamento de Smarthone/img/iphone8.png"
    }
}

document.getElementById("smartphones").addEventListener("change", trocarImagem)
    
function mostrarParcelas(){
    let celular = document.getElementById("smartphones").value

    if(celular == "iphone12"){
        document.getElementById("parcelas").innerHTML = 
        '<option value="parcela1">1x R$ 6.999,00 à vista</option> <option value="parcela2">2x R$ 3.299,50 sem juros</option><option value="parcela3">3x R$ 2.199,67 sem juros</option><option value="parcela4">4x R$ 1.649,75 sem juros</option><option value="parcela5">5x R$ 1.319,80 sem juros</option>'
    }else if(celular == "iphone11"){
        document.getElementById("parcelas").innerHTML =    
        '<option value="parcela1">1x R$ 4.599,00 à vista</option> <option value="parcela2">2x R$ 2.999,50 sem juros</option><option value="parcela3">3x R$ 1.666,33 sem juros</option><option value="parcela4">4x R$ 1.249,75 sem juros</option><option value="parcela5">5x R$ 999,80 sem juros</option>'
    }else if(celular == "iphone10"){
        document.getElementById("parcelas").innerHTML= 
        '<option value="parcela1">1x R$ 3.999,00 à vista</option> <option value="parcela2">2x R$ 1.799,50 sem juros</option><option value="parcela3">3x R$ 1.199,67 sem juros</option><option value="parcela4">4x R$ 899,75 sem juros</option><option value="parcela5">5x R$ 719,80 sem juros</option>'
    }else if(celular == "iphone8"){
        document.getElementById("parcelas").innerHTML = 
        '<option value="parcela1">1x R$ 3.499,99 à vista</option> <option value="parcela2">2x R$ 1.750,00 sem juros</option><option value="parcela3">3x R$ 1.166,66 sem juros</option><option value="parcela4">4x R$ 875,00 sem juros</option><option value="parcela5">5x R$ 700,00 sem juros</option>' 
    }
}

document.getElementById("smartphones").addEventListener("change", mostrarParcelas)

