const configureDI = require('./di');

const container = configureDI();
const ClubModel = container.get('ClubModel');

ClubModel.sync();
