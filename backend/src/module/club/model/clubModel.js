const { DataTypes, Model } = require('sequelize');

class ClubModel extends Model { }

function setupClubModel(sequelize) {
  ClubModel.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
    },

    shortname: {
      type: DataTypes.STRING,
    },

    tla: {
      type: DataTypes.STRING,
    },

    area_name: {
      type: DataTypes.STRING,
    },

    area_id: {
      type: DataTypes.INTEGER,
    },

    crest_url: {
      type: DataTypes.STRING,
    },

    address: {
      type: DataTypes.STRING,
    },

    phone: {
      type: DataTypes.STRING,
    },

    website: {
      type: DataTypes.STRING,
    },

    email: {
      type: DataTypes.STRING,
    },

    founded: {
      type: DataTypes.INTEGER,
    },

    club_colors: {
      type: DataTypes.STRING,
    },

    venue: {
      type: DataTypes.STRING,
    },

  }, {
    sequelize,
    modelName: 'ClubModel',
    tableName: 'clubs',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });

  return ClubModel;
}

module.exports = setupClubModel;
