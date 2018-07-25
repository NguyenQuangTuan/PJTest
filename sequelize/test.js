module.exports = (sequelize, DataTypes) => sequelize.define('Test',
    {
        id: {
            type: DataTypes.BIGINT,
            unique: true,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
          },
          name: {
            type: DataTypes.STRING(15),
            unique: true,
            allowNull: true
          }
    },
    {
        underscored: true
    }
)