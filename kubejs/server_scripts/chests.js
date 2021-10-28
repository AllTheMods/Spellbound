onEvent('recipes', e => {

    function fixChest(name, plank) {
        e.remove({output: `${name}`})
        e.shapeless(`${name}`, ['#forge:chests/wooden', `${plank}`])

    }

    //QUARK
    fixChest('quark:oak_chest', 'minecraft:oak_planks')
    fixChest('quark:spruce_chest', 'minecraft:spruce_planks')
    fixChest('quark:birch_chest', 'minecraft:birch_planks')
    fixChest('quark:jungle_chest', 'minecraft:jungle_planks')
    fixChest('quark:acacia_chest', 'minecraft:acacia_planks')
    fixChest('quark:dark_oak_chest', 'minecraft:dark_oak_planks')
    fixChest('quark:crimson_chest', 'minecraft:crimson_planks')
    fixChest('quark:warped_chest', 'minecraft:warped_planks')

    //ENDERGETIC & BETTER END
    fixChest('endergetic:poise_chest', 'endergetic:poise_planks')
    fixChest('betterendforge:mossy_glowshroom_chest', 'betterendforge:mossy_glowshroom_planks')
    fixChest('betterendforge:lacugrove_chest', 'betterendforge:lacugrove_planks')
    fixChest('betterendforge:end_lotus_chest', 'betterendforge:end_lotus_planks')
    fixChest('betterendforge:pythadendron_chest', 'betterendforge:pythadendron_planks')
    fixChest('betterendforge:dragon_tree_chest', 'betterendforge:dragon_tree_planks')
    fixChest('betterendforge:tenanea_chest', 'betterendforge:tenanea_planks')
    fixChest('betterendforge:helix_tree_chest', 'betterendforge:helix_tree_planks')
    fixChest('betterendforge:umbrella_tree_chest', 'betterendforge:umbrella_tree_planks')
    fixChest('betterendforge:jellyshroom_chest', 'betterendforge:jellyshroom_planks')
    fixChest('betterendforge:lucernia_chest', 'betterendforge:lucernia_planks')

    //BLUE SKIES AND UPGRADE AQUATIC
    fixChest('blue_skies:bluebright_chest', 'blue_skies:bluebright_planks')
    fixChest('blue_skies:starlit_chest', 'blue_skies:starlit_planks')
    fixChest('blue_skies:frostbright_chest', 'blue_skies:frostbright_planks')
    fixChest('blue_skies:lunar_chest', 'blue_skies:lunar_planks')
    fixChest('blue_skies:dusk_chest', 'blue_skies:dusk_planks')
    fixChest('blue_skies:maple_chest', 'blue_skies:maple_planks')
    fixChest('blue_skies:cherry_chest', 'blue_skies:cherry_planks')
    fixChest('upgrade_aquatic:driftwood_chest', 'upgrade_aquatic:driftwood_planks')
    fixChest('upgrade_aquatic:river_chest', 'upgrade_aquatic:river_planks') 

    e.shaped('minecraft:chest', [
        'PPP',
        'P P',
        'PPP'
    ],{
        P : '#minecraft:planks'
        }
    )

    e.shaped('4x minecraft:chest', [
        'LLL',
        'L L',
        'LLL'
    ],{
        L : '#minecraft:logs'
        }
    )

})