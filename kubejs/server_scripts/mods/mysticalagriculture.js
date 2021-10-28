onEvent('recipes', e => {
    
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