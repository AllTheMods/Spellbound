onEvent('item.tags', e => {
	e.add('forge:marble', '#chisel:marble')
	e.add('chisel:marble', ['astralsorcery:marble_raw', 'quark:marble', 'astralsorcery:marble_arch', 'astralsorcery:marble_bricks', 'astralsorcery:marble_chiseled', 'astralsorcery:marble_engraved', 'astralsorcery:marble_pillar', 'astralsorcery:marble_runed'])
	e.add('chisel:limestone', ['create:limestone', 'create:weathered_limestone', 'quark:limestone'])
    e.add('forge:buckets/water', 'forbidden_arcanus:edelwood_water_bucket')
    e.add('forge:buckets/water', 'evilcraft:bucket_eternal_water')
    e.add('forge:witherbone', `iceandfire:witherbone`)
    e.add('forge:ores/vinteum', 'mana-and-artifice:vinteum_ore')
    e.add('allthemagic:mystic_gold', ['eidolon:arcane_gold_ingot', 'forbidden_arcanus:arcane_gold_ingot', 'malum:hallowed_gold_ingot', 'naturesaura:tainted_gold'])
    e.add('forge:tallow', 'eidolon:tallow')
    e.add('allthemagic:dragon_blood', ['iceandfire:fire_dragon_blood', 'iceandfire:ice_dragon_blood', 'iceandfire:lightning_dragon_blood'])
	e.add('forge:dusts/obsidian', 'create:powdered_obsidian')

    const colors = ['red', 'green', 'bronze', 'gray', 'blue', 'white', 'sapphire', 'silver', 'electric', 'amythest', 'copper', 'black']
    colors.forEach(color => {
        e.add('allthemagic:dragon_helmet', 'iceandfire:armor_' + color + '_helmet')
        e.add('allthemagic:dragon_chestplate', 'iceandfire:armor_' + color + '_chestplate')
        e.add('allthemagic:dragon_leggings', 'iceandfire:armor_' + color + '_leggings')
        e.add('allthemagic:dragon_boots', 'iceandfire:armor_' + color + '_boots')
    })
})