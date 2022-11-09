const start_book = Item.of('akashictome:tome', {
    RepairCost: 0,
    display: { Name: "{\"text\":\"All The Magic Guide\"}" },
    "akashictome:data": {
        allthemodium: { id: "patchouli:guide_book", Count: 1, tag: { "patchouli:book": "allthemodium:allthemodium" } },
        ars_nouveau: { id: "ars_nouveau:worn_notebook", Count: 1 },
        astral: { id: "patchouli:guide_book", Count: 1, tag: { "patchouli:book": "astral:astronomicon" } },
        astralsorcery: { id: "astralsorcery:tome", Count: 1 },
        betterendforge: { id: "betterendforge:guidebook", Count: 1 },
        bloodmagic: { id: "patchouli:guide_book", Count: 1, tag: { "patchouli:book": "bloodmagic:guide" } },
        botania: { id: "botania:lexicon", Count: 1, tag: {} },
        eidolon: { id: "eidolon:codex", Count: 1 },
        elementalcraft: { id: "patchouli:guide_book", Count: 1, tag: { "patchouli:book": "elementalcraft:element_book" } },
        enigmaticlegacy: { id: "enigmaticlegacy:the_acknowledgment", Count: 1 },
        evilcraft: { id: "evilcraft:origins_of_darkness", Count: 1 },
        feywild: { id: "feywild:feywild_lexicon", Count: 1 },
        ftbquests: { id: "ftbquests:book", Count: 1 },
        malum: { id: "malum:encyclopedia_arcana", Count: 1 },
        "mana-and-artifice": { id: "mana-and-artifice:guide_book", Count: 1 },
        mysticalagriculture: { id: "patchouli:guide_book", Count: 1, tag: { "patchouli:book": "mysticalagriculture:guide" } },
        mysticalworld: { id: "mysticalworld:encyclopedia", Count: 1 },
        naturesaura: { id: "patchouli:guide_book", Count: 1, tag: { "patchouli:book": "naturesaura:book" } },
        occultism: { id: "occultism:dictionary_of_spirits", Count: 1 },
        psi: { id: "patchouli:guide_book", Count: 1, tag: { "patchouli:book": "psi:encyclopaedia_psionica" } },
        resourcefulbees: { id: "patchouli:guide_book", Count: 1, tag: { "patchouli:book": "resourcefulbees:fifty_shades_of_bees" } },
        solcarrot: { id: "solcarrot:food_book", Count: 1 },
        supplementaries: { id: "patchouli:guide_book", Count: 1, tag: { "patchouli:book": "supplementaries:supplementaries_guide" } },
        theabyss: { id: "patchouli:guide_book", Count: 1, tag: { "patchouli:book": "theabyss:abyssbookitem" } },
        theoneprobe: { id: "theoneprobe:probenote", Count: 1 },
        turtlemancy: { id: "patchouli:guide_book", Count: 1, tag: { "patchouli:book": "turtlemancy:turtlenomicon" } },
        twilightforest: { id: "patchouli:guide_book", Count: 1, tag: { "patchouli:book": "twilightforest:guide" } },
        vampirism: { id: "guideapi-vp:vampirism-guidebook", Count: 1, tag: { "G-API_Category_Page": 0 } }
    }
})

events.listen('player.logged_in', function (e) {
    if (!(e.player.stages.has("joined"))) {
        e.player.stages.add('joined')
        //Akashic Tome (with starting books)
        e.player.give(start_book)
    }
})

onEvent('recipes', e => {
    e.shapeless(start_book, ['minecraft:book', '#forge:string'])
})