const divPopout = document.getElementById('popout');



function apagarPopout(element){
    const elementDIV = document.getElementById(element)
    elementDIV.addEventListener('click', (e) =>{
        if(e.target.id == 'popout' || e.target.className == 'btnsair'){
            console.log('acertou');
            elementDIV.classList.remove('mostrar')
        };
        
    });
};
divPopout.addEventListener('click', () => {
     apagarPopout('popout')
}); 