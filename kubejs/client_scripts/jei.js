onEvent('jei.hide.items', e => {
    
    function hideAlltheOre(name) {
        e.hide(`alltheores:ore_${name}`)
        e.hide(`alltheores:${name}_ingot`)
        e.hide(`alltheores:${name}_nugget`)
        e.hide(`alltheores:${name}_dust`)
        e.hide(`alltheores:dirty_${name}_dust`)
        e.hide(`alltheores:${name}_shard`)
        e.hide(`alltheores:${name}_crystal`)
        e.hide(`alltheores:molten_${name}`)
    }
    e.hide('xreliquary:alkahestry_tome')
    e.hide('twilightforest:uncrafting_table')
    e.hide('extrabotany:elementrune')
    e.hide('extrabotany:sinrune')
    e.hide('extrabotany:friggaapple')
    e.hide('extrabotany:rewardbaglimitededition')
    e.hide('twilightdelight:iron_lotus')
    e.hide('twilightdelight:lily_chicken_block')
    e.hide('twilightdelight:lily_chicken')

    const upgrades = ['rfsawmill', 'rfsmelter', 'rffuelgen', 'rfexpgen', 'refimport', 'rfrelay', 'rfcrusher', 'rftank', 'rffield', 'voidenergy']
    upgrades.forEach(upgrade => {
        e.hide(`pedestals:coin/${upgrade}`)
    })

    e.remove('integrateddynamics:coal_generator')
    e.remove('integrateddynamics:energy_battery')
    e.remove('integrateddynamics:energy_battery_creative')
    e.remove('integratedtunnels:part_importer_energy')
    e.remove('integratedtunnels:part_interface_filter_energy')
    e.remove('integratedtunnels:part_exporter_world_energy')
    e.remove('integratedtunnels:part_interface_world_energy')
    e.remove('integratedtunnels:part_importer_world_energy')
    e.remove('integratedtunnels:part_importer_exporter_energy')
    e.remove('integrateddynamics:mechanical_squeezer')
    e.remove('integratedynamics:mechanical_drying_basin')

    hideAlltheOre('tin')
    hideAlltheOre('uranium')
    hideAlltheOre('platinum')
    hideAlltheOre('nickel')
    hideAlltheOre('osmium')
    hideAlltheOre('aluminum')
})

onEvent('jei.information', e => {
    e.add('kubejs:mundane_helmet', 'A mundane helmet, unable to wear. Its used as a crafting ingredient for AlltheModium Helmet')
    e.add('kubejs:mundane_chestplate', 'A mundane chestplate, unable to wear. Its used as a crafting ingredient for AlltheModium Chestplate')
    e.add('kubejs:mundane_leggings', 'Mundane leggings, unable to wear. Its used as a crafting ingredient for AlltheModium Leggings')
    e.add('kubejs:mundane_boots', 'Mundane boots, unable to wear. Its used as a crafting ingredient for AlltheModium Boots')
})
