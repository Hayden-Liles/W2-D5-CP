// SECTION element selectors
let cupcakeElem = document.querySelector("#cupcake")
let cupcakeBankElem = document.querySelector("#total-cupcakes-in-bank")
let handMadeCupcakesElem = document.querySelector("#hand-made-cupcakes")
let totalClicksElem = document.querySelector("#total-clicks")
let totalCupcakesMadeElem = document.querySelector("#total-cupcakes-made")
let cupcakePerClickElem = document.querySelector("#cupcakes-per-click")
let upgradesOwnedElem = document.querySelector("#upgrades-owned")
//ANCHOR - element selectors for UPGRADES
let handUpgrade = document.querySelector("#hand-upg")
let ovenMittUpgrade = document.querySelector("#oven-mitt-upg")
// SECTION game mechanical variables
let manualClicksMultiplier = 1
let manualClicks = 1
let automaticClicks = 0
// SECTION informational variables
let totalClicks = 0
let cupcakeBank = 0
let totalHandMadeCupcakes = 0
let totalCupcakesMade = 0
let totalUpgrades = 0
// SECTION EVENT LISTENERS
cupcakeElem.addEventListener("click", clickCupcake)
// handUpgrade.addEventListener("click")

function logMe(){
  console.log('asd')
}

// SECTION upgrades
let pointerUpgrades = [
  {name: "Hand", quantity: 0, cost: 200, unlocked: false},
  {name: "Oven Mitt", quantity: 0, cost: 200, unlocked: false},
]

let automaticUpgrades = [
  {name: "Microwave", quantity: 0, cost: 40, unlocked: true},
  {name: "Grandma", quantity: 0, cost: 300, unlocked: false},
  {name: "Oven", quantity: 0, cost: 2000, unlocked: false},
  {name: "Food Truck", quantity: 0, cost: 5000, unlocked: false},
  {name: "Factory", quantity: 0, cost: 10000, unlocked: false},
]

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
}

function updateInfo(){
  cupcakePerClickElem.innerText = `Cupcakes per click: ${manualClicks}`
  upgradesOwnedElem.innerText = `Upgrades owned: ${totalUpgrades}`
}

updateInfo()


