// SECTION upgrades
// NOTE click multipliers NEED to go under all clickcount otherwise the effect will be undermined
let pointerUpgrades = [
  {name: "Hand", quantity: 0, clickCount: 1, cost: 200, costAddition: 200, unlocked: false,
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

  {name: "Oven Mitt", quantity: 0, clickMultiplier: .1, cost: 5000, costAddition: 5000, unlocked: false,
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
  {name: "Microwave", quantity: 0, clickCount: 1, cost: 40, costAddition: 40, unlocked: true,
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
  {name: "Grandma", quantity: 0, clickCount: 15, cost: 300, costAddition: 300, unlocked: false, 
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
  {name: "Oven", quantity: 0, clickCount: 50, cost: 2000, costAddition: 2000, unlocked: false,
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
  {name: "Food Truck", quantity: 0, clickCount: 1000, cost: 5000, costAddition: 5000, unlocked: false,
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
  {name: "Factory", quantity: 0, clickCount: 3000, cost: 10000, costAddition: 10000, unlocked: false,
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
let cupcakesPerSecondElem = document.querySelector("#cupcake-per-second")
// ANCHOR - element selectors for UPGRADES
let handUpgrade = document.querySelector("#hand-upg")
let ovenMittUpgrade = document.querySelector("#oven-mitt-upg")
let microwaveUpgrade = document.querySelector("#microwave-upg")
let grandmaUpgrade = document.querySelector("#grandma-upg")
let ovenUpgrade = document.querySelector("#oven-upg")
let foodTruckUpgrade = document.querySelector("#food-truck-upg")
let factoryUpgrade = document.querySelector("#factory-upg")

// SECTION - TOOL TIP ELEMENTS
// STUB POINTER UPGRADE TIPS
let handTip = document.querySelector("#hand-tip")
let ovenMittTip = document.querySelector("#oven-mitt-tip")
// STUB AUTO UPGRADE TIPS
let microwaveTip = document.querySelector("#microwave-tip")
let grandmaTip = document.querySelector("#grandma-tip")
let ovenTip = document.querySelector("#oven-tip")
let foodTruckTip = document.querySelector("#food-truck-tip")
let factoryTip = document.querySelector("#factory-tip")

// SECTION game mechanical variables
let manualClicksMultiplier = 1
let manualClicks = 1
let automaticClicks = 0
let automaticClicksMultiplier = 1
// SECTION upgrade OBJECTS
// STUB OBJECTS of pointer upgrades
let handObj = pointerUpgrades.find(e => e.name == "Hand")
let ovenMittObj = pointerUpgrades.find(e => e.name == "Oven Mitt")
// STUB OBJECTS of automatic upgrades
let microwaveObj = automaticUpgrades.find(e => e.name == "Microwave")
let grandmaObj = automaticUpgrades.find(e => e.name == "Grandma")
let ovenObj = automaticUpgrades.find(e => e.name == "Oven")
let foodTruckObj = automaticUpgrades.find(e => e.name == "Food Truck")
let factoryObj = automaticUpgrades.find(e => e.name == "Factory")


// SECTION informational variables
let totalClicks = 0
let cupcakeBank = 0
let totalHandMadeCupcakes = 0
let totalCupcakesMade = 0

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
// STUB VV clicking the cupcake
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
    handObj.unlocked = true
    Toast.fire({
      title: 'Unlocked Hand',
    })
  }
}

// STUB VV Buying an upgrade sets the new stats of that upgrade and then calls checkAutoAchievments
function checkUpgrade(upgrade){
  if(cupcakeBank >= upgrade.cost){
    upgrade.quantity++
    cupcakeBank -= upgrade.cost
    checkAchievments()
    updateInfo()
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
    updateClicks()
    updateInfo()
    updateToolTips()
  }
}

// STUB VV checks whether or not the upgrades gets their hidden attribute removed
function checkAchievments(){
// STUB the check for the achievments
  switch(true){
    // STUB pointer upgrade checks
    case handObj.quantity == 16:
      ovenMittUpgrade.removeAttribute("hidden")
      ovenMittObj.unlocked = true
      Toast.fire({
        title: 'Unlocked OVEN MITT',
      })
      break
    // STUB automatic upgrade checks
    case microwaveObj.quantity == 6:
      grandmaUpgrade.removeAttribute("hidden")
      grandmaObj.unlocked = true
      Toast.fire({
        title: 'Unlocked GRANDMA',
      })
      break
    case grandmaObj.quantity == 11:
      ovenUpgrade.removeAttribute("hidden")
      ovenObj.unlocked = true
      Toast.fire({
        title: 'Unlocked OVEN',
      })
      break
    case ovenObj.quantity == 11:
      foodTruckUpgrade.removeAttribute("hidden")
      foodTruckObj.unlocked = true
      Toast.fire({
        title: 'Unlocked FOOD TRUCK',
      })
      break
    case foodTruckObj.quantity == 11:
      factoryUpgrade.removeAttribute("hidden")
      factoryObj.unlocked = true
      Toast.fire({
        title: 'Unlocked FACTORY',
      })
      break
  }
}

function updateInfo(){
  cupcakePerClickElem.innerText = `Cupcakes per click: ${manualClicks}`
  cupcakesPerSecondElem.innerText = `CP/s: ${automaticClicks}`
  cupcakeBankElem.innerText = `Cupcakes in the bank: ${cupcakeBank}`
}

function updateToolTips(){
  handTip.innerText =`Name: ${handObj.name}\nOwn: ${handObj.quantity}\nCost: ${handObj.cost}\nDescription: Increases Cupcakes Per Click by (${handObj.clickCount})`
  ovenMittTip.innerText = `Name: ${ovenMittObj.name}\nOwn: ${ovenMittObj.quantity}\nCost: ${ovenMittObj.cost}\nDescription: Increases Cupcakes Per Click by (${ovenMittObj.clickMultiplier}%)`

  microwaveTip.innerText =`Name: ${microwaveObj.name}\nOwn: ${microwaveObj.quantity}\nCost: ${microwaveObj.cost}\nDescription: Increases Cupcakes Per Second by (${microwaveObj.clickCount})`
  grandmaTip.innerText =`Name: ${grandmaObj.name}\nOwn: ${grandmaObj.quantity}\nCost: ${grandmaObj.cost}\nDescription: Increases Cupcakes Per Second by (${grandmaObj.clickCount})`
  ovenTip.innerText =`Name: ${ovenObj.name}\nOwn: ${ovenObj.quantity}\nCost: ${ovenObj.cost}\nDescription: Increases Cupcakes Per Second by (${ovenObj.clickCount})`
  foodTruckTip.innerText =`Name: ${foodTruckObj.name}\nOwn: ${foodTruckObj.quantity}\nCost: ${foodTruckObj.cost}\nDescription: Increases Cupcakes Per Second by (${foodTruckObj.clickCount})`
  factoryTip.innerText =`Name: ${factoryObj.name}\nOwn: ${factoryObj.quantity}\nCost: ${factoryObj.cost}\nDescription: Increases Cupcakes Per Second by (${factoryObj.clickCount})`
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

function save(){
  localStorage.setItem("manualUpgrades", JSON.stringify(pointerUpgrades))
  localStorage.setItem("automaticUpgrades", JSON.stringify(automaticUpgrades))
  localStorage.setItem("totalClicks", JSON.stringify(totalClicks))
  localStorage.setItem("cupcakeBank", JSON.stringify(cupcakeBank))
  localStorage.setItem("totalHandMadeCupcakes", JSON.stringify(totalHandMadeCupcakes))
  localStorage.setItem("totalCupcakesMade", JSON.stringify(totalCupcakesMade))
}

function load(){
  pointerUpgrades = JSON.parse(localStorage.getItem("manualUpgrades"))
  automaticUpgrades = JSON.parse(localStorage.getItem("automaticUpgrades"))
  totalClicks = JSON.parse(localStorage.getItem("totalClicks"))
  cupcakeBank = JSON.parse(localStorage.getItem("cupcakeBank"))
  totalHandMadeCupcakes = JSON.parse(localStorage.getItem("totalHandMadeCupcakes"))
  totalCupcakesMade = JSON.parse(localStorage.getItem("totalCupcakesMade"))

  switch(true){
    // STUB pointer upgrade checks
    case handObj.unlocked:
      handUpgrade.removeAttribute("hidden")
      break
    case ovenMittObj.unlocked:
      ovenMittUpgrade.removeAttribute("hidden")
      break
    // STUB automatic upgrade checks
    case grandmaObj.unlocked:
      grandmaUpgrade.removeAttribute("hidden")
      break
    case ovenObj.unlocked:
      ovenUpgrade.removeAttribute("hidden")
      break
    case foodTruckObj.unlocked:
      foodTruckUpgrade.removeAttribute("hidden")
      break
    case factoryObj.unlocked:
      factoryUpgrade.removeAttribute("hidden")
      break
  }
  handObj = pointerUpgrades.find(e => e.name == "Hand")
  ovenMittObj = pointerUpgrades.find(e => e.name == "Oven Mitt")
  microwaveObj = automaticUpgrades.find(e => e.name == "Microwave")
  grandmaObj = automaticUpgrades.find(e => e.name == "Grandma")
  ovenObj = automaticUpgrades.find(e => e.name == "Oven")
  foodTruckObj = automaticUpgrades.find(e => e.name == "Food Truck")
  factoryObj = automaticUpgrades.find(e => e.name == "Factory")
}

setInterval(autoClicks, 1000)
setInterval(save, 300000)

// SECTION EVENT LISTENERS
cupcakeElem.addEventListener("click", clickCupcake)
// STUB for the manual click upgrades
handUpgrade.addEventListener("click", function(){ //STUB - HAND
  checkUpgrade(handObj)
})
ovenMittUpgrade.addEventListener("click", function(){ // STUB - OVEN MITT
  checkUpgrade(ovenMittObj)
})
// STUB for the automatic click upgrades
microwaveUpgrade.addEventListener("click", function(){ // STUB - MICROWAVE
  checkUpgrade(microwaveObj)
})
grandmaUpgrade.addEventListener("click", function(){ // STUB - GRANDMA
  checkUpgrade(grandmaObj)
})
ovenUpgrade.addEventListener("click", function(){ // STUB - OVEN
  checkUpgrade(ovenObj)
})
foodTruckUpgrade.addEventListener("click", function(){ // STUB - FOOD TRUCK
  checkUpgrade(foodTruckObj)
})
factoryUpgrade.addEventListener("click", function(){ // STUB - FACTORY
  checkUpgrade(factoryObj)
})
if(localStorage.length > 3){
  load()
  updateInfo()
  updateToolTips()
  autoClicks()
  clickCupcake()
  load()
}else{
  updateInfo()
  updateToolTips()
}
