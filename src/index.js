// Main variables area
let money = 0;
let clickPower = 1;
const scoreLabel = document.getElementById("score-label");
//

// Pickaxe area
const btnPickaxeUpgrade = document.getElementById("btn-upgrade-click");
const pickaxeLevelLabel = document.getElementById("pickaxe-level");
const pickaxePriceLabel = document.getElementById("pickaxe-price");
let pickaxeLevel = 1;
let pickaxeUpgradePrice = 30;
btnPickaxeUpgrade.disabled = true;
//

// Miner area
const btnMinerUpgrade = document.getElementById("btn-upgrade-miner");
const minerLevelLabel = document.getElementById("miner-level");
const minerPriceLabel = document.getElementById("miner-price");
let minerLevel = 0;
let minerStrenght = 1;
let minerPrice = 500;
btnMinerUpgrade.disabled = true;
// Miner raise area
const raiseDiv = document.getElementById("raise-div");
const raiseLevelLabel = document.getElementById("raise-level");
const raisePriceLabel = document.getElementById("raise-price");
const raiseUpgradeBtn = document.getElementById("btn-raise-upgrade");
raiseUpgradeBtn.disabled = true;
let raiseLevel = 0;
let raisePrice = 200;
//
// Gold machine area
const goldMachineDiv = document.getElementById("gold-machine-div");
const goldMachineLevelLabel = document.getElementById("gold-machine-level");
const goldMachinePriceLabel = document.getElementById("gold-machine-price");
const btnGoldMachine = document.getElementById("btn-gold-machine");
btnGoldMachine.disabled = true;
let goldMachineLevel = 0;
let goldMachinePrice = 5000;
//
//

function checkMoney() {
  if (money >= pickaxeUpgradePrice) {
    btnPickaxeUpgrade.disabled = false;
  } else {
    btnPickaxeUpgrade.disabled = true;
  }

  if (money >= minerPrice) {
    btnMinerUpgrade.disabled = false;
  } else {
    btnMinerUpgrade.disabled = true;
  }

  if (money >= raisePrice) {
    raiseUpgradeBtn.disabled = false;
  } else {
    raiseUpgradeBtn.disabled = true;
  }

  if (money >= goldMachinePrice) {
    btnGoldMachine.disabled = false;
  } else {
    btnGoldMachine.disabled = true;
  }
}

// Main button clicker system
document.getElementById("main-btn-gold-bar").addEventListener("click", () => {
  money += clickPower;
  scoreLabel.innerText = money;
  checkMoney();
});
//

// Pickaxe upgrade system
btnPickaxeUpgrade.addEventListener("click", () => {
  clickPower++;
  money -= pickaxeUpgradePrice;
  pickaxeLevel++;
  pickaxeUpgradePrice = Math.floor(pickaxeUpgradePrice * 1.8);

  pickaxeLevelLabel.innerText = pickaxeLevel;
  scoreLabel.innerText = money;
  pickaxePriceLabel.innerText = pickaxeUpgradePrice;

  checkMoney();
});
//

// Miner upgrade system
btnMinerUpgrade.addEventListener("click", () => {
  money -= minerPrice;
  minerLevel++;
  minerPrice *= 2;

  if (minerLevel === 1) {
    raiseDiv.className =
      "skill-div d-flex justify-content-around align-items-center";
    checkMoney();
  }

  scoreLabel.innerText = money;
  minerLevelLabel.innerText = minerLevel;
  minerPriceLabel.innerText = minerPrice;

  setInterval(() => {
    money += minerStrenght;
    scoreLabel.innerText = money;
    checkMoney();
  }, 1000);

  checkMoney();
});

// Miner raise area
raiseUpgradeBtn.addEventListener("click", () => {
  money -= raisePrice;
  minerStrenght++;
  raiseLevel++;
  raisePrice *= 2;
  if (money < raisePrice) {
    raiseUpgradeBtn.disabled = true;
  }
  scoreLabel.innerText = money;
  raiseLevelLabel.innerText = raiseLevel;
  raisePriceLabel.innerText = raisePrice;
  checkMoney();
});

// Gold machine area
btnGoldMachine.addEventListener("click", () => {
  money -= goldMachinePrice;
  goldMachineLevel++;
  goldMachinePrice *= 1.5;

  setInterval(() => {
    money += 100;
    scoreLabel.innerText = money;
    checkMoney();
  }, 1000);

  scoreLabel.innerText = money;
  goldMachineLevelLabel.innerText = goldMachineLevel;
  goldMachinePriceLabel.innerText = goldMachinePrice;

  checkMoney();
});
//
