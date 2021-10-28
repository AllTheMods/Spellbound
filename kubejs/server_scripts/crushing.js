onEvent('recipes', e => {
  function multiCrush(name, input, output, resultAmount) {
    e.custom({
      type: 'occultism:crushing',
      ingredient: {
        item: input
      },
      result: {
        item: output,
        count: resultAmount
      }
    }).id(`allthemagic:occultism_crushing/${name}`);

    e.recipes.createCrushing(Item.of(output, resultAmount), input).id(`allthemagic:create_crushing/${name}`)
  }

  multiCrush('netherite_scrap', 'minecraft:ancient_debris', 'minecraft:netherite_scrap', 2)
  multiCrush('dark_gem', 'evilcraft:dark_ore', 'evilcraft:dark_gem', 5)
  multiCrush('crushed_dark_gem', 'evilcraft:dark_gem', 'evilcraft:dark_gem_crushed', 1)
})