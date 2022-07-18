let dia = "Quarta-feira";
let rotina = `*Acordar às 08:55h \n*Ligar PC \n*Escovar os dentes \n*Trabalhar \n*Almoçar 12h \n*Finalizar às 18h\n`;


switch (dia) {
    case "Terça-feira":
    case "Quinta-feira":
    case "Sexta-feira":
        console.log(rotina);
        break;
    case "Quarta-feira":
        console.log(rotina + "*inglês 👨‍🎓");
        break;
    case "Segunda-feira":
        console.log(rotina + "*escolinha");
        break;
    case "Sábado":
    case "Domingo":
        console.log("Descansar!");
        break;
    default:
        console.log("Dia inválido.");
        

}
