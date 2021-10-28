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

e.shapeless('kubejs:mundane_helmet', ['#allthemagic:dragon_helmet', 'mythicbotany:alfsteel_helmet', 'forbidden_arcanus:draco_arcanus_helmet', 'bloodmagic:livinghelmet', 'ars_nouveau:archmage_hood', 'betterendforge:aeternium_helmet', 'theabyss:abyss_fire_upg_armor_armor_helmet', 'blue_skies:charoite_helmet', 'twilightforest:knightmetal_helmet'])
e.shapeless('kubejs:mundane_chestplate', ['#allthemagic:dragon_chestplate', 'mythicbotany:alfsteel_chestplate', 'forbidden_arcanus:draco_arcanus_chestplate', 'bloodmagic:livingplate', 'ars_nouveau:archmage_robes', 'betterendforge:aeternium_chestplate', 'theabyss:abyss_fire_upg_armor_armor_chestplate', 'blue_skies:charoite_chestplate', 'twilightforest:knightmetal_chestplate'])
e.shapeless('kubejs:mundane_leggings', ['#allthemagic:dragon_leggings', 'mythicbotany:alfsteel_leggings', 'forbidden_arcanus:draco_arcanus_leggings', 'bloodmagic:livingleggings', 'ars_nouveau:archmage_leggings', 'betterendforge:aeternium_leggings', 'theabyss:abyss_fire_upg_armor_armor_leggings', 'blue_skies:charoite_leggings', 'twilightforest:knightmetal_leggings'])
e.shapeless('kubejs:mundane_boots', ['#allthemagic:dragon_boots', 'mythicbotany:alfsteel_boots', 'forbidden_arcanus:draco_arcanus_boots', 'bloodmagic:livingboots', 'ars_nouveau:archmage_boots', 'betterendforge:aeternium_boots', 'theabyss:abyss_fire_upg_armor_armor_boots', 'blue_skies:charoite_boots', 'twilightforest:knightmetal_boots'])

e.smithing('allthemodium:allthemodium_helmet', 'kubejs:mundane_helmet', '#forge:storage_blocks/allthemodium')
e.smithing('allthemodium:allthemodium_chestplate', 'kubejs:mundane_chestplate', '#forge:storage_blocks/allthemodium')
e.smithing('allthemodium:allthemodium_leggings', 'kubejs:mundane_leggings', '#forge:storage_blocks/allthemodium')
e.smithing('allthemodium:allthemodium_boots', 'kubejs:mundane_boots', '#forge:storage_blocks/allthemodium')

e.replaceInput({id: 'pedestals:upgrades/itempedestalupgradedefault'}, 'minecraft:gold_ingot', '#allthemagic:mystic_gold')
e.replaceInput({id: 'torchmaster:feral_flare_lantern'}, '#forge:dusts/glowstone', 'ars_nouveau:jar_of_light')
e.replaceInput({id: 'torchmaster:megatorch'}, 'minecraft:torch', ['xreliquary:interdiction_torch', 'projecte:interdiction_torch'])

e.remove({output: `allthemodium:allthemodium_helmet`})
e.remove({output: `allthemodium:allthemodium_chestplate`})
e.remove({output: `allthemodium:allthemodium_leggings`})
e.remove({output: `allthemodium:allthemodium_boots`})

e.remove({output: `allthemodium:vibranium_helmet`})
e.remove({output: `allthemodium:vibranium_chestplate`})
e.remove({output: `allthemodium:vibranium_leggings`})
e.remove({output: `allthemodium:vibranium_boots`})

e.remove({output: `allthemodium:unobtainium_helmet`})
e.remove({output: `allthemodium:unobtainium_chestplate`})
e.remove({output: `allthemodium:unobtainium_leggings`})
e.remove({output: `allthemodium:unobtainium_boots`})



e.smithing('allthemodium:vibranium_helmet', 'allthemodium:allthemodium_helmet', '#forge:storage_blocks/vibranium')
e.smithing('allthemodium:vibranium_chestplate', 'allthemodium:allthemodium_chestplate', '#forge:storage_blocks/vibranium')
e.smithing('allthemodium:vibranium_leggings', 'allthemodium:allthemodium_leggings', '#forge:storage_blocks/vibranium')
e.smithing('allthemodium:vibranium_boots', 'allthemodium:allthemodium_boots', '#forge:storage_blocks/vibranium')

e.smithing('allthemodium:unobtainium_helmet', 'allthemodium:vibranium_helmet', '#forge:storage_blocks/unobtainium')
e.smithing('allthemodium:unobtainium_chestplate', 'allthemodium:vibranium_chestplate', '#forge:storage_blocks/unobtainium')
e.smithing('allthemodium:unobtainium_leggings', 'allthemodium:vibranium_leggings', '#forge:storage_blocks/unobtainium')
e.smithing('allthemodium:unobtainium_boots', 'allthemodium:vibranium_boots', '#forge:storage_blocks/unobtainium')

})