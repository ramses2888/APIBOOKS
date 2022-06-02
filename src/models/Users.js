const {DataTypes} = require('sequelize');

module.exports = sequelize => {
    sequelize.define('Users', {
        email: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        
        direction: {
            type: DataTypes.JSON(),
            allowNull: true
        },
        
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    }, {
        timestamps: true
    });
};
