function verificar(idade, ensino, faculdade){
    if(idade>=18){
        console.log("A pessoa é maior de idade.")
    }else{
        console.log("A pessoa é menor de idade.")
    }
    if(ensino === true){
        console.log("A pessoa terminou o ensino médio.")
    }else{
        console.log("A pessoa não terminou o ensino médio.")
    }
    if(faculdade === true){
        console.log("A pessoa está cursando faculdade.")
    }else{
        console.log("A pessoa não está cursando faculdade.")
    }
    
}
verificar(18, true, false)
