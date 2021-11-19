onEvent('recipes', e => {
  function mainfusion(output, middle, item1, item2, item3, item4, item5, item6, item7, item8) {
    e.recipes.mysticalagriculture.infusion({
      input: { item: middle },
      ingredients: [
        { item: item1 },
        { item: item2 },
        { item: item3 },
        { item: item4 },
        { item: item5 },
        { item: item6 },
        { item: item7 },
        { item: item8 }
      ],
      result: { item: output }
    })
  }
  function essenceCircle(result, count, name) {
    e.shaped(item.of(result, count), ['aaa', 'a a', 'aaa'], { a: `mysticalagriculture:${name}_essence` }).id(`kubejs:${name}_nugget`)
  }

  mainfusion('kubejs:magical_soil', 'botania:overgrowth_seed', 'botania:gaia_ingot', 'mysticalagradditions:insanium_block', 'botania:gaia_ingot', 'mysticalagradditions:insanium_block', 'botania:gaia_ingot', 'mysticalagradditions:insanium_block', 'botania:gaia_ingot', 'mysticalagradditions:insanium_block')
    
	essenceCircle('allthemodium:allthemodium_nugget', 1, 'allthemodium')
	essenceCircle('allthemodium:vibranium_nugget', 1, 'vibranium')
	essenceCircle('allthemodium:unobtainium_nugget', 1, 'unobtainium')
	
e.remove({output: 'mysticalagriculture:infusion_crystal'})
e.custom({type: 'bloodmagic:array',
texture:'bloodmagic:textures/models/alchemyarrays/growthsigil.png',
baseinput:{
    item: 'bloodmagic:reagentgrowth'
},
addedinput: {
    item: 'elementalcraft:earthcrystal'
},
output:{
    item:'mysticalagriculture:infusion_crystal'
}})

e.remove({output: 'mysticalagriculture:master_infusion_crystal'})
e.custom({type: 'bloodmagic:array',
texture:'bloodmagic:textures/models/alchemyarrays/bindingarray.png',
baseinput:{
    item: 'bloodmagic:reagentbinding'
},
addedinput: {
    item: 'mysticalagradditions:insanium_gemstone'
},
output:{
    item:'mysticalagriculture:master_infusion_crystal'
}})

})