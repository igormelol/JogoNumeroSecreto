// let numeroSecreto = parseInt(Math.random() * 11)
// let tentativas = 1
// let chute

// while (chute != numeroSecreto) {
//     let chute = prompt('Escolha um número entre 1 e 10')
//     if (chute == numeroSecreto) {
//         break
//     } else {
//         if (chute > numeroSecreto) {
//             alert('O número secreto é menor')
//         } else {
//             alert('O número secreto é maior')
//         }
//     }
//     tentativas++
// }

// let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' 
// alert(`O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} ${palavraTentativa}`)


alert('É um prazer te receber no jogo do adivinhe o número! (IgorML)');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto = while nã acertar o número secreto
while ( chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 0 e ${numeroMaximo}`);

    // se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
       break;
    } else {
        if (chute > numeroSecreto) {
            alert(`🥹O numero secreto é MENOR⬇️ que ${chute}...`)
        } else {
            alert(`😿O numero secreto é MAIOR⬆️ que ${chute}...`)
        }
        //tentativas = tentativas + 1
        tentativas++
    }
}


let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' 
alert(`O número secreto era ${numeroSecreto}🏆 e você acertou com apenas ${tentativas} ${palavraTentativa}✨`);


