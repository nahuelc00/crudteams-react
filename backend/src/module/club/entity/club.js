class Club {
  constructor(club) {
    this.id = club.id;
    this.name = club.name;
    this.shortname = club.shortname;
    this.tla = club.tla;
    this.area_name = club.area_name;
    this.area_id = club.area_id;
    this.crest_url = club.crest_url;
    this.address = club.address;
    this.phone = club.phone;
    this.website = club.website;
    this.email = club.email;
    this.founded = club.founded;
    this.club_colors = club.club_colors;
    this.venue = club.venue;
  }
}

module.exports = Club;
