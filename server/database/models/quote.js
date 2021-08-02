module.exports = (sequelize, DataTypes) => {
  const Quote = sequelize.define('Quote', {
    departure_location: DataTypes.STRING,
    destination_location: DataTypes.STRING,
    departure_datetime: DataTypes.DATE,
    destination_datetime: DataTypes.DATE,
    travellers: DataTypes.INTEGER,
    transporation_type: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Quote',
  });

  Quote.associate = function(models) {
  }
  return Quote;
};