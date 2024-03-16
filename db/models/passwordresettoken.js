import { Sequelize, Model, DataTypes } from "sequelize"
import Users from './users'


module.exports = (sequelize, Users) => {
  class PasswordResetToken extends Model {
    async getUser() {
      return await Users.findOne({ where: { id: this.user_id } })
    }
  }
  PasswordResetToken.init(
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
      modelName: "PasswordResetToken",
    }
  )
  return PasswordResetToken;
}
