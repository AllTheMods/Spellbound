// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	 event.create('iron_clump').displayName('Iron Clump')
	 event.create('iron_crystal').displayName('Iron Crystal')
	 event.create('gold_clump').displayName('Gold Clump')
	 event.create('gold_crystal').displayName('Gold Crystal')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})