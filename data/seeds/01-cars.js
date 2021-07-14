// STRETCH
const cars = [
    {vin: '1FAFP40492F210196', make: 'Audi', model: 'A8', mileage: 1600, title: 'salvage', transmission: 'auto'},
    {vin: '5TFEM5F14EX076293', make: 'Mercedes', model: 'S Class', mileage: 0, title: 'clean', transmission: ''},
    {vin: 'JKBVNAE18YA097782', make: 'BMW', model: 'LI', mileage: 0, title: 'clean', transmission: 'manual'}    
]
exports.seed = function(knex) {
    return knex('cars')
        .truncate()
        .then(() => {
            return knex('cars').insert(cars)
        })
        
}