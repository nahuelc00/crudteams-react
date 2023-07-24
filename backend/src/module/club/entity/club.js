class Club {
  constructor(club) {
    this.id = club.id;
    this.area = club.area;
    this.name = club.name;
    this.shortName = club.shortName;
    this.tla = club.tla;
    this.crestUrl = club.crestUrl;
    this.address = club.address;
    this.phone = club.phone;
    this.website = club.website;
    this.email = club.email;
    this.founded = club.founded;
    this.clubColors = club.clubColors;
    this.venue = club.venue;
    this.lastUpdated = club.lastUpdated;
  }
}

module.exports = Club;
