function fechar(){
    if(document.querySelector('#fechou').classList.contains('abrindo')){
        document.querySelector('#fechou').classList.add('fechando');
        document.querySelector('#fechou').classList.remove('abrindo');
    }else{
        document.querySelector('#fechou').classList.add('abrindo');
        document.querySelector('#fechou').classList.remove('fechando');
    }
}