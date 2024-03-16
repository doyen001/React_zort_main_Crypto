import { Sequelize, DataTypes, Model } from "sequelize"

module.exports = (sequelize, Users) => {
  class AccountConfirmationToken extends Model {
    static associate(models) {
      // define association here
    }
  }
  AccountConfirmationToken.init(
    {
      token: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },

      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: Users,
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "AccountConfirmationToken",
    }
  )
  return AccountConfirmationToken;
}