onEvent('recipes', e => {

    e.custom({
        type: 'botania:elven_trade',
        ingredients: [
            Ingredient.of('bhc:red_heart').toJson()
        ],
        output: [
            Item.of('bhc:yellow_heart').toJson()
        ]
    })

    e.custom({
        type: 'evilcraft:blood_infuser',
        item : Item.of('minecraft:rotten_flesh').toJson(),
        fluid: {
            fluid: Fluid.of('evilcraft:blood').toJson(),
            amount: 50000
        },
        result:{
            item: Item.of('bhc:red_heart').toJson()
        },
        duration: 1200,
        xp: 20,
        tier: 0
    })
})