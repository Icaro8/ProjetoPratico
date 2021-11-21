const $h1 = document.querySelector('.texto');
const form = document.querySelector('.contentform');
const button = document.querySelector('.btnAparecer');
const btnSend = document.getElementById('send');
const pFixed = document.querySelector('.textpopout');
let msgUser = [];
let emailUser = [];
let nomeUSer = [];
const boxOne = document.querySelector('.cardOne');
button.addEventListener('click',aparecerConteudo);
btnSend.addEventListener('click', contentComents)
writeLeter($h1);
writeLeter(pFixed)

function writeLeter(palavra){
    const textArray = palavra.innerHTML.split('');
    palavra.innerHTML ='';
    textArray.forEach((letra, indice) => {
        setTimeout(()=>{
            palavra.innerHTML += letra;
        }, 85 * indice)
    });
    
}

function pegaEvento (event) {
    event.preventDefault();
    const nomePessoa = document.querySelector('#nome').value;
    const emailPessoa = document.querySelector('#email').value;
    const mensagem = document.querySelector('#texto').value;
    emailUser.push(this.emailPessoa);
    msgUser.push(this.mensagem);
    nomeUSer.push(this.nomePessoa);
}

function aparecerConteudo(){
    form.style.display= 'block';
    button.style.display='none'
    console.log('feito');
    
}
function contentComents(){
    emailUser.push(this.emailPessoa);
    msgUser.push(this.mensagem);
    nomeUSer.push(this.nomePessoa);
    console.log(nomeUSer[0])
    //boxOne.innerHTML = `
    //    <h1>${nomeUSer[0]}<h1>
    //    <hr>
    //    <p><strong>${emailUser}</strong></p>
    //    <hr>
    //    <p>${msgUser}</p>
    //`
}
