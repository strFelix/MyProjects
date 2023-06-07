//INFO CONTADORES
let aluno = 0
let aprovado = 0
let reprovado = 0
let aprovadoExame = 0
let reprovadoExame = 0

function calcular(nota1, nota2) {
    if(nota1 === "" || nota2 === ""){

        //CASO NAO PREENCHIDO TROCA A COR E TIRA OS VALUE
        var input = document.getElementById("nota1");
        var input2 = document.getElementById("nota2");
        input.style.borderColor = "#dc4a46";
        input2.style.borderColor = "#dc4a46";
        result = ""
        mencao = ""
        return result;
    }
    else{
        //CASO PREENCHIDO TROCA/VOLTA A COR
        var input = document.getElementById("nota1");
        var input2 = document.getElementById("nota2");
        input.style.borderColor = "#ccc";
        input2.style.borderColor = "#ccc";

        //VERIFICA SE A NOTA É VALIDA
        if(nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10){
            //MEDIA
            result = (parseFloat(nota1) + parseFloat(nota2)) / 2;
            //AUMENTA O NUMERO DE ALUNOS A CADA CLIQUE
            aluno ++;
            
            if(result >= 7){
                mencao = "Aprovado";
                aprovado++;
            }
            //SE FOR EXAME
            else if(result >= 4 && result < 7){
                mencao = "Recuperação";
                var nota3 = prompt("Terceira nota: ")
                result = (result + parseFloat(nota3)) / 2;
                    //VERIFICA APROVAÇÃO NOVAMENTE
                    if(result >= 5){
                        mencao = "Aprovado Exame";
                        aprovadoExame++;
                    }
                    else{
                        mencao = "Reprovado Exame";
                        reprovadoExame++;
                    }
            }
            else{
                mencao = "Reprovado";
                reprovado++;
            }
        }
        //CASO AS NOTAS INVALIDAS
        else{
            result = "Nota invalida";
            mencao = "";
        }
    
        //MOSTRA OS RESULTADOS EM UM PARAGRAFO ESPECIFICO
        var alunos = document.getElementById('aluno');
        alunos.innerHTML = "Alunos: "+ aluno
    
        var aprovados = document.getElementById('aprovado');
        aprovados.innerHTML = "Aprovados: "+ aprovado
    
        var reprovados = document.getElementById('reprovado');
        reprovados.innerHTML = "Reprovados: "+ reprovado
    
        var aprovadosExame = document.getElementById('aprovadoExame');
        aprovadosExame.innerHTML = "Aprovados por exame: "+ aprovadoExame
    
        var reprovadosExame = document.getElementById('reprovadoExame'); 
        reprovadosExame.innerHTML = "Reprovados por exame: "+ reprovadoExame  
        
        return result;
    }
}
    
//AO CLICAR MOSTRA A MENCAO, NAO CONSEGUI FAZER OS DOIS SEPARADOS **AINDA
function verMencao(){
    return mencao;
}


//AO CLICAR LIMPA OS DADOS E ZERA OS CONTADORES
function limpar(){
    aluno = 0
    aprovado = 0
    reprovado = 0
    aprovadoExame = 0
    reprovadoExame = 0

    var alunos = document.getElementById('aluno');
    alunos.innerHTML = "Alunos: "+ aluno

    var aprovados = document.getElementById('aprovado');
    aprovados.innerHTML = "Aprovados: "+ aprovado

    var reprovados = document.getElementById('reprovado');
    reprovados.innerHTML = "Reprovados: "+ reprovado

    var aprovadosExame = document.getElementById('aprovadoExame');
    aprovadosExame.innerHTML = "Aprovados por exame: "+ aprovadoExame

    var reprovadosExame = document.getElementById('reprovadoExame'); 
    reprovadosExame.innerHTML = "Reprovados por exame: "+ reprovadoExame 
}