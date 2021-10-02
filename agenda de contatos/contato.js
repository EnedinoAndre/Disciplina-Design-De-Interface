var contatos = [];

window.onload = () =>{

    //SÓ MOSTRAR SE O LOCAL STORAGE ESTIVER COM DADOS 
    if(localStorage.getItem('value') != null){
        listar()
    }
    //pegar elemento formulário e chamar um evento. esse evento terá dois parâmetros(botão,e a função que irá realizar).
    document.getElementById("formCadastro").addEventListener("submit",adicionar);

    document.getElementById("formCadastro").addEventListener("submit",listar);
   
}
// ---------------------- FUNÇÕES ------------------------------
function adicionar(){
    var contatos = [];

    contatos = JSON.parse(localStorage.getItem('value'));
    
    var contato = {
        nome: document.getElementById("txtName").value,
        telefone: document.getElementById("txtPhone").value,
        rua: document.getElementById("txtRoad").value,
        cep: document.getElementById("txtZipCode").value,
        numero: document.getElementById("txtNumber").value,
        cidadeEstado: document.getElementById("txtCityState").value,
        type: document.getElementById("work").checked ? 'W' : 'F'
    }
        
    contatos.push(contato);
    
    localStorage.setItem('value',JSON.stringify(contatos));
    
    //document.getElementById("formCadastro").reset();
    window.alert("Contato Cadastrado");
}
//------------------------ LISTAR -----------------------------
function listar(){
    contatos = JSON.parse(localStorage.getItem('value'));

    var tbody = document.getElementById("contatosCadastrados");

    tbody.innerHTML = '';

    for(i = 0; i < contatos.length ; i++){
        nome = contatos[i].nome;
        telefone = contatos[i].telefone;
        rua = contatos[i].rua;
        cep = contatos[i].cep;
        numero = contatos[i].numero;
        cidadeEstado = contatos[i].cidadeEstado;
        type = contatos[i].type == 'W' ? "Work" : "Family";

        tbody.innerHTML += '<tr class="'+type+'" id="rowContact '+i+' ">'+
        '<td>'+nome+'</td>'+
        '<td>'+telefone+'</td>'+
        '<td>'+rua+'</td>'+
        '<td>'+cep+'</td>'+
        '<td>'+numero+'</td>'+
        '<td>'+cidadeEstado+'</td>'+
        '<td>'+type+'</td>'+
        '<td><button onclick="excluir(\''+nome+'\')">Excluir</button></td>'+
        '<td><button id="editar" onclick="editar(\''+nome+'\')">Editar</button></td>'+
        '</tr>'
    }
}

function excluir(nome){

    for(i=0;i<contatos.length;i++){
        if(contatos[i].nome === nome){
            var index = contatos.indexOf(contatos[i]);
            contatos.splice(index,1);
            localStorage.setItem('value',JSON.stringify(contatos));
            listar();
            alert("Contato excluido");
        }
        
    }
}

function editar(nome){

    for(i=0;i<contatos.length;i++){
        if(contatos[i].nome === nome){
            var index = contatos.indexOf(contatos[i]);
            contatos[i].nome = document.getElementById("txtName").value;
            contatos[i].telefone = document.getElementById("txtPhone").value;
            contatos[i].rua = document.getElementById("txtRoad").value;
            contatos[i].cep = document.getElementById("txtZipCode").value;
            contatos[i].numero = document.getElementById("txtNumber").value;
            contatos[i].cidadeEstado = document.getElementById("txtCityState").value;
            contatos[i].type = document.getElementById("work").checked ? 'W' : 'F';

            localStorage.setItem('value',JSON.stringify(contatos));

            document.getElementById("formCadastro").reset();
            alert("Contato Editado");
            listar();
        }
        
    }

}


    

    
    
