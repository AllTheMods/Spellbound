//priority 9999

onEvent('worldgen.remove', e => {
    e.removeOres(ores => {
        ores.blocks = ['wyrmroost:platinum_ore']
    })
}) 