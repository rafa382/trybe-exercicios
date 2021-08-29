//Armazena informações, com length mostra quantos itens o array possui

let tasksList = ['Tomar café','Reunião','Brincar com o cachorro'];
console.log(tasksList.length);

// Acessar posições no array

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);

let searchForLastTask = tasksList[tasksList.length -1];
console.log(searchForLastTask);

//Adiciona mais uma tarefa

tasksList.push('Fazer exercícios da Trybe');
console.log(tasksList);