onEvent('recipes', e => {

  //EASIER
  e.remove({output:'projecte:repair_talisman'}) 
  e.shaped('projecte:repair_talisman', [
      'UVA',
      'SES',
      'AVU'
  ],
  {
    U: 'allthemodium:unobtainium_dust', 
    V: 'allthemodium:vibranium_dust',
    A: 'allthemodium:allthemodium_dust',
    S: 'minecraft:string',
    E: 'forbidden_arcanus:eternal_stella'
  })

  e.replaceInput({id: 'projecte:interdiction_torch'}, 'projecte:philosophers_stone', 'xreliquary:interdiction_torch')
  
  e.remove({output: 'projecte:destruction_catalyst'})
  e.shaped('projecte:destruction_catalyst', [
      'LAL',
      'APA',
      'LAL'
  ],{
      L: 'evilcraft:lightning_bomb',
      A: 'allthemodium:allthemodium_block',
      P: 'aiotbotania:terra_aiot'
  })

  e.replaceInput({id:'projecte:divining_rod_1'}, 'projecte:low_covalence_dust', '#forge:dusts/obsidian')
  e.replaceInput({id:'projecte:divining_rod_2'}, 'projecte:medium_covalence_dust', 'astralsorcery:stardust')
  e.replaceInput({id:'projecte:divining_rod_3'}, 'projecte:high_covalence_dust', '#forge:dusts/allthemodium')
  
   



   //NERFS
    e.remove({output: 'projecte:collector_mk1'})
  /*  e.remove({output: 'projecte:collector_mk2'})
    e.remove({output: 'projecte:collector_mk3'})
    e.remove({output: 'projecte:relay_mk1'})
    e.remove({output: 'projecte:relay_mk2'})
    e.remove({output: 'projecte:relay_mk3'}) */
    e.shaped('projecte:collector_mk1', [
        'TAT',
        'TUT',
        'TFT'
    ],
    {
        T: 'naturesaura:conversion_catalyst',
        A: 'botania:elf_glass',
        U: 'projecte:philosophers_stone',
        F: 'ironfurnaces:allthemodium_furnace'
    })
    e.remove({output: 'projecte:relay_mk1'})
    e.shaped('projecte:relay_mk1', [
        'IAI',
        'IUI',
        'III'
    ],
    {
        A: 'botania:elf_glass',
        U: 'projecte:philosophers_stone',
        I: 'mysticalagradditions:insanium_ingot_block'
    })

    e.remove({output: 'projecte:philosophers_stone'})
    e.recipes.create.mechanical_crafting('projecte:philosophers_stone',[
        ' SSS ',
        'SAVUS',
        'SRXRS',
        'SUVAS',
        ' SSS '
    ],{
        S: 'mysticalagriculture:supremium_ingot_block',
        R: 'mysticalagradditions:insanium_essence',
        A: '#forge:storage_blocks/unobtainium_allthemodium_alloy',
        V: '#forge:storage_blocks/vibranium_allthemodium_alloy',
        X: 'kubejs:atm_star',
        U: '#forge:storage_blocks/unobtainium_vibranium_alloy'
    })

    e.remove({id: 'projecte:dark_matter'})
    e.custom({
        type: 'botania:runic_altar',
        output: {
            item: 'projecte:dark_matter'
        },
        mana: 1000000,
        ingredients: [
            {
                item: 'projecte:aeternalis_fuel'
            },
            {
                item: 'projecte:aeternalis_fuel'
            }, 
            {
                item: 'projecte:aeternalis_fuel'
            },
            {
                item: 'projecte:aeternalis_fuel'
            },
            {
                item: 'projecte:aeternalis_fuel'
            },
            {
                item: 'projecte:aeternalis_fuel'
            }, {
                item: 'projecte:aeternalis_fuel'
            },
            {
                item: 'projecte:aeternalis_fuel'
            },
            {
                tag: 'forge:storage_blocks/allthemodium'
            }
        ]
    });

    e.remove({id: 'projecte:red_matter'})
    e.remove({id: 'projecte:red_matter_alt'})
    e.custom({type: 'astralsorcery:altar', altar_type: 3, duration: 800, starlight: 6200, pattern: [
        '  U  ',
        ' AAA ',
        'UA AU',
        ' AAA ',
        '  U  '
    ], key: {
        U : {
            tag: 'forge:storage_blocks/unobtainium'
        },
        A : {
            item: 'projecte:aeternalis_fuel'
        }
    },
output: [
    {
        item: 'projecte:red_matter'
    }
],
focus_constellation: 'astralsorcery:horologium',
relay_inputs: [
    {
        item: 'projecte:dark_matter'
    },
    {
        item: 'projecte:dark_matter'
    },
    {
        item: 'projecte:dark_matter'
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

e.remove({output: 'projecte:transmutation_table'})
e.custom({type:'bloodmagic:alchemytable', input:[
    {
        item: 'projecte:philosophers_stone',
    },
    {
        item: 'projecte:red_matter_block'
    },
    {
        item: 'projecte:red_matter_block'
    },
    {
        item: 'projecte:dark_matter_block'
    },
    {
        item: 'projecte:dark_matter_block'
    },
    {
        tag: 'forge:storage_blocks/unobtainium_allthemodium_alloy'
    },
    {
        tag: 'forge:storage_blocks/unobtainium_vibranium_alloy'
    },

], output:{
    item: 'projecte:transmutation_table'
},
syphon: 1000000, ticks:12000, upgradeLevel:4 })

e.replaceInput({id:'projecte:low_covalence_dust'}, 'minecraft:charcoal', 'projecte:aeternalis_fuel')
e.remove({output: 'projecte:medium_covalence_dust'})
e.shapeless('40x projecte:medium_covalence_dust', ['mythicbotany:alfsteel_ingot', 'projecte:dark_matter'])
e.remove({output: 'projecte:high_covalence_dust'})
e.shapeless('40x projecte:high_covalence_dust', ['mysticalagradditions:insanium_gemstone', 'projecte:red_matter'])
e.replaceInput({id:'projecte:condenser_mk1'}, '#forge:obsidian', 'projecte:dark_matter_block')

e.remove({output: 'projecte:dark_matter_block'})
e.remove({output: 'projecte:red_matter_block'})
e.shapeless('projecte:dark_matter_block', ['projecte:dark_matter', 'projecte:dark_matter', 'projecte:dark_matter', 'projecte:dark_matter', 'projecte:dark_matter','projecte:dark_matter' ,'projecte:dark_matter' ,'projecte:dark_matter','projecte:dark_matter'])
e.shapeless('projecte:red_matter_block', ['projecte:red_matter', 'projecte:red_matter', 'projecte:red_matter', 'projecte:red_matter', 'projecte:red_matter','projecte:red_matter' ,'projecte:red_matter' ,'projecte:red_matter','projecte:red_matter'])
e.remove({id:'projecte:conversions/dark_matter_block_deconstruct'})
e.remove({id:'projecte:conversions/red_matter_block_deconstruct'})
e.shapeless('9x projecte:dark_matter', ['projecte:dark_matter_block'])
e.shapeless('9x projecte:red_matter', ['projecte:red_matter_block'])
e.replaceInput({id: 'watch_of_flowing_time'}, 'minecraft:clock', 'itab:timeinabottle')

})