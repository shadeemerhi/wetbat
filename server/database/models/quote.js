module.exports = (sequelize, DataTypes) => {
  const Quote = sequelize.define('Quote', {
    departureLocation: DataTypes.STRING,
    destinationLocation: DataTypes.STRING,
    departureDate: DataTypes.DATE,
    returnDate: DataTypes.DATE,
    numberOfTravellers: DataTypes.INTEGER,
    transportationType: DataTypes.STRING,
    clientName: DataTypes.STRING,
    clientEmail: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Quote',
  });

  Quote.associate = function(models) {
  }
  return Quote;
};