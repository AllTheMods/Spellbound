// priority: 1000

onEvent('item.registry', event => {
	// Register new items here
	 event.create('mundane_helmet').displayName('Mundane Helmet')
	 event.create('mundane_chestplate').displayName('Mundane Chestplate')
	 event.create('mundane_leggings').displayName('Mundane Leggings')
	 event.create('mundane_boots').displayName('Mundane Boots')
	 event.create('atm_star').displayName('ATM Star')
	 event.create('patrick_star').displayName('§dPatrick Star').unstackable()
	 event.create('baldersteel').displayName('Baldersteel')
	 event.create('spark_of_knowledge').displayName('Spark of Knowledge')
	 event.create('dragon_soul').displayName('Dragon Soul')
	 event.create('eye_of_chaos').displayName('Eye of Chaos')
	 event.create('pulsating_black_hole').displayName('Pulsating_Black Hole')
	 event.create('oblivion_shard').displayName('Oblivion Shard')
	 event.create('essence_of_eternal_life').displayName('Essence of Eternal Life')
	 event.create('clock_of_father_time').displayName('Clock of Father Time')
	 event.create('philosophers_fuel').displayName('Philosophers Fuel')
	 event.create('rune_of_sins').displayName('Rune of Sins')
	 event.create('mass_of_wills').displayName('Mass of Wills')
})

onEvent('block.registry', event => {
	event.create('magical_soil').displayName('§bMagical Soil').material('grass').hardness(0.6)
	event.create('atm_star_block').displayName('§eATM Star Block').material('iron').hardness(5).lightLevel(1)
	event.create('nether_star_block').displayName('§eNether Star Block').material('iron').hardness(2).lightLevel(1)
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})