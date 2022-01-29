let botao1 = document.getElementById('botao-gerar-tabuada');
botao1.addEventListener('click', gerarTabuada);

function gerarTabuada() {

    let tabela = document.getElementById('tabuada');
    let numero = document.getElementById('entrada-numero');

    if (numero.value.lenght == 0) {
        alert('Digite um número para começar');
    } else {

        let num = Number(numero.value);

        for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
            let item = document.createElement('option');
            item.text = `${num} x ${multiplicador} = ${num * multiplicador}`;
            item.value = `tabela${multiplicador}`;
            tabela.appendChild(item);
        }

    }
}