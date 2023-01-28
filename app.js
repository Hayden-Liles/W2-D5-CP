// STUB upgrades
// NOTE click multipliers NEED to go under all clickcount otherwise the effect will be undermined
let pointerUpgrades = [
  {name: "Hand", quantity: 0, clickCount: 1, cost: 200, costAddition: 200,
  upgradeFormula: [
    {
      startQuantity: 5,
      costPerItem: 1000,
      cupcakePerClick: 2
    },
    {
      startQuantity: 15,
      costPerItem: 2500,
      cupcakePerClick: 5
    },
    {
      startQuantity: 25,
      costPerItem: 5000,
      cupcakePerClick: 10
    },
    {
      startQuantity: 40,
      costPerItem: 10000,
      cupcakePerClick: 50
    },
    {
      startQuantity: 70,
      costPerItem: 15000,
      cupcakePerClick: 100
    },
  ]},

  {name: "Oven Mitt", quantity: 0, clickMultiplier: .1, cost: 5000, costAddition: 5000,
  upgradeFormula: [
    {
      startQuantity: 5,
      costPerItem: 10000,
      cupcakePerClick: .2,
    },
    {
      startQuantity: 15,
      costPerItem: 20000,
      cupcakePerClick: .3,
    },
    {
      startQuantity: 25,
      costPerItem: 30000,
      cupcakePerClick: .4,
    },
    {
      startQuantity: 40,
      costPerItem: 50000,
      cupcakePerClick: .5,
    },
    {
      startQuantity: 70,
      costPerItem: 80000,
      cupcakePerClick: .6,
    },
  ]},
]

let automaticUpgrades = [
  {name: "Microwave", quantity: 0, clickCount: 1, cost: 40, costAddition: 40,
   upgradeFormula:[
    {
      startQuantity: 15,
      costPerItem: 100,
      cupcakePerClick: 5,
    },
    {
      startQuantity: 30,
      costPerItem: 500,
      cupcakePerClick: 15,
    },
    {
      startQuantity: 45,
      costPerItem: 1500,
      cupcakePerClick: 20,
    },
    {
      startQuantity: 55,
      costPerItem: 3000,
      cupcakePerClick: 50,
    },
    {
      startQuantity: 70,
      costPerItem: 5000,
      cupcakePerClick: 70,
    },
   ]},
  {name: "Grandma", quantity: 0, clickCount: 15, cost: 300, costAddition: 300,
  upgradeFormula: [
  {
    startQuantity: 10,
    costPerItem: 500,
    cupcakePerClick: 5,
  },
  {
    startQuantity: 25,
    costPerItem: 1500,
    cupcakePerClick: 15,
  },
  {
    startQuantity: 35,
    costPerItem: 3000,
    cupcakePerClick: 20,
  },
  {
    startQuantity: 50,
    costPerItem: 5000,
    cupcakePerClick: 50,
  },
  {
    startQuantity: 70,
    costPerItem: 10000,
    cupcakePerClick: 70,
  },
  ]},
  {name: "Oven", quantity: 0, clickCount: 50, cost: 2000, costAddition: 2000,
  upgradeFormula: [
    {
      startQuantity: 10,
      costPerItem: 5000,
      cupcakePerClick: 150,
    },
    {
      startQuantity: 25,
      costPerItem: 8000,
      cupcakePerClick: 350,
    },
    {
      startQuantity: 40,
      costPerItem: 12000,
      cupcakePerClick: 600,
    },
    {
      startQuantity: 60,
      costPerItem: 15000,
      cupcakePerClick: 900,
    },
    {
      startQuantity: 75,
      costPerItem: 20000,
      cupcakePerClick: 1300,
    },
  ]},
  {name: "Food Truck", quantity: 0, clickCount: 1000, cost: 5000, costAddition: 5000,
  upgradeFormula: [
    {
      startQuantity: 10,
      costPerItem: 10000,
      cupcakePerClick: 1500,
    },
    {
      startQuantity: 25,
      costPerItem: 15000,
      cupcakePerClick: 2000,
    },
    {
      startQuantity: 40,
      costPerItem: 20000,
      cupcakePerClick: 4000,
    },
    {
      startQuantity: 50,
      costPerItem: 30000,
      cupcakePerClick: 6000,
    },
    {
      startQuantity: 65,
      costPerItem: 45000,
      cupcakePerClick: 10000,
    },
  ]},
  {name: "Factory", quantity: 0, clickCount: 3000, cost: 10000, costAddition: 10000,
  upgradeFormula: [
    {
      startQuantity: 10,
      costPerItem: 20000,
      cupcakePerClick: 5,
    },
    {
      startQuantity: 25,
      costPerItem: 50000,
      cupcakePerClick: 5,
    },
    {
      startQuantity: 40,
      costPerItem: 100000,
      cupcakePerClick: 5,
    },
    {
      startQuantity: 50,
      costPerItem: 300000,
      cupcakePerClick: 5,
    },
    {
      startQuantity: 60,
      costPerItem: 800000,
      cupcakePerClick: 5,
    },
    {
      startQuantity: 70,
      costPerItem: 1500000,
      cupcakePerClick: 5,
    },
  ]},
]

