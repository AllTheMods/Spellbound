onEvent('recipes', e => {
    e.remove({id: 'resourcefulbees:jar'});
    e.shaped('16x resourcefulbees:bee_jar', [
        ' G ',
        'G G', 
        'GGG'
    ],{
        G: '#forge:glass/colorless'
    }
    )
})