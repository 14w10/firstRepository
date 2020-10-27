const favoriteFood = [{
    ID: "Food001",
    name: "Spaghetti",
    isHot: true,
    isWestern: true
},{
    ID: "Food002",
    name: "Pizza",
    isHot: true,
    isWestern: true
},{
    ID: "Food003",
    name: "回锅肉",
    isHot: true,
    isWestern: false
},{
    ID: "Food004",
    name: "冷吃兔",
    isHot: false,
    isWestern: false
},{
    ID: "Food005",
    name: "抄手",
    isHot: true,
    isWestern: false
}]

const findIsWesternFood = function(listDishes){
    var result = null
    for(var ini = 0; ini < listDishes.length; ini ++){
        var foodObject = listDishes[ini] 
        var isWestern = foodObject.isWestern
        if(isWestern === true){
            result = foodObject
        }
    }
    return result
}

const findFoodByName = function(foodName,listDishes){
    var result = null
    for(var ini = 0; ini < listDishes.length; ini ++){
        var foodObject = listDishes[ini]
        var name = foodObject.name
        if(name === foodName){
            result = foodObject
        }
    }
    return result
}

// console.log(findFoodByName("Pizza",favoriteFood))

// The Javascript Data Methods: FIND

const pizza = favoriteFood.find(function(item){
    return (item.name === "Pizza")
})

const lenChiTu = favoriteFood.find(function(item){
    return (item.ID === "Food004")
})

const westernFood = favoriteFood.filter(function(item){
    return (item.isWestern === true)
})

const coldFood = favoriteFood.filter(function(item){
    return (item.isHot === false)
})

// console.log(pizza)
// console.log(lenChiTu)
// console.log(westernFood)
console.log(coldFood)