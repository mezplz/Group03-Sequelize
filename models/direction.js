'use strict';
module.exports = (sequelize, DataTypes) => {
    var Direction = sequelize.define('Direction', {
        description: DataTypes.STRING,
        order: DataTypes.INTEGER
    }, {});
    Direction.associate = function(models) {
        // associations can be defined here
        Direction.belongsTo(models.Recipe);
    };
    return Direction;
};