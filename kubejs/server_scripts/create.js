onEvent('recipes', e => {
  e.recipes.createSplashing([
    '10x alltheores:platinum_nugget',
    Item.of('alltheores:platinum_nugget', 5).withChance(0.5)
  ], 'create:crushed_platinum_ore')
  e.recipes.createSplashing([
    '10x alltheores:zinc_nugget',
    Item.of('alltheores:zinc_nugget', 5).withChance(0.5)
  ], 'create:crushed_zinc_ore')
})