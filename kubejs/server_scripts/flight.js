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
        'ALA',
        'BRB',
        'GMG'
    ],
    {
        A : 'bloodmagic:reagentair',
        G : 'occultism:spirit_attuned_gem',
        L : 'ars_nouveau:belt_of_levitation',
        B : 'forbidden_arcanus:dark_soul',
        R : 'naturesaura:death_ring',
        M : 'astralsorcery:mantle'
    }) 
    e.remove({output: 'angelring:itemring'})
    e.shaped('angelring:itemring',
    [
        'MXA',
        'GDG',
        'RBR'
    ],
    {
        M: 'magicfeather:magicfeather',
		X: 'mana-and-artifice:ritual_focus_greater',
        B: '#forge:storage_blocks/allthemodium',
        A: 'xreliquary:angelic_feather',
		G: 'botania:gaia_ingot',
        D: 'angelring:itemdiamondring',
        R: '#forge:rods/blaze'
    })
})