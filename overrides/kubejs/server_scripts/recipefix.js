onEvent('recipes', e => {

    e.remove({output: 'enigmaticlegacy:iron_ring'})

    e.shaped('enigmaticlegacy:iron_ring', [
        'INI',
        'N N',
        'INI'
    ],
    {
        I : '#forge:ingots/iron',
        N : '#forge:nuggets/iron'
    })

    e.remove({output: 'tiab:timeinabottle'})

    
    e.shaped('tiab:timeinabottle', [
        'AAA',
        'DCD',
        'IBI'
    ],
    {
        A : '#forge:ingots/allthemodium',
        D : '#forge:gems/mana_diamond',
        C : 'minecraft:clock',
        I : '#forge:ingots/brass',
        B : 'minecraft:glass_bottle'
    }) 
    

    e.replaceInput({}, 'minecraft:water_bucket', '#forge:buckets/water')

    e.remove({id: 'bagofyurting:bag_of_yurting'})
    e.shaped('bagofyurting:bag_of_yurting', [
        'WCW',
        'WEW',
        'WCW'
    ],
    {
        W : '#minecraft:wool',
        C : '#forge:chests',
        E : '#forge:ender_pearls'
    })

    e.shaped('minecraft:crafting_table', '#forge:workbench')

}
)