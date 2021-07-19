function financiamentoCarros(){
    let opcao = document.getElementById('opcao').value;
    switch (opcao){
        case 'credito':
            document.getElementById('botao').href = "../[SP07] - Credito Pessoal/index.html"
        break;

        case 'veiculos':
            document.getElementById('botao').href = "../[SP05] Financiamento de Carros/Financiamento de carros.html";
        break;

        case 'imovel':
            document.getElementById('botao').href = "../[SP05] Financiamento de Carros/Financiamento de carros.html";
        break;

        case 'celular':
            document.getElementById('botao').href = "../[SP05] Financiamento de Carros/Financiamento de carros.html";
        break;
    }    
}
document.getElementById('opcao').addEventListener("change", financiamentoCarros);
