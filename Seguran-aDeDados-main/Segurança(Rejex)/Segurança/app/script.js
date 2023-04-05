function login(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    if (email === localStorage.getItem("email") && password===localStorage.getItem("senha")) {
        alert("Login efetuado com sucesso!");
        window.location.href = "manutencao.html";
    } else {
        alert("E-mail ou senha inválidos!");

    }
    
}

function validarEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
  return regex.test(email);
}
function validarSenha(senha) {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return regex.test(senha);
}
function registrar(){
    var email = document.getElementById("email").value;
    var senha = document.getElementById("password").value;
    
    if (validarEmail(email) == false){
      alert('Email inválido, tente novamente');
      return console.log('Email invalido');
    }
    if (validarSenha(senha) == false){
      alert('Senha inválida, tente novamente');
      document.getElementById('password').value='';
      return console.log('Senha invalida');
    }

    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);

    document.getElementById('email').value='';
    document.getElementById('password').value='';
    alert("Registro feito com sucesso")
}


function convertToCSV(objArray) {
    const header = Object.keys(objArray[0]).join(',');
    const csv = objArray.map(obj => {
      return Object.values(obj).map(value => {
        if (typeof value === 'string' && value.includes(',')) {
          return `"${value}"`;
        } else {
          return value;
        }
      }).join(',');
    }).join('\n');
    return `${header}\n${csv}`;
  }

function salvarDados() {
    // Obter os valores dos campos do formulário
    var matricula = document.getElementById("matricula").value;
    var nome = document.getElementById("nome").value;
    var fone = document.getElementById("fone").value;
    var endereco_rua = document.getElementById("endereco_rua").value;
    var endereco_numero = document.getElementById("endereco_numero").value;
    var endereco_bairro = document.getElementById("endereco_bairro").value;
    var endereco_complemento = document.getElementById("endereco_complemento").value;
    var endereco_cidade = document.getElementById("endereco_cidade").value;
    var endereco_estado = document.getElementById("endereco_estado").value;
    var numero_filhos = document.getElementById("numero_filhos").value;
    var renda_familiar = document.getElementById("renda_familiar").value;
    
    // Criar um objeto com os dados do formulário
    var dados = {
      matricula: matricula,
      nome: nome,
      fone: fone,
      endereco_rua: endereco_rua,
      endereco_numero: endereco_numero,
      endereco_bairro: endereco_bairro,
      endereco_complemento: endereco_complemento,
      endereco_cidade: endereco_cidade,
      endereco_estado: endereco_estado,
      numero_filhos: numero_filhos,
      renda_familiar: renda_familiar
    }
    
    // Armazenar a string JSON no localStorage
    localStorage.setItem('dados', JSON.stringify(dados));
  };

  function exportarCSV() {
    const dados = JSON.parse(localStorage.getItem('dados'));
    let csv = 'Matrícula;Nome;Fone;Endereço;Rua;Endereço;Número;Endereço;Bairro;Endereço;Complemento;Endereço;Cidade;Endereço;Estado;Número de filhos;Renda Familiar\n';
  
    csv += `${dados.matricula};${dados.nome};${dados.fone};${dados.endereco_rua};${dados.endereco_numero};${dados.endereco_bairro};${dados.endereco_complemento};${dados.endereco_cidade};${dados.endereco_estado};${dados.numero_filhos};${dados.renda_familiar}\n`;
  
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'dados.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }