describe("Servers test (with setup and tear-down)", function() {

  beforeEach(function () {
    serverNameInput.value = "Alice"

  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');

    submitServerInfo();
  });

  it('should not add a new server when input is blank on submitServerInfo()', function(){
    serverNameInput.value = "";
    expect(serverId).toEqual(0);
    expect(Object.keys(allServers).length).toEqual(0);
  })

  it('should create new row on updateServerTable()', function(){
    submitServerInfo();
    updateServerTable();
    let currentServerList = document.querySelectorAll("#serverTable tbody tr td")
    expect(currentServerList[0].innerText).toEqual("Alice");
    expect(currentServerList[1].innerText).toEqual('$0.00');
  })

  afterEach(function() {
    serverTbody.innerHTML = "";
    serverId = 0;
    allServers = {};
  });
});