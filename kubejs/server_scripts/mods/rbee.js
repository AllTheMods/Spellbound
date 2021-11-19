onEvent('recipes', e => {
  let craftingShapes = [
    //vertical
    ['  C', '  C', '  C'],
    [' C ', ' C ', ' C '],
    ['C  ', 'C  ', 'C  '],
    //horizontal 
    ['CCC', '   ', '   '],
    ['   ', 'CCC', '   '],
    ['   ', '   ', 'CCC'],
    //diagonal
    ['  C', ' C ', 'C  '],
    ['C  ', ' C ', '  C'],
    //misc
    ['  C', ' C ', ' C '],
    [' C ', 'C  ', 'C  '],
    ['  C', 'CC ', '   '],
    ['   ', '  C', 'CC '],
    ['  C', '  C', ' C '],
    [' C ', ' C ', 'C  '],
    ['C C', ' C ', '   '],
    ['   ', 'C C', ' C '],
    [' C ', ' C ', '  C'],
    ['C  ', 'C  ', ' C '],
    ['   ', ' C ', 'C C'],
    [' C ', 'C C', '   '],
    ['  C', ' C ', '  C'],
    [' C ', 'C  ', ' C '],
    ['   ', 'CC ', '  C'],
    ['CC ', '  C', '   ']
  ] // 25 now
  let dyes = []
  let botaniaFlowers = []
  let honey = ['resourcefulbees:honey', 'create:honey']
  let customHoney = ['resourcefulbees:rainbow_honey', 'resourcefulbees:catnip_honey']

  function shapedRecipe(results, craftingItem, itemCount) {
    let maxLength = Math.min(craftingShapes.length, results.length)
    for (let i = 0; i < maxLength; i++) {
      e.recipes.cucumber.shaped_no_mirror({
        pattern: craftingShapes[i],
        key: { C: { item: craftingItem } },
        result: { item: results[i], count: itemCount }
      })
    }
  }

  colors.forEach(color => {
    dyes.push(`minecraft:${color}_dye`)
    botaniaFlowers.push(`botania:${color}_mystical_flower`)
	
	e.remove({id: 'resourcefulbees:jar'});
	e.shaped('16x resourcefulbees:bee_jar', [' G ', 'G G', 'GGG'], { G: '#forge:glass' }).id(`kubejs:resourcefulbees/bee_jar`)
  })
  
  shapedRecipe(dyes, `resourcefulbees:rainbow_honey_block`, 32)
  shapedRecipe(botaniaFlowers, `resourcefulbees:mystical_honeycomb`, 2)
  shapedRecipe(botaniaFlowers, `resourcefulbees:mystical_honeycomb_block`, 18)
  shapedRecipe([`minecraft:wheat`, `minecraft:beetroot`, `minecraft:carrot`, `minecraft:potato`, `minecraft:melon_slice`, `minecraft:pumpkin`, `minecraft:bamboo`, `minecraft:sweet_berries`, `minecraft:brown_mushroom`, `minecraft:red_mushroom`], `resourcefulbees:croppy_honeycomb`, 3)
  shapedRecipe([`minecraft:wheat`, `minecraft:beetroot`, `minecraft:carrot`, `minecraft:potato`, `minecraft:melon_slice`, `minecraft:pumpkin`, `minecraft:bamboo`, `minecraft:sweet_berries`, `minecraft:brown_mushroom`, `minecraft:red_mushroom`], `resourcefulbees:croppy_honeycomb_block`, 27)
  shapedRecipe([`minecraft:porkchop`, `minecraft:beef`, `minecraft:cod`, `minecraft:salmon`, `minecraft:chicken`, `minecraft:rabbit`, `minecraft:mutton`], `resourcefulbees:kobee_beef_honeycomb`, 3)
  shapedRecipe([`minecraft:porkchop`, `minecraft:beef`, `minecraft:cod`, `minecraft:salmon`, `minecraft:chicken`, `minecraft:rabbit`, `minecraft:mutton`], `resourcefulbees:kobee_beef_honeycomb_block`, 27)
  shapedRecipe([`minecraft:andesite`, `minecraft:diorite`, `minecraft:granite`, `minecraft:basalt`, `create:gabbro`, `create:dolomite`, `create:weathered_limestone`, `create:limestone`, `create:scoria`, `create:dark_scoria`, `quark:brimstone`, `quark:slate`, `quark:jasper`, `quark:limestone`, `quark:basalt`, `astralsorcery:marble_raw`], `resourcefulbees:stan_honeycomb`, 2)
  shapedRecipe([`minecraft:andesite`, `minecraft:diorite`, `minecraft:granite`, `minecraft:basalt`, `create:gabbro`, `create:dolomite`, `create:weathered_limestone`, `create:limestone`, `create:scoria`, `create:dark_scoria`, `quark:brimstone`, `quark:slate`, `quark:jasper`, `quark:limestone`, `quark:basalt`, `astralsorcery:marble_raw`], `resourcefulbees:stan_honeycomb_block`, 18)
  shapedRecipe([`minecraft:oak_log`, `minecraft:spruce_log`, `minecraft:birch_log`, `minecraft:jungle_log`, `minecraft:acacia_log`, `minecraft:dark_oak_log`, `minecraft:crimson_stem`, `minecraft:warped_stem`], `resourcefulbees:lumber_honeycomb`, 3)
  shapedRecipe([`minecraft:oak_log`, `minecraft:spruce_log`, `minecraft:birch_log`, `minecraft:jungle_log`, `minecraft:acacia_log`, `minecraft:dark_oak_log`, `minecraft:crimson_stem`, `minecraft:warped_stem`], `resourcefulbees:lumber_honeycomb_block`, 27)
  shapedRecipe([`minecraft:white_dye`, `minecraft:orange_dye`, `minecraft:magenta_dye`, `minecraft:light_blue_dye`, `minecraft:yellow_dye`, `minecraft:lime_dye`, `minecraft:pink_dye`, `minecraft:gray_dye`, `minecraft:light_gray_dye`, `minecraft:cyan_dye`, `minecraft:purple_dye`, `minecraft:blue_dye`, `minecraft:brown_dye`, `minecraft:green_dye`, `minecraft:red_dye`, `minecraft:black_dye`], `resourcefulbees:rgbee_honeycomb`, 3)
  shapedRecipe([`minecraft:white_dye`, `minecraft:orange_dye`, `minecraft:magenta_dye`, `minecraft:light_blue_dye`, `minecraft:yellow_dye`, `minecraft:lime_dye`, `minecraft:pink_dye`, `minecraft:gray_dye`, `minecraft:light_gray_dye`, `minecraft:cyan_dye`, `minecraft:purple_dye`, `minecraft:blue_dye`, `minecraft:brown_dye`, `minecraft:green_dye`, `minecraft:red_dye`, `minecraft:black_dye`], `resourcefulbees:rgbee_honeycomb_block`, 27)
})