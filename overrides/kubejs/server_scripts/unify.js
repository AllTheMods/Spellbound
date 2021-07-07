//priority: 997
onEvent('recipes', e => {

    function unifyMetal(name, ingotItem, dustItem, blockItem, nuggetItem, clumpItem, pureOre, crystalItem) {
        e.replaceOutput(`#forge:ingots/${name}`, ingotItem);
        e.replaceOutput(`#forge:dusts/${name}`, dustItem);
        e.replaceOutput(`#forge:nuggets/${name}`, nuggetItem);
        e.replaceOutput(`#forge:storage_blocks/${name}`, blockItem);
        e.remove({
            input: [`#forge:ores/${name}`, `#forge:dusts/${name}`],
            output: `#forge:ingots/${name}`,
            type: 'minecraft:smelting'
        });
        e.remove({
            input: [`#forge:ores/${name}`, `#forge:dusts/${name}`],
            output: `#forge:ingots/${name}`,
            type: 'minecraft:blasting'
        });
      
        e.recipes.minecraft.smelting(ingotItem, `#forge:dusts/${name}`).xp(0.5);
        e.recipes.minecraft.blasting(ingotItem, `#forge:dusts/${name}`).xp(0.5);
        e.recipes.pedestals.pedestal_crushing({
            ingredient: {
                tag: `forge:ingots/${name}`
            },
            result: {
                item: dustItem,
                count: 1
            }
        });
 

        if (!ingredient.of(`#forge:ores/${name}`).stacks.empty) {
            e.recipes.minecraft.smelting(ingotItem, `#forge:ores/${name}`).xp(1);
            e.recipes.minecraft.blasting(ingotItem, `#forge:ores/${name}`).xp(1);    
            e.remove({
                id: `pedestals:pedestal_crushing/dust${name}`
            });
            e.recipes.pedestals.pedestal_crushing({
                ingredient: {
                    tag: `forge:ores/${name}`
                },
                result: {
                    item: dustItem,
                    count: 2
                }
            });

                e.remove({
                    id: `occultism:crushing/${name}_dust`
                });
                e.custom({
                    type: 'occultism:crushing',
                    ingredient: {
                        tag: `forge:ores/${name}`
                    },
                    result: {
                        item: dustItem,
                        count: 2
                    }
                });
                
                e.custom({
                    type: 'occultism:crushing',
                    ingredient: {
                        tag: `forge:ingots/${name}`
                    },
                    result: {
                        item: dustItem
                    }
                });

            

            //preProcess for x8 processing=
            e.custom({
                type: 'botania:elven_trade',
                ingredients: [
                    Ingredient.of(clumpItem).toJson()
                ],
                output: [
                   Item.of(crystalItem).toJson()      
                ]
            })

            e.recipes.create.crushing(`2x ${clumpItem}`, pureOre)
        }

        e.replaceInput(nuggetItem, (`#forge:nuggets/${name}`));
        e.replaceInput(dustItem, (`#forge:dusts/${name}`));
        e.replaceInput(ingotItem, (`#forge:ingots/${name}`));
        e.replaceInput(blockItem, (`#forge:storage_blocks/${name}`));
     
        //MultiCrush
    multiCrush('2x ' + dustItem , crystalItem)
        
    }

    function unifyCraftMetal(name, ingotItem, dustItem, blockItem, nuggetItem) {
        e.replaceInput(nuggetItem, (`#forge:nuggets/${name}`));
        e.replaceInput(dustItem, (`#forge:dusts/${name}`));
        e.replaceInput(ingotItem, (`#forge:ingots/${name}`));
        e.replaceInput(blockItem, (`#forge:storage_blocks/${name}`));
        e.replaceOutput(`#forge:ingots/${name}`, ingotItem);
        e.replaceOutput(`#forge:dusts/${name}`, dustItem);
        e.replaceOutput(`#forge:nuggets/${name}`, nuggetItem);
        e.replaceOutput(`#forge:storage_blocks/${name}`, blockItem);
    }

    const multiCrush = (output, input) => {
        e.recipes.bloodmagic.alchemytable(output,[input]).syphon(400).ticks(200).upgradeLevel(3)
        
    }

    //Vanilla MC
    unifyMetal('gold', 'minecraft:gold_ingot', 'alltheores:gold_dust', 'minecraft:gold_block', 'minecraft:gold_nugget', 'kubejs:gold_clump', Item.of('elementalcraft:pure_ore', {elementalcraft:{ore:{id:"minecraft:gold_ore", Count:1}}}), 'kubejs:gold_crystal');
    unifyMetal('iron', 'minecraft:iron_ingot', 'alltheores:iron_dust', 'minecraft:iron_block', 'minecraft:iron_nugget', 'kubejs:iron_clump', Item.of('elementalcraft:pure_ore', {elementalcraft:{ore:{id:"minecraft:iron_ore", Count : 1}}}), 'kubejs:iron_crystal');

    //Multiple Mods

    unifyMetal('copper', 'alltheores:copper_ingot', 'alltheores:copper_dust', 'alltheores:copper_block', 'alltheores:copper_nugget', 'alltheores:copper_clump', Item.of('elementalcraft:pure_ore', {elementalcraft:{ore:{id:"alltheores:ore_copper", Count:1}}}), 'alltheores:copper_crystal');
    unifyMetal('lead', 'alltheores:lead_ingot', 'alltheores:lead_dust', 'alltheores:lead_block', 'alltheores:lead_nugget', 'alltheores:lead_clump', Item.of('elementalcraft:pure_ore', {elementalcraft:{ore:{id:"alltheores:ore_lead", Count:1}}}), 'alltheores:lead_crystal');
    unifyMetal('platinum', 'alltheores:platinum_ingot', 'alltheores:platinum_dust', 'alltheores:platinum_block', 'alltheores:platinum_nugget','alltheores:platinum_clump', Item.of('elementalcraft:pure_ore', {elementalcraft:{ore:{id:"alltheores:ore_platinum", Count:1}}}), 'alltheores:platinum_crystal');
    unifyMetal('silver', 'alltheores:silver_ingot', 'alltheores:silver_dust', 'alltheores:silver_block', 'alltheores:silver_nugget','alltheores:silver_clump', Item.of('elementalcraft:pure_ore', {elementalcraft:{ore:{id:"alltheores:ore_silver", Count:1}}}), 'alltheores:silver_crystal');
    unifyMetal('tin', 'alltheores:tin_ingot', 'alltheores:tin_dust', 'alltheores:tin_block', 'alltheores:tin_nugget','alltheores:tin_clump', Item.of('elementalcraft:pure_ore', {elementalcraft:{ore:{id:"alltheores:ore_tin", Count:1}}}), 'alltheores:tin_crystal');
    unifyMetal('zinc', 'alltheores:zinc_ingot', 'alltheores:zinc_dust', 'alltheores:zinc_block', 'alltheores:zinc_nugget', 'alltheores:zinc_clump', Item.of('elementalcraft:pure_ore', {elementalcraft:{ore:{id:"alltheores:ore_zinc", Count:1}}}), 'alltheores:zinc_crystal');

    //Allthemodium (Why would we need to unify these they are only ours)
    unifyMetal('allthemodium', 'allthemodium:allthemodium_ingot', 'allthemodium:allthemodium_dust', 'allthemodium:allthemodium_block', 'allthemodium:allthemodium_nugget','allthemodium:allthemodium_clump', Item.of('elementalcraft:pure_ore', {elementalcraft:{ore:{id:"allthemodium:allthemodium_ore", Count:1}}}), 'allthemodium:allthemodium_crystal');
    unifyMetal('vibranium', 'allthemodium:vibranium_ingot', 'allthemodium:vibranium_dust', 'allthemodium:vibranium_block', 'allthemodium:vibranium_nugget', 'allthemodium:vibranium_clump', Item.of('elementalcraft:pure_ore', {elementalcraft:{ore:{id:"allthemodium:vibranium_ore", Count:1}}}), 'allthemodium:vibranium_crystal');
    unifyMetal('unobtainium', 'allthemodium:unobtainium_ingot', 'allthemodium:unobtainium_dust', 'allthemodium:unobtainium_block', 'allthemodium:unobtainium_nugget', 'allthemodium:unobtainium_clump', Item.of('elementalcraft:pure_ore', {elementalcraft:{ore:{id:"allthemodium:unobtainium_ore", Count:1}}}), 'allthemodium:unobtainium_crystal');

});