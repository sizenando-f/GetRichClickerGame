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
//

// Main button clicker system
document.getElementById("main-btn-gold-bar").addEventListener("click", () => {
  money += clickPower;
  scoreLabel.innerText = money;

  if (money >= pickaxeUpgradePrice) {
    btnPickaxeUpgrade.disabled = false;
  }

  if (money >= minerPrice) {
    btnMinerUpgrade.disabled = false;
  }

  if (money >= raisePrice) {
    raiseUpgradeBtn.disabled = false;
  }
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

  if (money < pickaxeUpgradePrice) {
    btnPickaxeUpgrade.disabled = true;
  }
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
  }

  scoreLabel.innerText = money;
  minerLevelLabel.innerText = minerLevel;
  minerPriceLabel.innerText = minerPrice;

  setInterval(() => {
    money += minerStrenght;
    scoreLabel.innerText = money;
  }, 2500);

  if (money < minerPrice) {
    btnMinerUpgrade.disabled = true;
  }
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
});
//
