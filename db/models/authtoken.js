import { Sequelize, DataTypes, Model } from "sequelize"

class AuthToken extends Model {}

module.exports =  (sequelize, User) =>
  AuthToken.init(
    {
      token: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },

      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: User,
          key: "id",
        },
      },

      // ip: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
    },
    {
      sequelize,
      modelName: "AuthToken",
    }
  )
