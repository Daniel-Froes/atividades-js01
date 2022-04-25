let nave = prompt("Digite o nome da nave")

let velocidade = 0;

let escolha

function menu(){
    let opcao
    while(opcao != "1" && opcao != "2" && opcao != "3" && opcao != "4"){
        opcao = prompt("O que deseja fazer\n 1 - acelerar \n 2 - desacelerar\n 3 - imprimir dados \n 4 - sair")
    }
    return opcao
}

function vel(velo){
    let novaVel = velocidade + 5
    return novaVel
}
function freio(velo){
    let novaVel = velocidade - 5
    if(novaVel < 0){
        novaVel = 0
    }
    return novaVel

}

function print(name, velo){
    alert("Nave: " + name + "\nVelocidade: " + velo + "Km/s")
}

do{
    escolha = menu()
    switch(escolha){
        case "1": 
            velocidade = vel(velocidade)
            break
        case "2":
            freioDaNave = freio(velocidade)
            break
        case "3":
            print(nave, velocidade)
            break
        default:
            alert("Erro")
    }
} while(escolha != "4")