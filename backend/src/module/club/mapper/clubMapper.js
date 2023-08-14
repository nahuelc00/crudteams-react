function mapClub(clubEntity) {
  const clubMapped = {
    id: clubEntity.id,
    name: clubEntity.name,
    shortName: clubEntity.shortname,
    tla: clubEntity.tla,
    nameArea: clubEntity.area_name,
    idArea: clubEntity.area_id,
    crestUrl: clubEntity.crest_url,
    address: clubEntity.address,
    phone: clubEntity.phone,
    website: clubEntity.website,
    email: clubEntity.email,
    founded: clubEntity.founded,
    clubColors: clubEntity.club_colors,
    venue: clubEntity.venue,
    createdAt: clubEntity.created_at,
  };

  return clubMapped;
}

module.exports = mapClub;
