onEvent('recipes', e => {
    e.remove({output: 'magicfeather:magicfeather'})
    e.shaped('magicfeather:magicfeather', [
        'AFA',
        'AEA',
        'AFA'
    ], {
        A: '#forge:ingots/allthemodium',
        F: 'minecraft:feather',
        E: 'minecraft:elytra'
    })

    e.remove({output: 'angelring:itemdiamondring'})
    e.shaped('angelring:itemdiamondring', [
        'GBG',
        'BEB',
        'GBG'
    ],
    {
        G : 'occultism:spirit_attuned_gem',
        B : '#forge:storage_blocks/elementium',
        E : 'minecraft:elytra'
    }) 
    e.remove({output: 'angelring:itemring'})
    e.shaped('angelring:itemring',
    [
        'MBA',
        'BDB',
        'RBR'
    ],
    {
        M: 'magicfeather:magicfeather',
        B: '#forge:storage_blocks/allthemodium',
        A: 'xreliquary:angelic_feather',
        D: 'angelring:itemdiamondring',
        R: '#forge:rods/blaze'
    })
})