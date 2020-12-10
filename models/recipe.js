'use strict';
module.exports = (sequelize, DataTypes) => {
    var Recipe = sequelize.define('Recipe', {
        title: DataTypes.STRING,
        smallImagePath: DataTypes.STRING,
        bigImagePath: DataTypes.STRING,
        summary: DataTypes.STRING,
        description: DataTypes.TEXT
    }, {});
    Recipe.associate = function(models) {
        // associations can be defined here
        Recipe.hasMany(models.Ingredient);
        Recipe.hasMany(models.Direction);
    };
    return Recipe;
};