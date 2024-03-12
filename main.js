const form = document.getElementById('form-funcionalidades');
const nomeContato = document.getElementById('nomeContato');
const ddd = document.getElementById('ddd');
const numeroContato = document.getElementById('numero');
const imgbtnapagar = `<img id="btn-apagar" src="/img/cancelar.png" alt="cancelar"</img>`;
let linhas = '';

const nomes = [];
const numeros = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();



    addLinha();
    atualizaTabela();
    limitarNumerosDDD();
})

function addLinha() {
    const numeroDeContatoTotal = ddd.value + numeroContato.value;


    let linha = `<tr>`;
    linha += `<td>${nomeContato.value}</td>`;
    linha += `<td>${numeroDeContatoTotal}</td>`;
    linha += `<td>${imgbtnapagar}</td>`
    linha += `</td>`;

    linhas += linha;
}

function atualizaTabela()
{
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function cancelar()
{
    nomeContato.value = '';
    numeroContato.value = '';
    ddd.value = '';
}

ddd.addEventListener('keyup', function(e)
{
    const dddValido = limitarNumerosDDD();

    if (dddValido)
    {
        ddd.style.border = `1px solid red`;
    }
    else
    {
        ddd.style.border = '1px solid green';
    }
})

nomeContato.addEventListener('keyup', function(e)
{
    const nomeValido = limitarNome(nomeContato.value);

    if (nomeValido)
    {
        nomeContato.style.border = `1px solid red`;
    }
    else
    {
        nomeContato.style.border = '1px solid green';
    }
})


numeroContato.addEventListener('keyup', function(e)
{
    const numeroValido = limitarNumero();

    if (numeroValido)
    {
        numeroContato.style.border = `1px solid red`;
    }
    else
    {
        numeroContato.style.border = '1px solid green';
    }
})





function limitarNumerosDDD()
{
    return ddd.value.length > 3
}

function limitarNome(nomeCompleto)
{
    const nomeContatoSeparado = nomeCompleto.split(' ')
    return nomeContatoSeparado.length >= 3;
}

function limitarNumero()
{
    return numeroContato.value.length > 9
}


