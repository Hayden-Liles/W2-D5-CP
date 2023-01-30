// SECTION upgrades
// NOTE click multipliers NEED to go under all clickcount otherwise the effect will be undermined
let pointerUpgrades = [
  {
    name: "Hand", quantity: 0, clickCount: 1, cost: 200, costAddition: 200, unlocked: false, unlockNext: 16,
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
    ]
  },

  {
    name: "Oven-Mitt", quantity: 0, clickMultiplier: .1, cost: 5000, costAddition: 5000, unlocked: false, unlockNext: -1,
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
    ]
  },
]

let automaticUpgrades = [
  {
    name: "Microwave", quantity: 0, clickCount: 1, cost: 20, costAddition: 20, unlocked: true, unlockNext: 6,
    upgradeFormula: [
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
    ]
  },
  {
    name: "Grandma", quantity: 0, clickCount: 15, cost: 300, costAddition: 300, unlocked: false, unlockNext: 11,
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
    ]
  },
  {
    name: "Oven", quantity: 0, clickCount: 50, cost: 2000, costAddition: 2000, unlocked: false, unlockNext: 11,
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
    ]
  },
  {
    name: "Food-Truck", quantity: 0, clickCount: 1000, cost: 5000, costAddition: 5000, unlocked: false, unlockNext: 11,
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
    ]
  },
  {
    name: "Factory", quantity: 0, clickCount: 3000, cost: 10000, costAddition: 10000, unlocked: false, unlockNext: -1,
    upgradeFormula: [
      {
        startQuantity: 10,
        costPerItem: 20000,
        cupcakePerClick: 5000,
      },
      {
        startQuantity: 25,
        costPerItem: 50000,
        cupcakePerClick: 8000,
      },
      {
        startQuantity: 40,
        costPerItem: 100000,
        cupcakePerClick: 10000,
      },
      {
        startQuantity: 50,
        costPerItem: 300000,
        cupcakePerClick: 15000,
      },
      {
        startQuantity: 60,
        costPerItem: 800000,
        cupcakePerClick: 20000,
      },
      {
        startQuantity: 70,
        costPerItem: 1500000,
        cupcakePerClick: 30000,
      },
    ]
  },
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
let handObj = pointerUpgrades[0]

// SECTION game mechanical variables
let manualClicksMultiplier = 1
let manualClicks = 1
let automaticClicks = 0
let automaticClicksMultiplier = 1
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
function clickCupcake() {
  totalClicks++
  cupcakeBank += manualClicks
  totalHandMadeCupcakes += manualClicks
  totalCupcakesMade += manualClicks
  updateInfo()
  if (totalClicks == 200) {
    handUpgrade.removeAttribute("hidden")
    handObj.unlocked = true
    Toast.fire({
      title: 'Unlocked Hand',
    })
  }
}

