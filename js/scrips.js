const objs = [
    {
    "nome": "filipe",
    "idade": 30,
    "esta_trabalhando": true,
    "detalhes_profissao": {
        "profissao":"Programador",
        "empresa": "Empresa X"
    },
    "hobbies": ["Programar", "ler", "correr"]   
},
{
        nome: 'Joao',
    idade: 20,
    esta_trabalhando: false,
    detalhes_profissao: {
        profissao: null,
        empresa: null
    },
    hobbies: ["jogar", "ler", "correr"]   
},
]
console.log(objs)
//JSON
//Converter objeto para JSON
const jsonData = JSON.stringify(objs)
console.log(jsonData);
console.log(typeof jsonData);

//converter json para objeto
const objData = JSON.parse(jsonData);
console.log(objData);
console.log(typeof objData);

objData.map((pessoa)=> {
    console.log(pessoa.nome)
});