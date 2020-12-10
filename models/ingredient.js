'use strict';
module.exports = (sequelize, DataTypes) => {
    var Ingredient = sequelize.define('Ingredient', {
        quantity: DataTypes.STRING,
        title: DataTypes.STRING
    }, {});
    Ingredient.associate = function(models) {
        // associations can be defined here
        Ingredient.belongsTo(models.Recipe);

    };
    return Ingredient;
};