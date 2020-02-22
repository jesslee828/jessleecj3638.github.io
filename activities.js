
function first() {
    generateTable(events);
}

 function generateTable(data) {
    let table = document.getElementById("InfoTables");

    
    for (let element of data) {
        
      let row = table.insertRow();
      console.log('=insertRow=')
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  window.onload = first;
  
  

        