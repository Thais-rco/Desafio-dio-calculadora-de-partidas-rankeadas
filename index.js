let name = "Thais"
let victoryBalance = 18
let defeatBalance = 7
let result = victoryBalance - defeatBalance

calculateMatches(name, victoryBalance, defeatBalance, result)

function calculateMatches(name, victoryBalance, defeatBalance, result){
	if (result <= 10) {
    	console.log("O Herói " + name + " tem de saldo de vitórias " + victoryBalance + " está no nível Ferro "  )
}
	else if (result > 10 && result <= 20 ) {
    	console.log("O Herói " + name + " tem de saldo de vitórias " + victoryBalance + " está no nível Bronze  " )
       
}
	else if(result >20 && result <= 50 ) {
    	console.log("O Herói " + name+ " tem de saldo de vitórias " + victoryBalance + " está no nível Prata"  )
}

	else if(result >50 && result <= 80 ) {
    	console.log("O Herói " + name + " tem de saldo de vitórias " + victoryBalance + "está no nível Ouro"  )
}
	else if(result >80 && result <= 90 ) {
    	console.log("O Herói " + name + " tem de saldo de vitórias " + victoryBalance + " está no nível Diamante"  )
}
    else if(result >90 && result <= 100 ) {
    	console.log("O Herói " + name + " tem de saldo de vitórias " + victoryBalance + " está no nível Lendario"  )
       
}
	else 
    {console.log("O Herói " + name + " tem de saldo de vitórias " + victoryBalance + "está no nível Imortal"  )
    }
}