// SECTION element selectors
let cupcakeElem = document.querySelector("#cupcake")
let cupcakeBankElem = document.querySelector("#total-cupcakes-in-bank")
let handMadeCupcakesElem = document.querySelector("#hand-made-cupcakes")
let totalClicksElem = document.querySelector("#total-clicks")
let totalCupcakesMadeElem = document.querySelector("#total-cupcakes-made")
let cupcakePerClickElem = document.querySelector("#cupcakes-per-click")
let upgradesOwnedElem = document.querySelector("#upgrades-owned")
// ANCHOR - element selectors for UPGRADES
let handUpgrade = document.querySelector("#hand-upg")
let ovenMittUpgrade = document.querySelector("#oven-mitt-upg")
let microwaveUpgrade = document.querySelector("#microwave-upg")
let grandmaUpgrade = document.querySelector("#grandma-upg")
let ovenUpgrade = document.querySelector("#oven-upg")
let foodTruckUpgrade = document.querySelector("#food-truck-upg")
let factoryUpgrade = document.querySelector("#factory-upg")
// SECTION game mechanical variables
let manualClicksMultiplier = 1
let manualClicks = 1
let automaticClicks = 0
let automaticClicksMultiplier = 1
let handObj = pointerUpgrades[0]
let ovenMittObj = pointerUpgrades[1]
let microwaveObj = automaticUpgrades[0]
let grandmaObj = automaticUpgrades[1]
let ovenObj = automaticUpgrades[2]
let foodTruckObj = automaticUpgrades[3]
let factoryObj = automaticUpgrades[4]


// SECTION informational variables
let totalClicks = 0
let cupcakeBank = 0
let totalHandMadeCupcakes = 0
let totalCupcakesMade = 0
let totalUpgrades = 0

// SECTION Toast Config

const Toast = Swal.mixin({
  toast: true,
  position: 'bottom',
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})


// SECTION functions

function clickCupcake(){
  totalClicks++
  cupcakeBank += manualClicks
  totalHandMadeCupcakes += manualClicks
  totalCupcakesMade += manualClicks
  cupcakeBankElem.innerText = `Cupcakes in the bank: ${cupcakeBank}`
  totalCupcakesMadeElem.innerText = `All time cupcakes baked: ${totalCupcakesMade}`
  handMadeCupcakesElem.innerText = `Handmade cupcakes: ${totalHandMadeCupcakes}`
  totalClicksElem.innerText = `All time Cupcake clicks: ${totalClicks}`
  if(totalClicks == 200){
    handUpgrade.removeAttribute("hidden")
    Toast.fire({
      title: 'Unlocked Hand',
    })
  }
}

