onEvent('recipes', e => {
  //#region functions
  let multiCrush = (input, output, outputAmount, chance, chanceAmount) => {
    e.custom({
      type: 'occultism:crushing',
      ingredient: {
        item: input
      },
      result: {
        item: output,
        count: outputAmount
      }
    }).id(`allthemagic:occultism_crushing/${output.replace(':', '/')}`)
    if (chance == null) {
      e.recipes.createCrushing(Item.of(output, outputAmount), input).id(`allthemagic:create_crushing/${output.replace(':', '/')}`)
    } else {
      e.recipes.createCrushing([Item.of(output, outputAmount), Item.of(output, chanceAmount).withChance(chance)], input).id(`allthemagic:create_crushing/${output.replace(':', '/')}`)
    }
  }
  let occultCrushing = (input, output, outputAmount) => {
    e.custom({
      type: 'occultism:crushing',
      ingredient: {
        item: input
      },
      result: {
        item: output,
        count: outputAmount
      }
    }).id(`allthemagic:occultism_crushing/${output.replace(':', '/')}`)
  }
  let oreCrush = (input, output, outputAmount, chance, chanceAmount) => {
    e.recipes.createCrushing([Item.of(output, outputAmount), Item.of(output, chanceAmount).withChance(chance), Item.of('minecraft:cobblestone').withChance(.12)], input).id(`allthemagic:create_ore_crushing/${output.replace(':', '/')}`)
  }
  //#endregion
  //Multi crushing - multiCrush(input, output, outputAmount, chance, chanceAmount)
  multiCrush('minecraft:ancient_debris', 'minecraft:netherite_scrap', 2)
  multiCrush('evilcraft:dark_ore', 'evilcraft:dark_gem', 5)
  multiCrush('evilcraft:dark_gem', 'evilcraft:dark_gem_crushed', 1, .50, 1)
  //occultism Crushing - occultCrushing(input, output, outputAmount)
  occultCrushing('allthemodium:allthemodium_ore', 'allthemodium:crushed_allthemodium_ore', 2)
  occultCrushing('allthemodium:vibranium_ore', 'allthemodium:crushed_vibranium_ore', 2)
  occultCrushing('allthemodium:unobtainium_ore', 'allthemodium:crushed_unobtainium_ore', 2)

  //Create Ore Crushing - oreCrush(input, output, outputAmount, chance, chanceAmount)

})