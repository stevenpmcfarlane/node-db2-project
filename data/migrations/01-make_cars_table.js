// DO YOUR MAGIC
exports.up = function (knex) {
  return knex.schema.createTable("cars", (table) => {
    table.increments("car_id");
    table.text("vin").unique().notNullable();
    table.text("make").notNullable();
    table.text("model").notNullable();
    table.number("mileage").notNullable();
    table.text("title");
    table.text("transmission");
  });
};
// vin 	string 	required, unique
// make 	string 	required
// model 	string 	required
// mileage 	numeric 	required
// title 	string 	optional
// transmission 	string 	optional

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
