onEvent('recipes', e => {
  const atm_star = 'kubejs:atm_star'
  
  //Botania
  e.shaped('botania:creative_pool', [
    'RMR',
    'MSM',
    'RMR'
  ], {
    S: atm_star,
    M: 'botania:mana_pool',
    R: '#botania:runes'
  })
  e.shapeless(item.of('botania:mana_tablet', {
    mana: 500000,
    creative: 1
  }), ['botania:creative_pool'])

  //Ars Nouveau
  e.shaped(Item.of('ars_nouveau:creative_spell_book', {
    mode: 0,
    spells: ",intangible,ignite,flare,strength,craft,cold_snap,rune,snare,slowfall,freeze,split,crush,smelt,summon_steed,accelerate,summon_vex,lightning,grow,dampen,touch,invisibility,extract,delay,light,duration_down,exchange,place_block,summon_wolves,shield,conjure_water,cut,harm,interact,blink,amplify,phantom_block,fell,extend_time,heal,leap,redstone_signal,pierce,harvest,fortune,break,pickup,launch,dispel,haste,ender_inventory,pull,explosion,fangs,aoe,gravity,self,aquatic,projectile,wither,gust"
  }), [
    'BSG',
    'GGE',
    'EER'
  ], {
    B: 'ars_nouveau:archmage_spell_book',
    S: atm_star,
    G: 'mysticalagradditions:insanium_gemstone',
    E: 'minecraft:ender_eye',
    R: 'tombstone:soul_receptacle'
  })
  e.shaped('ars_nouveau:creative_mana_jar', [
    'GMG',
    'GSG',
    'GGG'
  ], {
    G: '#forge:glass',
    S: atm_star,
    M: 'ars_nouveau:mana_gem_block'
  })
  
  //Create
  e.recipes.create.mechanical_crafting('create:creative_motor', [
    'CLC',
    'HSH',
    'LGL'
  ], {
    C: 'create:cogwheel',
    L: 'create:large_cogwheel',
    H: 'create:shaft',
    S: atm_star,
    G: 'create:gearbox'
  })
 
  e.recipes.create.mixing('create:creative_blaze_cake', [
    'mahoutsukai:faecake',
    'kubejs:atm_star',
    'mana-and-artifice:mana_coffee'
  ]).superheated().processingTime(6000).id('kubejs:create/creative_blaze_cake')

  //Storage Drawers
  e.shaped('16x storagedrawers:creative_storage_upgrade', [
    'EEE',
    'ASA',
    'EEE'
  ], {
    E: 'storagedrawers:emerald_storage_upgrade',
    S: atm_star,
    A: 'mysticalagriculture:supremium_ingot_block'
  })
  
  //ice and fire
  e.shaped('2x iceandfire:creative_dragon_meal', ['DDD', 'DSD', 'DDD'], {
    D: 'iceandfire:dragon_meal',
    S: 'kubejs:atm_star'
  }).id('kubejs:shaped/iceandfire/creative_dragon_meal')

  let dragonColors = ['red', 'green', 'bronze', 'gray', 'blue', 'white', 'sapphire', 'silver', 'electric', 'amythest', 'copper', 'black']
  dragonColors.forEach(color => {
    e.shaped(`iceandfire:dragonegg_${color}`, ['DED', 'ESE', 'DED'], {
      S: 'kubejs:atm_star',
      E: 'minecraft:dragon_egg',
      D: `iceandfire:dragonscales_${color}`
    }).id(`kubejs:shaped/iceandfire/dragonegg_${color}`)
  })
})