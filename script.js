function calcularIdade() {
    let dataAtual = new Date ()
    let data = dataAtual.getFullYear ()
    let anoNascimento = document.getElementById ("anoNascimento").value
    let suaIdade = document.getElementById ("suaIdade")
    
    if (anoNascimento.length == 0 || anoNascimento > data || anoNascimento < 1900) {
        alert("[ERRO] VERIFIQUE OS DADOS E TENTE NOVAMENTE")
        window.location.reload ()
    }  else {
    
    let sexo = document.getElementsByName ("radsex")
    anoNascimento = Number(anoNascimento)
    let idade = (data - anoNascimento)
    let genero = ""
    let estagioVida = ""

    if (sexo[0].checked) {
        genero = "masculino"
    } else if (sexo[1].checked) {
        genero = "feminino"
    }
    
    if (idade <= 10 && genero == "masculino" ) {   
        alteraImg.src = "image/foto-bebe-m.png"
        estagioVida = "criança"
    } else if (idade <= 10 && genero == "feminino") {
    alteraImg.src = "image/foto-bebe-f.png"
    estagioVida = "criança"
    } else if (idade >=10 && idade <21 && genero == "masculino") {
        alteraImg.src = "image/foto-jovem-m.png"
        estagioVida = "jovem"
    }  else if (idade >=10 && idade <21 && genero == "feminino") {
        alteraImg.src = "image/foto-jovem-f.png"
        estagioVida = "jovem"
    } else if (idade >= 21 && idade <65 && genero == "masculino") {
        alteraImg.src = "image/foto-adulto-m.png"
        estagioVida = "adulto"
    } else if (idade >= 21 && idade <65 &&  genero == "feminino") {
        alteraImg.src = "image/foto-adulto-f.png"
        estagioVida = "adulto"
    } else if (idade >= 65 && genero == "masculino") {
        alteraImg.src = "image/foto-idoso-m.png"
        estagioVida = "idoso"
    } else if (idade >= 65 && genero == "feminino") {
        alteraImg.src = "image/foto-idoso-f.png"
        estagioVida = "idoso"
    }

    suaIdade.innerHTML = `<strong> Você tem ${idade} anos e é ${estagioVida} </strong> `
    suaIdade.style.font = "14pt normal Arial"
    suaIdade.style.textTransform = "uppercase"
    suaIdade.style.textAlign = "center"
}

    

}

