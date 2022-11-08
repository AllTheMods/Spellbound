//priority: 997
onEvent('recipes', e => {
  function unifyMetal(name, ingotItem, dustItem, blockItem, nuggetItem) {
    e.replaceOutput(`#forge:ingots/${name}`, ingotItem)
    e.replaceOutput(`#forge:dusts/${name}`, dustItem)
    e.replaceOutput(`#forge:nuggets/${name}`, nuggetItem)
    e.replaceOutput(`#forge:storage_blocks/${name}`, blockItem)

    e.remove({
      input: [`#forge:ores/${name}`, `#forge:dusts/${name}`],
      output: `#forge:ingots/${name}`,
      type: 'minecraft:smelting'
    })
    e.remove({
      input: [`#forge:ores/${name}`, `#forge:dusts/${name}`],
      output: `#forge:ingots/${name}`,
      type: 'minecraft:blasting'
    })

    e.recipes.minecraft.smelting(ingotItem, `#forge:dusts/${name}`).xp(0.5)
    e.recipes.minecraft.blasting(ingotItem, `#forge:dusts/${name}`).xp(0.5)

    if (!ingredient.of(`#forge:ores/${name}`).stacks.empty) {
      e.recipes.minecraft.smelting(ingotItem, `#forge:ores/${name}`).xp(1)
      e.recipes.minecraft.blasting(ingotItem, `#forge:ores/${name}`).xp(1)

      e.remove({ id: `bloodmagic:alchemytable/sand_${name}` })
      e.remove({ id: `occultism:crushing/${name}_dust` })
      e.custom({
        type: 'occultism:crushing',
        ingredient: { tag: `forge:ores/${name}` },
        result: { item: dustItem, count: 2 }
      })

      e.replaceInput(nuggetItem, (`#forge:nuggets/${name}`))
      e.replaceInput(dustItem, (`#forge:dusts/${name}`))
      e.replaceInput(ingotItem, (`#forge:ingots/${name}`))
      e.replaceInput(blockItem, (`#forge:storage_blocks/${name}`))
    }
  }

  //Vanilla MC
  unifyMetal('gold', 'minecraft:gold_ingot', 'alltheores:gold_dust', 'minecraft:gold_block', 'minecraft:gold_nugget')
  unifyMetal('iron', 'minecraft:iron_ingot', 'alltheores:iron_dust', 'minecraft:iron_block', 'minecraft:iron_nugget')

  //Multiple Mods
  unifyMetal('copper', 'alltheores:copper_ingot', 'alltheores:copper_dust', 'alltheores:copper_block', 'alltheores:copper_nugget')
  unifyMetal('lead', 'alltheores:lead_ingot', 'alltheores:lead_dust', 'alltheores:lead_block', 'alltheores:lead_nugget')
  unifyMetal('platinum', 'alltheores:platinum_ingot', 'alltheores:platinum_dust', 'alltheores:platinum_block', 'alltheores:platinum_nugget')
  unifyMetal('silver', 'alltheores:silver_ingot', 'alltheores:silver_dust', 'alltheores:silver_block', 'alltheores:silver_nugget')
  unifyMetal('tin', 'alltheores:tin_ingot', 'alltheores:tin_dust', 'alltheores:tin_block', 'alltheores:tin_nugget')
  unifyMetal('zinc', 'alltheores:zinc_ingot', 'alltheores:zinc_dust', 'alltheores:zinc_block', 'alltheores:zinc_nugget')

  e.replaceInput('minecraft:stick', '#forge:rods/wooden')
  
  function createHoneyMixing(entries) {
    entries.forEach(([output, amount, honey, inputs, id]) => {
      let honeyMixingRecipe = { type: 'create:mixing', results: [{ item: output, amount: amount }] }
      let honeyMixingInputs = [{ fluidTag: 'forge:honey', amount: honey }]

      inputs.forEach(([input, type]) => honeyMixingInputs.push(type == 0 ? { item: input } : { tag: input }))
      honeyMixingRecipe = Object.assign({ ingredients: honeyMixingInputs }, honeyMixingRecipe)
      e.custom(honeyMixingRecipe).id(
        id
          ? `kubejs:honey_mixing/${output.substring(output.indexOf(':') + 1)}/${id}`
          : `kubejs:honey_mixing/${output.substring(output.indexOf(':') + 1)}`
      )
    })
  }

  createHoneyMixing([
    [
      'minecraft:bee_nest', 1, 1000, [
        ['resourcefulbees:resourceful_honeycomb_block', 1],
        ['resourcefulbees:resourceful_honeycomb', 1],
        ['resourcefulbees:resourceful_honeycomb_block', 1]
      ]
    ],
    [
      'minecraft:cookie', 16, 50, [
        ['minecraft:wheat', 0],
        ['minecraft:cocoa_beans', 0],
        ['minecraft:wheat', 0]
      ]
    ],
    [
      'minecraft:glistering_melon_slice', 2, 100, [
        ['minecraft:melon_slice', 0],
        ['forge:nuggets/gold', 1],
        ['minecraft:melon_slice', 0]
      ]
    ],
    [
      'minecraft:beehive', 3, 100, [
        ['forge:chests', 1],
        ['resourcefulbees:resourceful_honeycomb', 1],
        ['forge:rods/wooden', 1]
      ]
    ],
    [
      'minecraft:honeycomb_block', 1, 100, [
        ['resourcefulbees:resourceful_honeycomb', 1],
        ['resourcefulbees:resourceful_honeycomb', 1],
        ['resourcefulbees:resourceful_honeycomb', 1]
      ]
    ],
    [
      'minecraft:honey_block', 1, 1000, [
        ['forge:rods/wooden', 1],
        ['forge:rods/wooden', 1],
        ['forge:rods/wooden', 1]
      ],
      1
    ],
    [
      'minecraft:pumpkin_pie', 1, 100, [
        ['minecraft:egg', 0],
        ['minecraft:pumpkin', 0],
        ['minecraft:egg', 0]
      ]
    ],
    [
      'minecraft:cake', 1, 500, [
        ['minecraft:egg', 0],
        ['minecraft:wheat', 0],
        ['minecraft:egg', 0]
      ]
    ],
    [
      'minecraft:golden_carrot', 2, 100, [
        ['minecraft:carrot', 0],
        ['forge:nuggets/gold', 1],
        ['minecraft:carrot', 0]
      ]
    ],
    [
      'minecraft:honey_bottle', 3, 750, [
        ['minecraft:glass_bottle', 0],
        ['minecraft:glass_bottle', 0],
        ['minecraft:glass_bottle', 0]
      ]
    ],
    ['minecraft:honey_block', 1, 1000, [['forge:rods/wooden', 1]], 2]
  ])
})
