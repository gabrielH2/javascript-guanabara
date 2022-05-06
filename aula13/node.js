    let data = new Date()
    let ano= data.getFullYear()
    let fano = document.getElementById('textano')
    let res = document.querySelector('div#res')

function verificar(){
    
if(fano.value.length ==0 || fano.value > ano){
        window.alert('[erro] verifique os dados e tente novamente')
    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        if (fsex[0].checked){
            genero = 'homem'
        }else if(fsex[1].checked){
            genero = 'mulher'
        }
        res.innerHTML = `detectamos ${genero} com ${idade} anos.`


    }

}
