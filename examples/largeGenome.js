'use strict'

const { Population } = require('../index')

// This fitness function will make genomes grow larger and larger
const fitnessFunction = genome => genome.connections.length

const population = new Population(20, 3, 3)

for (let i = 1; i < 10; ++i) {
  population.evolve(10, fitnessFunction)
}