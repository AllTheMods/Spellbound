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

    e.replaceInput({}, 'minecraft:water_bucket', '#forge:buckets/water')

    e.remove({output: 'minecraft:chain'})
    e.replaceInput({}, 'minecraft:chain', 'forbidden_arcanus:iron_chain')
    e.shapeless('minecraft:chain', ['forbidden_arcanus:iron_chain'])
    e.shapeless('forbidden_arcanus:iron_chain', ['minecraft:chain'])

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

    e.shapeless('minecraft:crafting_table', '#forge:workbench')
    e.shapeless('minecraft:chest', '#forge:chests/wooden')
    e.replaceInput({id: 'minecraft:lead'}, 'malum:solar_sapball', '#forge:slimeballs')

    e.shaped('forbidden_arcanus:soul_extractor', [
        'U  ',
        'NNB',
        'Q  '
    ],
    {
        U : 'forbidden_arcanus:utrem_jar',
        N : '#forge:nether_bricks',
        B : '#forge:storage_blocks/quartz',
        Q : '#forge:gems/quartz'
    })

    e.custom({type:'elementalcraft:infusion', 
    output: {
        item: 'minecraft:wet_sponge',
    },
    element_type: 'water',
    element_amount: 1000,
    input: {
        item: 'minecraft:yellow_wool'
    }
})

e.custom({type: 'betterendforge:alloying',
ingredients:[
    {
        tag: 'minecraft:saplings'
    },
    {
        item: 'minecraft:clock'
    }
],
result: 'twilightforest:time_sapling',
experience: 2.0,
smelttime: 1200
})

}
)