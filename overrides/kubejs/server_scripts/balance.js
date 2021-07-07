onEvent('recipes', e => {

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
}),

e.remove({id: 'forbidden_arcanus:eternal_stella'})

e.shaped('forbidden_arcanus:eternal_stella', [
    'SXI',
    'TPN',
    'MXU'
],
{
    S : 'astralsorcery:starmetal_ingot',
    X : 'forbidden_arcanus:xpetrified_orb',
    I : 'occultism:iesnium_ingot',
    T : 'botania:terrasteel_ingot',
    P : 'forbidden_arcanus:stellarite_piece',
    N : 'naturesaura:sky_ingot',
    M : 'malum:soul_stained_steel_ingot',
    U : 'theabyss:unorithe_ingot'
})

})