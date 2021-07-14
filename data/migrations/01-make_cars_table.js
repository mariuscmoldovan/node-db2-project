exports.up = function (knex) {
  return knex.schema.createTable("cars", table => {
      table.increments();
      table.text("vin", 17).unique().notNullable();
      table.text("make", 120).notNullable();
      table.text("model", 120).notNullable();
      table.decimal("mileage").unsigned().notNullable();
      table.text("title")
      table.text("transmission")
});
};

exports.down = function (knex) {
  // DO YOUR MAGIC
};
