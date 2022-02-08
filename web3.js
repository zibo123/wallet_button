var web3;
var wallet_address;
async function Connect(){
    await window.web3.currentProvider.enable();
    web3=new web3(window.web3.currentProvider);
    const accounts = web3.eth.accounts;

    document.getElementById(wallet_address).innerText = accounts;
}