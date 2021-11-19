onEvent('recipes', e => {
    
    //Patrick Star
  e.recipes.create.mechanical_crafting('kubejs:patrick_star', [
    '    B    ',
    '   BCA   ',
    'BBBGCABBB',
    'ACGCGGGCA',
    ' AAGGGBA ',
    '  EDDDE  ',
    ' EFEDEFE ',
    'BEDD DDEB',
    'AAA   AAA'
  ], {
    A: 'minecraft:magenta_concrete',
    B: 'minecraft:pink_concrete',
    C: 'minecraft:pink_concrete_powder',
    D: 'minecraft:green_concrete',
    E: 'minecraft:green_concrete_powder',
    F: 'minecraft:lime_concrete',
    G: 'minecraft:magenta_concrete_powder'
    })

    e.custom({type: 'mythicbotany:infusion', group: 'infuser',
output: {
    item: 'kubejs:baldersteel'
},
mana: 4000000,
ingredients: [
    {
        item: 'mythicbotany:alfsteel_armor_upgrade'
    },
    {
        item: 'botania:gaia_ingot'
    },
    {
        item: 'mythicbotany:kvasir_blood'
    }
],
fromColor: 16750080,
toColor: 14222619
})

//Creative Essence
e.shaped('mysticalagradditions:creative_essence', [
    'CAC',
    'ABA',
    'CAC'
], {
    A: 'mysticalagradditions:insanium_block',
    C: 'mysticalagradditions:insanium_gemstone_block',
    B: 'mysticalagriculture:master_infusion_crystal'
})

//Oblivion Shard
e.shaped('kubejs:oblivion_shard', [
    ' AB',
    'ACA',
    'BA '
], {
    A: 'allthemodium:unobtainium_block',
    C: 'astralsorcery:shifting_star_vicio',
    B: 'forbidden_arcanus:dark_nether_star_block'
})

//Pulsating Black Hole
e.custom({type: 'naturesaura:tree_ritual', 
ingredients:[
    {
        item: 'xreliquary:void_tear'
    },
    {
        item: 'ars_nouveau:void_jar'
    },
    {
        item: 'bloodmagic:voidsigil'
    },
    {
        item: 'botania:mana_void'
    },
    {
        item: 'botania:black_hole_talisman'
    },
    {
        item: 'storagedrawers:void_upgrade'
    },
    {
        item: 'eidolon:void_amulet'
    },
    {
        item: 'sophisticatedbackpacks:advanced_void_upgrade'
    }
],
sapling:{
    item : 'ars_nouveau:purple_archwood_sapling'
},
output: {
    item : 'kubejs:pulsating_black_hole'
}, time: 200})

//Dragon Soul
e.custom({type:'ars_nouveau:enchanting_apparatus', 
item_1:[
    {
      item : 'forbidden_arcanus:dark_soul'  
    }
],
item_2:[
    {
        tag: 'allthemagic:dragon_blood'
    }
],
item_3:[
    {
        item: 'eidolon:lesser_soul_gem'
    }
],
item_4:[
    {
        item: 'botania:dragonstone'
    }
],
item_5:[
    {
        tag: 'forge:scales/dragon'
    }
],
item_6:[
    {
        item: 'minecraft:dragon_breath'
    }
],
item_7:[
    {
        item: 'botania:dragonstone'
    }
],
item_8:[
    {
        item: 'forbidden_arcanus:golden_dragon_scale'
    }
],
reagent:[
    {
        item: 'minecraft:nether_star'
    }
],
output:
    {
        item: 'kubejs:dragon_soul'
    }
})

//Spark of Knowledge

e.shaped('kubejs:spark_of_knowledge', [
    'SKC',
    'GZP',
    'EFB'
],{
    S : 'turtlemancy:shell_of_encapsulation',
    K : 'astral:key_of_enlightenment',
    C : 'bloodmagic:corrosivedemoncrystal',
    G : 'ars_nouveau:glyph_fangs',
    Z : 'botania:spark',
    P : 'astralsorcery:fountain_prime_vortex',
    E : 'psi:ebony_psimetal',
    F : 'elementalcraft:fireite_ingot',
    B : 'kubejs:baldersteel'
})

//Rune of Sins
e.custom({type:'botania:runic_altar',
    output: {
        item: 'kubejs:rune_of_sins'
    },
    mana: 25000,
    ingredients: [{
        tag: 'botania:runes/lust'
    },
    {
        tag: 'botania:runes/gluttony'
    },
    {
        tag: 'botania:runes/greed'
    },
    {
        tag: 'botania:runes/sloth'
    },
    {
        tag: 'botania:runes/wrath'
    },
    {
        tag: 'botania:runes/envy'
    },
    {
        tag: 'botania:runes/pride'
    }
    ]
})

//Mass of Wills
e.custom({type: 'botania:petal_apothecary',
    output: {
        item: 'kubejs:mass_of_wills'
    },
    ingredients: [{
        item: 'botania:ancient_will_ahrim'
    },
    {
        item: 'botania:ancient_will_dharok'
    },
    {
        item: 'botania:ancient_will_guthan'
    },
    {
        item: 'botania:ancient_will_torag'
    },
    {
        item: 'botania:ancient_will_verac'
    },
    {
        item: 'botania:ancient_will_karil'
    }
    ]
})

e.custom({type: 'astralsorcery:altar', altar_type: 3, duration: 800, starlight: 6200, pattern: [
    'TTTTT',
    'TCGHT',
    ' TNT ',
    'TBSOT',
    'TTTTT'
], key: {
    T : {
        item: 'twilightforest:time_wood'
    },
    C : {
        item: 'create:cuckoo_clock'
    },
    G : {
        item: 'ars_nouveau:glyph_extend_time'
    },
    H : {
        item: 'botania:hourglass'
    },
    N : {
        item: 'minecraft:clock'
    },
    B : {
        item : 'theabyss:end_of_time_book'
    },
    S : {
        item : 'supplementaries:clock_block'
    },
    O : {
        item : 'tiab:timeinabottle'
    }
},
output: [
{
    item: 'kubejs:clock_of_father_time'
}],
focus_constellation: 'astralsorcery:horologium',
relay_inputs: [
    {
        tag: 'forge:dusts/iesnium'
    },
    {
        tag: 'forge:dusts/iesnium'
    },
    {
        tag: 'forge:dusts/iesnium'
    }
],
effects: [
'astralsorcery:built_in_effect_constellation_finish',
'astralsorcery:liquid_burst',
'astralsorcery:built_in_effect_trait_relay_highlight',
'astralsorcery:built_in_effect_discovery_central_beam',
'astralsorcery:built_in_effect_trait_focus_circle',
'astralsorcery:altar_default_sparkle',
'astralsorcery:built_in_effect_constellation_lines',
'astralsorcery:built_in_effect_attunement_sparkle'
]})

//Eye of Chaos
e.custom({type: 'mana-and-artifice:manaweaving-recipe', tier: 5, output: 'kubejs:eye_of_chaos', items: [
    'naturesaura:end_city_finder',
    'minecraft:ender_eye',
    'xreliquary:eye_of_the_storm',
    'botania:third_eye',
    'forbidden_arcanus:spectral_eye_amulet',
    'minecraft:fermented_spider_eye',
    'enigmaticlegacy:extradimensional_eye',
    'xreliquary:salamander_eye',
    'theabyss:scorpioneye'
],
patterns: [
    'mana-and-artifice:circle',
    'mana-and-artifice:infinity',
    'mana-and-artifice:circle',
    'mana-and-artifice:infinity'
]
})

//Essence of Eternal Life
e.shaped('kubejs:essence_of_eternal_life', [
    'ZEP',
    ' F ',
    'SWI'
],{
    Z : 'minecraft:zombie_spawn_egg',
    E : 'minecraft:enderman_spawn_egg',
    P : 'minecraft:zombified_piglin_spawn_egg',
    F : 'evilcraft:flesh_rejuvenated',
    S : 'minecraft:skeleton_spawn_egg',
    W : 'minecraft:witch_spawn_egg',
    I : 'minecraft:pillager_spawn_egg'
}
)

//Philosophers Fuel
e.recipes.bloodmagic.alchemytable('kubejs:philosophers_fuel', [
    'mana-and-artifice:ritual_focus_greater',
    'iceandfire:dragonsteel_fire_ingot',
    'theabyss:netherfire_ingot',
    'mysticalagradditions:insanium_coal_block',
    'elementalcraft:pristine_fire_gem',
    'malum:radiant_soulstone'
]).syphon(500000)

e.recipes.create.mechanical_crafting('kubejs:atm_star', [
    '    A    ',
    '   AJA   ',
    'AAAJFJAAA',
    'AJJCDEJJA',
    ' ANBIHMA ',
    '  AKGLA  ',
    ' AJJAJJA ',
    'AJJA AJJA',
    'AAA   AAA'
], {
    A: 'allthemodium:unobtainium_allthemodium_alloy_block',
    B: 'kubejs:spark_of_knowledge',
    C: 'kubejs:dragon_soul',
    D: 'kubejs:clock_of_father_time',
    E: 'kubejs:pulsating_black_hole',
    F: 'kubejs:oblivion_shard',
    G: 'kubejs:eye_of_chaos',
    H: 'kubejs:essence_of_eternal_life',
    I: 'kubejs:patrick_star',
    J: 'forbidden_arcanus:dark_nether_star_block',
    K: 'kubejs:philosophers_fuel',
    L: 'mysticalagradditions:creative_essence',
    M: 'kubejs:rune_of_sins',
    N: 'kubejs:mass_of_wills'
})

})