// STUB VV Buying an upgrade sets the new stats of that upgrade and then calls checkAutoAchievments
function checkUpgrade(name) {

  let upgrade = pointerUpgrades.find(e => e.name == name)
  if (upgrade == undefined) {
    upgrade = automaticUpgrades.find(e => e.name == name)
  }

  if (cupcakeBank >= upgrade.cost) {
    upgrade.quantity++
    cupcakeBank -= upgrade.cost
    checkAchievments(name)
    if (upgrade.upgradeFormula.length > 0) {
      let nextStat = upgrade.upgradeFormula[0]
      if (upgrade.quantity == nextStat.startQuantity) {
        if (upgrade.clickCount != undefined) {
          upgrade.clickCount = nextStat.cupcakePerClick
        } else {
          upgrade.clickMultiplier = nextStat.cupcakePerClick
        }
        upgrade.costAddition = nextStat.costPerItem
        upgrade.upgradeFormula.splice(0, 1)
        if (upgrade.upgradeFormula.length == 0) {
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
function checkAchievments(name) {
  let index = pointerUpgrades.findIndex(e => e.name == name)
  if (index == -1) {
    index = automaticUpgrades.findIndex(e => e.name == name)
    if (automaticUpgrades[index].unlockNext == automaticUpgrades[index].quantity) {
      automaticUpgrades[index + 1].unlocked = true
      Toast.fire({
        title: `Unlocked ${automaticUpgrades[index + 1].name}`,
      })
      document.querySelector(`#${automaticUpgrades[index + 1].name.toLowerCase()}-upg`).removeAttribute("hidden")
    }
  } else {
    if (pointerUpgrades[index].unlockNext == pointerUpgrades[index].quantity) {
      pointerUpgrades[index + 1].unlocked = true
      Toast.fire({
        title: `Unlocked ${pointerUpgrades[index + 1].name}`,
      })
      document.querySelector(`#${pointerUpgrades[index + 1].name.toLowerCase()}-upg`).removeAttribute("hidden")
    }
  }
}

function updateInfo() {
  cupcakePerClickElem.innerText = `Cupcakes per click: ${manualClicks}`
  cupcakesPerSecondElem.innerText = `CP/s: ${automaticClicks}`
  cupcakeBankElem.innerText = `Cupcakes in the bank: ${cupcakeBank}`
  cupcakeBankElem.innerText = `Cupcakes in the bank: ${cupcakeBank}`
  totalCupcakesMadeElem.innerText = `All time cupcakes baked: ${totalCupcakesMade}`
  handMadeCupcakesElem.innerText = `Handmade cupcakes: ${totalHandMadeCupcakes}`
  totalClicksElem.innerText = `All time Cupcake clicks: ${totalClicks}`
}

function updateToolTips() {
  pointerUpgrades.forEach(e => {
    let eName = e.name.toLowerCase()
    let upgradeToolTipElem = document.querySelector(`#${eName}-tip`)
    if (e.clickMultiplier != undefined) {
      upgradeToolTipElem.innerText = `Name: ${e.name}\nOwn: ${e.quantity}\nCost: ${e.cost}\nDescription: Increases Cupcakes Per Click by (${e.clickCount})`
    } else {
      upgradeToolTipElem.innerText = `Name: ${e.name}\nOwn: ${e.quantity}\nCost: ${e.cost}\nDescription: Increases Cupcakes Per Click by (${e.clickMultiplier})`
    }
  })

  automaticUpgrades.forEach(e => {
    let eName = e.name.toLowerCase()
    let upgradeToolTipElem = document.querySelector(`#${eName}-tip`)
    upgradeToolTipElem.innerText = `Name: ${e.name}\nOwn: ${e.quantity}\nCost: ${e.cost}\nDescription: Increases Cupcakes Per Second by (${e.clickCount})`
  })
}

function updateClicks() {
  let tempManualClicks = 1
  let tempManualMultiplier = 1
  let tempAutomaticClicks = 0
  let tempAutomaticMultiplier = 1
  pointerUpgrades.forEach(upgrade => {
    if (upgrade.clickCount != undefined) {
      tempManualClicks += upgrade.quantity * upgrade.clickCount
    } else {
      tempManualMultiplier += upgrade.quantity * upgrade.clickMultiplier
    }
  })
  automaticUpgrades.forEach(upgrade => {
    if (upgrade.clickCount != undefined) {
      tempAutomaticClicks += upgrade.quantity * upgrade.clickCount
    } else {
      tempAutomaticMultiplier += upgrade.quantity * upgrade.clickMultiplier
    }
  })

  manualClicks = Math.floor(tempManualClicks * tempManualMultiplier)
  automaticClicks = Math.floor(tempAutomaticClicks * tempAutomaticMultiplier)
}

function autoClicks() {
  cupcakeBank += automaticClicks
  totalCupcakesMade += automaticClicks
  cupcakeBankElem.innerText = `Cupcakes in the bank: ${cupcakeBank}`
  totalCupcakesMadeElem.innerText = `All time cupcakes baked: ${totalCupcakesMade}`
}

function save() {
  localStorage.setItem("pointerUpgrades", JSON.stringify(pointerUpgrades))
  localStorage.setItem("automaticUpgrades", JSON.stringify(automaticUpgrades))
  localStorage.setItem("totalClicks", JSON.stringify(totalClicks))
  localStorage.setItem("cupcakeBank", JSON.stringify(cupcakeBank))
  localStorage.setItem("totalHandMadeCupcakes", JSON.stringify(totalHandMadeCupcakes))
  localStorage.setItem("totalCupcakesMade", JSON.stringify(totalCupcakesMade))

  localStorage.setItem("automaticClicks", JSON.stringify(automaticClicks))
  localStorage.setItem("manualClicks", JSON.stringify(manualClicks))
}

function load() {
  pointerUpgrades = JSON.parse(localStorage.getItem("pointerUpgrades"))
  automaticUpgrades = JSON.parse(localStorage.getItem("automaticUpgrades"))
  automaticClicks = JSON.parse(localStorage.getItem("automaticClicks"))
  manualClicks = JSON.parse(localStorage.getItem("manualClicks"))
  totalClicks = JSON.parse(localStorage.getItem("totalClicks"))
  cupcakeBank = JSON.parse(localStorage.getItem("cupcakeBank"))
  totalHandMadeCupcakes = JSON.parse(localStorage.getItem("totalHandMadeCupcakes"))
  totalCupcakesMade = JSON.parse(localStorage.getItem("totalCupcakesMade"))

  pointerUpgrades.forEach(e => {
    if (e.unlocked) {
      let eName = e.name.toLowerCase()
      document.querySelector(`#${eName}-upg`).removeAttribute("hidden")
    }
  })
  automaticUpgrades.forEach(e => {
    if (e.unlocked) {
      let eName = e.name.toLowerCase()
      document.querySelector(`#${eName}-upg`).removeAttribute("hidden")
    }
  })
  updateToolTips()
  updateInfo()
}

setInterval(autoClicks, 1000)
setInterval(save, 300000)

// SECTION EVENT LISTENERS
cupcakeElem.addEventListener("click", clickCupcake)

if (localStorage.length > 2) {
  load()
} else {
  updateInfo()
  updateToolTips()
}