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
        D : '#forge:gems/dragonstone',
        C : 'minecraft:clock',
        I : 'mysticalagradditions:insanium_ingot_block',
        B : 'botania:ender_air_bottle'
    })

    //Replace BHC wither Bone w/ Necrotic
    e.replaceInput({type:'minecraft:crafting_shapeless'}, 'bhc:wither_bone', 'tconstruct:necrotic_bone')
}
)