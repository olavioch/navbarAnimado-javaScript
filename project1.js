function fechar(){
    if(document.querySelector('#fechou').classList.contains('abrindo')){
        document.querySelector('#fechou').classList.add('fechando');
        document.querySelector('#fechou').classList.remove('abrindo');
    }else{
        document.querySelector('#fechou').classList.add('abrindo');
        document.querySelector('#fechou').classList.remove('fechando');
    }
    if(document.querySelector('#titulo').classList.contains('aparecendo')){
        document.querySelector('#titulo').classList.add('sumindo');
        document.querySelector('#titulo').classList.remove('aparecendo');
    }else{
        document.querySelector('#titulo').classList.add('aparecendo');
        document.querySelector('#titulo').classList.remove('sumindo');
    }
  }
 