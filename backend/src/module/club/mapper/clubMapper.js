function mapClub(club) {
  const clubMapped = {
    id: club.id,
    name: club.name,
    shortName: club.shortname,
    abbreviation: club.tla,
    nameArea: club.area_name,
    idArea: club.area_id,
    crestUrl: club.crest_url,
    address: club.address,
    phone: club.phone,
    website: club.website,
    email: club.email,
    founded: club.founded,
    clubColors: club.club_colors,
    venue: club.venue,
  };

  return clubMapped;
}

module.exports = mapClub;
