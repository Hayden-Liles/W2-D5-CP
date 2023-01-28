// STUB upgrades
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
    quantityCheck: [6, 16, 26, 41, 71],
    costCheck: [10000, 20000, 30000, 50000, 80000],
    clickCheck: [.2, .3, .4, .5, .6]},
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
  quantityCheck: [11, 26, 36, 51, 71],
  costCheck: [500, 1500, 3000, 5000, 10000],
  clickCheck: [5, 15, 20, 50, 70],
  upgradeFormula: [
  {
    startQuantity: 15,
    costPerItem: 100,
    cupcakePerClick: 5,
  }
  ]},
  {name: "Oven", quantity: 0, clickCount: 50, cost: 2000, costAddition: 2000,},
  {name: "Food Truck", quantity: 0, clickCount: 1000, cost: 5000, costAddition: 5000,},
  {name: "Factory", quantity: 0, clickCount: 3000, cost: 10000, costAddition: 10000,},
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
// SECTION game mechanical variables
let manualClicksMultiplier = 1
let manualClicks = 1
let automaticClicks = 0
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
  cupcakeBank++
  totalHandMadeCupcakes += manualClicks
  totalCupcakesMade += manualClicks
  totalCupcakesMadeElem.innerText = `All time cupcakes baked: ${totalCupcakesMade}`
  cupcakeBankElem.innerText = `Cupcakes in the bank: ${cupcakeBank}`
  handMadeCupcakesElem.innerText = `Handmade cupcakes: ${totalHandMadeCupcakes}`
  totalClicksElem.innerText = `All time Cupcake clicks: ${totalClicks}`
  if(totalClicks == 10){
    handUpgrade.removeAttribute("hidden")
    Toast.fire({
      title: 'Unlocked Hand',
    })
  }
}

function updateInfo(){
  cupcakePerClickElem.innerText = `Cupcakes per click: ${manualClicks}`
  upgradesOwnedElem.innerText = `Upgrades owned: ${totalUpgrades}`
}

function checkUpgrade(upgrade, upgradeElem){
  if(cupcakeBank >= upgrade.cost){
    upgrade.quantity++
    if(upgrade.upgradeFormula.length > 0){
      let nextStat = upgrade.upgradeFormula[0]
      console.log(nextStat, upgrade)
      if(upgrade.quantity == nextStat.startQuantity){
        console.log('yep')
        upgrade.costAddition = nextStat.costPerItem
        upgrade.clickCount = nextStat.cupcakePerClick
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
    upgradeElem.title = `Cost: ${Math.ceil(upgrade.cost)}`
  }
}

// SECTION EVENT LISTENERS
cupcakeElem.addEventListener("click", clickCupcake)
microwaveUpgrade.addEventListener("click", function(){
  checkUpgrade(microwaveObj, microwaveUpgrade)
})

updateInfo()


