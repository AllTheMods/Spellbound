onEvent('recipes', e => {
  e.replaceInput('minecraft:glass_pane', '#forge:glass_panes')

  e.forEachRecipe({ type: 'minecraft:crafting_shaped', output: '#minecraft:slabs' }, r => {
    e.shaped(r.inputItems[0], ['S', 'S'], { S: Item.of(r.outputItems[0].id) })
  })
  e.forEachRecipe({ type: 'minecraft:stonecutting', output: '#minecraft:stairs' }, r => {
    e.stonecutting(r.inputItems[0], Item.of(r.outputItems[0].id))
  })
  e.forEachRecipe({ type: 'minecraft:crafting_shapeless', output: '#minecraft:buttons' }, r => {
    e.remove({ type: 'minecraft:crafting_shapeless', output: r.outputItems[0].id })
    e.shapeless(`8x ${r.outputItems[0].id}`, r.inputItems[0])
  })

  e.smelting('minecraft:glass', '#forge:sand').xp(.1).id('kubejs:minecraft/smelting/sand')
  e.smelting('minecraft:leather', 'forbidden_arcanus:rotten_leather').xp(.5).id('kubejs:minecraft/smelting/leather')
  e.smoking('minecraft:leather', 'forbidden_arcanus:rotten_leather').xp(.5).id('kubejs:minecraft/smoking/leather')

  e.shapeless('4x minecraft:clay_ball', 'minecraft:clay').id(`kubejs:minecraft/clay`)
  e.shapeless('4x minecraft:quartz', 'minecraft:quartz_block').id(`kubejs:minecraft/quartz`)
  e.shapeless('minecraft:chest', '#forge:chests/wooden').id(`kubejs:minecraft/quartz`)
  e.shapeless('minecraft:crafting_table', /byg:.+_crafting_table/).id(`kubejs:byg_crafter_convert`)
  e.shapeless('9x minecraft:honeycomb', 'minecraft:honeycomb_block').id('kubejs:minecraft/honeycomb')

  e.shaped('4x minecraft:ladder', ['S S', 'SPS', 'S S'], {
    S: '#forge:rods',
    P: '#minecraft:planks'
  }).id(`kubejs:minecraft/ladder`)
  e.shaped('minecraft:hopper', ['ILI', 'ILI', ' I '], {
    L: '#minecraft:logs',
    I: '#forge:ingots/iron'
  }).id(`kubejs:minecraft/hopper`)
  e.shaped('16x minecraft:stick', ['L', 'L'], { 'L': '#minecraft:logs' }).id(`kubejs:minecraft/sticks`)
  e.shaped('minecraft:white_wool', ['SS', 'SS'], { S: '#forge:string' })
  e.shaped('3x minecraft:glass', ['GGG', 'G G', 'GGG',], { G: 'minecraft:glass_pane' })

  colors.forEach(color => {
    e.remove({ output: `minecraft:${color}_bed` })
    e.remove({ output: `minecraft:${color}_wool` })
    e.remove({ output: `minecraft:${color}_carpet` })

    e.replaceInput(`minecraft:${color}_dye`, `#forge:dyes/${color}`)
    e.shaped(`minecraft:${color}_bed`, ['WWW', 'PPP'], {
      P: '#minecraft:planks',
      W: `minecraft:${color}_wool`
    })
    e.shaped(`8x minecraft:${color}_wool`, ['WWW', 'WCW', 'WWW'], {
      C: `#forge:dyes/${color}`,
      W: '#minecraft:wool'
    })
    e.shaped(item.of(`minecraft:${color}_carpet`, 8), ['WWW', 'WCW', 'WWW'], {
      C: `#forge:dyes/${color}`,
      W: '#minecraft:carpets'
    })
    e.shaped(item.of(`minecraft:${color}_carpet`, 3), ['WW'], { W: `minecraft:${color}_wool` })
    e.shaped(item.of(`minecraft:${color}_stained_glass`, 3), ['GGG', 'G G', 'GGG',], { G: `minecraft:${color}_stained_glass_pane` })
    e.shaped(`2x minecraft:${color}_wool`, ['C', 'C', 'C',], { C: `minecraft:${color}_carpet` })
    e.shapeless(`minecraft:${color}_bed`, ['#minecraft:beds', `#forge:dyes/${color}`])
    e.shapeless(`minecraft:${color}_carpet`, ['#minecraft:carpets', `#forge:dyes/${color}`])

    /*if (color != 'gray') {
      e.recipes.mekanism.enriching(`2x minecraft:${color}_dye`, `#byg:${color}_dye`)
      e.recipes.pedestals.pedestal_crushing({
        ingredient: { tag: `byg:${color}_dye` },
        result: { item: `minecraft:${color}_dye`, count: 2 }
      })
    }*/
  })

  modifyShaped(e, 'minecraft:honeycomb_block', 1, ['CCC', 'CCC', 'CCC'], { C: 'minecraft:honeycomb' })
  modifyShaped(e, 'minecraft:sticky_piston', 1, ['B', 'P'], {
    B: '#forge:slimeballs',
    P: 'minecraft:piston'
  })
  modifyShaped(e, 'minecraft:daylight_detector', 1, ['GGG', 'QQQ', 'SSS'], {
    G: '#forge:glass',
    Q: '#forge:gems/quartz',
    S: '#minecraft:wooden_slabs'
  })
  modifyShaped(e, 'minecraft:beehive', 1, ['PPP', 'CCC', 'PPP'], {
    P: '#minecraft:planks',
    C: '#resourcefulbees:resourceful_honeycomb'
  })
})