function updateInfo(){
  cupcakePerClickElem.innerText = `Cupcakes per click: ${manualClicks}`
  upgradesOwnedElem.innerText = `CP/s: ${automaticClicks}`
}

function checkUpgrade(upgrade, upgradeElem){
  if(cupcakeBank >= upgrade.cost){
    upgrade.quantity++
    cupcakeBank -= upgrade.cost
    if(upgrade.upgradeFormula.length > 0){
      let nextStat = upgrade.upgradeFormula[0]
      if(upgrade.quantity == nextStat.startQuantity){
        if(upgrade.clickCount != undefined){
          upgrade.clickCount = nextStat.cupcakePerClick
        }else{
          upgrade.clickMultiplier = nextStat.cupcakePerClick
        }
        upgrade.costAddition = nextStat.costPerItem
        upgrade.upgradeFormula.splice(0, 1)
        if(upgrade.upgradeFormula.length == 0){
          upgrade.upgradeFormula.push({
            startQuantity: 0,
            costPerItem: 0,
            cupcakePerClick: 0,
          },)
        }
      }
    }
    upgrade.cost += upgrade.costAddition
    upgradeElem.title = 
    `Cost: ${Math.ceil(upgrade.cost)}\nOwned: ${upgrade.quantity}`
    updateClicks()
    updateInfo()
  }
}

function updateClicks(){
  let tempManualClicks = 1
  let tempManualMultiplier = 1
  let tempAutomaticClicks = 0
  let tempAutomaticMultiplier = 1
  pointerUpgrades.forEach(upgrade => {
    if(upgrade.clickCount != undefined){
      tempManualClicks += upgrade.quantity * upgrade.clickCount
    }else{
      tempManualMultiplier += upgrade.quantity * upgrade.clickMultiplier
    }
  })
  automaticUpgrades.forEach(upgrade => {
    if(upgrade.clickCount != undefined){
      tempAutomaticClicks += upgrade.quantity * upgrade.clickCount
    }else{
      tempAutomaticMultiplier += upgrade.quantity * upgrade.clickMultiplier
    }
  })

  manualClicks = tempManualClicks * tempManualMultiplier
  automaticClicks = tempAutomaticClicks * tempAutomaticMultiplier
}

function autoClicks(){
  cupcakeBank += automaticClicks
  totalCupcakesMade += automaticClicks
  cupcakeBankElem.innerText = `Cupcakes in the bank: ${cupcakeBank}`
  totalCupcakesMadeElem.innerText = `All time cupcakes baked: ${totalCupcakesMade}`
}

setInterval(autoClicks, 1000)

// SECTION EVENT LISTENERS
cupcakeElem.addEventListener("click", clickCupcake)
// STUB for the manual click upgrades
handUpgrade.addEventListener("click", function(){ //STUB - HAND
  checkUpgrade(handObj, handUpgrade)
})
ovenMittUpgrade.addEventListener("click", function(){ // STUB - OVEN MITT
  checkUpgrade(ovenMittObj, ovenMittUpgrade)
})
// STUB for the automatic click upgrades
microwaveUpgrade.addEventListener("click", function(){ // STUB - MICROWAVE
  checkUpgrade(microwaveObj, microwaveUpgrade)
})
grandmaUpgrade.addEventListener("click", function(){ // STUB - GRANDMA
  checkUpgrade(grandmaObj, grandmaUpgrade)
})
ovenUpgrade.addEventListener("click", function(){ // STUB - OVEN
  checkUpgrade(ovenObj, ovenUpgrade)
})
foodTruckUpgrade.addEventListener("click", function(){ // STUB - FOOD TRUCK
  checkUpgrade(foodTruckObj, foodTruckUpgrade)
})
factoryUpgrade.addEventListener("click", function(){ // STUB - FACTORY
  checkUpgrade(factoryObj, factoryUpgrade)
})

updateInfo()


