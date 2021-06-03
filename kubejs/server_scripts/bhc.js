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
        item : Item.of('xreliquary:zombie_heart').toJson(),
        fluid: Fluid.of('evilcraft:blood', 50000).toJson(),
        result: Item.of('bhc:red_heart').toJson(),
        duration: 1200,
        xp: 20,
        tier: 0
    })
    e.custom({
        type: 'evilcraft:blood_infuser',
        item : Item.of('eidolon:zombie_heart').toJson(),
        fluid: Fluid.of('evilcraft:blood', 25000).toJson(),
        result: Item.of('bhc:red_heart').toJson(),
        duration: 1200,
        xp: 20,
        tier: 0
    })
})