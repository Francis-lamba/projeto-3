document.getElementById('taxiForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var origem = document.getElementById('origem').value;
    var destino = document.getElementById('destino').value;
    var minutos = parseFloat(document.getElementById('minutos').value);
    var km = parseFloat(document.getElementById('km').value);
  
    var valor = 30 * (minutos + km);
  
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = 'Origem: ' + origem + '<br>';
    resultadoDiv.innerHTML += 'Destino: ' + destino + '<br>';
    resultadoDiv.innerHTML += 'Valor da corrida: ' + valor.toFixed(2) + ' Kwanzas';
  });
  
  document.getElementById('taxiForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var origem = document.getElementById('origem').value;
    var destino = document.getElementById('destino').value;
    var minutos = parseFloat(document.getElementById('minutos').value);
    var km = parseFloat(document.getElementById('km').value);
  
    var valor = 30 * (minutos + km);
  
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = 'Origem: ' + origem + '<br>';
    resultadoDiv.innerHTML += 'Destino: ' + destino + '<br>';
    resultadoDiv.innerHTML += 'Valor da corrida: ' + valor.toFixed(2) + ' Kwanzas';
  });

  document.getElementById("customerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const payment = document.getElementById("payment").value;
    console.log("Nome: " + name);
    console.log("E-mail: " + email);
    console.log("Forma de pagamento: " + payment);
    alert("Cadastro realizado com sucesso!");
    this.reset();
  });
  