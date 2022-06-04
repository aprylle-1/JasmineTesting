let serverNameInput = document.getElementById('serverName');
let serverForm = document.getElementById('serverForm');

let serverTbody = document.querySelector('#serverTable tbody');
let serverTable = document.getElementById("serverTable");
let allServers = {};
let serverId = 0;
serverTable.addEventListener('click', function(event){
  console.dir(event);
  if(event.target.tagName == "BUTTON"){
    //console.log(event.target.parentElement);
    let serverId = event.target.parentElement.id;
    //console.log(serverId);
    updateServerList(serverId);
    updateServerTable();
    event.target.parentElement.remove()
  }
})
serverForm.addEventListener('submit', submitServerInfo);

// create server object and add to allServers, update html and reset input
function submitServerInfo(evt) {
  if (evt) evt.preventDefault(); // when running tests there is no event

  let serverName = serverNameInput.value;

  if (serverName !== '') {
    serverId++;
    allServers['server' + serverId] = { serverName };

    updateServerTable();

    serverNameInput.value = '';
  }
}

// Create table row element and pass to appendTd function with input value
function updateServerTable() {
  serverTbody.innerHTML = '';

  for (let key in allServers) {
    let curServer = allServers[key];

    let newTr = document.createElement('tr');
    newTr.setAttribute('id', key);

    let tipAverage = sumPaymentTotal('tipAmt') / Object.keys(allServers).length;

    appendTd(newTr, curServer.serverName);
    appendTd(newTr, '$' + tipAverage.toFixed(2));
    let removeBtn = document.createElement('button');
    removeBtn.innerText = "Remove"
    newTr.append(removeBtn);
    serverTbody.append(newTr);
  }
}

function updateServerList (serverId){
    let newServerList = {};
    for (let key in allServers){
      if (key == serverId){
        newServerList = newServerList;
      }
      else{
        newServerList[key] = allServers[key]
      }
    }
    allServers = newServerList
}