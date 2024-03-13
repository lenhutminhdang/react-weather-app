export const units = {
  celsius: "celsius",
  degree: "degree",
  fahrenheit: "fahrenheit",
  "kilometer-per-hour": "kilometer-per-hour",
  percent: "percent",
};

export const cities = [
  {
    id: "c01",
    name: "Ho Chi Minh",
    coords: {
      lat: 10.82302,
      long: 106.62965,
    },
  },
  {
    id: "c02",
    name: "Ha Noi",
    coords: {
      lat: 21.0245,
      long: 105.84117,
    },
  },
  {
    id: "c03",
    name: "Can Tho",
    coords: {
      lat: 10.03711,
      long: 105.78825,
    },
  },
  {
    id: "c04",
    name: "Kien Giang",
    coords: {
      lat: 10,
      long: 105.16667,
    },
  },
  {
    id: "c05",
    name: "New York",
    coords: {
      lat: 40.71427,
      long: -74.00597,
    },
  },
  {
    id: "c06",
    name: "Tokyo",
    coords: {
      lat: 35.6895,
      long: 139.69171,
    },
  },
];

export const weatherCodeMapping = {
  10000: "10000_clear_large@2x.png",
  10001: "10001_clear_large@2x.png",
  10010: "10010_cloudy_large@2x.png",
  11000: "11000_mostly_clear_large@2x.png",
  11001: "11001_mostly_clear_large@2x.png",
  11010: "11010_partly_cloudy_large@2x.png",
  11011: "11011_partly_cloudy_large@2x.png",
  11020: "11020_mostly_cloudy_large@2x.png",
  11021: "11021_mostly_cloudy_large@2x.png",
  11030: "11030_mostly_clear_large@2x.png",
  11031: "11031_mostly_clear_large@2x.png",
  20000: "20000_fog_large@2x.png",
  21000: "21000_fog_light_large@2x.png",
  21010: "21010_fog_light_mostly_clear_large@2x.png",
  21011: "21011_fog_light_mostly_clear_large@2x.png",
  21020: "21020_fog_light_partly_cloudy_large@2x.png",
  21021: "21021_fog_light_partly_cloudy_large@2x.png",
  21030: "21030_fog_light_mostly_cloudy_large@2x.png",
  21031: "21031_fog_light_mostly_cloudy_large@2x.png",
  21060: "21060_fog_mostly_clear_large@2x.png",
  21061: "21061_fog_mostly_clear_large@2x.png",
  21070: "21070_fog_partly_cloudy_large@2x.png",
  21071: "21071_fog_partly_cloudy_large@2x.png",
  21080: "21080_fog_mostly_cloudy_large@2x.png",
  21081: "21081_fog_mostly_cloudy_large@2x.png",
  40000: "40000_drizzle_large@2x.png",
  40010: "40010_rain_large@2x.png",
  42000: "42000_rain_light_large@2x.png",
  42010: "42010_rain_heavy_large@2x.png",
  42020: "42020_rain_heavy_partly_cloudy_large@2x.png",
  42021: "42021_rain_heavy_partly_cloudy_large@2x.png",
  42030: "42030_drizzle_mostly_clear_large@2x.png",
  42031: "42031_drizzle_mostly_clear_large@2x.png",
  42040: "42040_drizzle_partly_cloudy_large@2x.png",
  42041: "42041_drizzle_partly_cloudy_large@2x.png",
  42050: "42050_drizzle_mostly_cloudy_large@2x.png",
  42051: "42051_drizzle_mostly_cloudy_large@2x.png",
  42080: "42080_rain_partly_cloudy_large@2x.png",
  42081: "42081_rain_partly_cloudy_large@2x.png",
  42090: "42090_rain_mostly_clear_large@2x.png",
  42091: "42091_rain_mostly_clear_large@2x.png",
  42100: "42100_rain_mostly_cloudy_large@2x.png",
  42101: "42101_rain_mostly_cloudy_large@2x.png",
  42110: "42110_rain_heavy_mostly_clear_large@2x.png",
  42111: "42111_rain_heavy_mostly_clear_large@2x.png",
  42120: "42120_rain_heavy_mostly_cloudy_large@2x.png",
  42121: "42121_rain_heavy_mostly_cloudy_large@2x.png",
  42130: "42130_rain_light_mostly_clear_large@2x.png",
  42131: "42131_rain_light_mostly_clear_large@2x.png",
  42140: "42140_rain_light_partly_cloudy_large@2x.png",
  42141: "42141_rain_light_partly_cloudy_large@2x.png",
  42150: "42150_rain_light_mostly_cloudy_large@2x.png",
  42151: "42151_rain_light_mostly_cloudy_large@2x.png",
  50000: "50000_snow_large@2x.png",
  50010: "50010_flurries_large@2x.png",
  51000: "51000_snow_light_large@2x.png",
  51010: "51010_snow_heavy_large@2x.png",
  51020: "51020_snow_light_mostly_clear_large@2x.png",
  51021: "51021_snow_light_mostly_clear_large@2x.png",
  51030: "51030_snow_light_partly_cloudy_large@2x.png",
  51031: "51031_snow_light_partly_cloudy_large@2x.png",
  51040: "51040_snow_light_mostly_cloudy_large@2x.png",
  51041: "51041_snow_light_mostly_cloudy_large@2x.png",
  51050: "51050_snow_mostly_clear_large@2x.png",
  51051: "51051_snow_mostly_clear_large@2x.png",
  51060: "51060_snow_partly_cloudy_large@2x.png",
  51061: "51061_snow_partly_cloudy_large@2x.png",
  51070: "51070_snow_mostly_cloudy_large@2x.png",
  51071: "51071_snow_mostly_cloudy_large@2x.png",
  51080: "51080_wintry_mix_large@2x.png",
  51100: "51100_wintry_mix_large@2x.png",
  51120: "51120_wintry_mix_large@2x.png",
  51140: "51140_wintry_mix_large@2x.png",
  51150: "51150_flurries_mostly_clear_large@2x.png",
  51151: "51151_flurries_mostly_clear_large@2x.png",
  51160: "51160_flurries_partly_cloudy_large@2x.png",
  51161: "51161_flurries_partly_cloudy_large@2x.png",
  51170: "51170_flurries_mostly_cloudy_large@2x.png",
  51171: "51171_flurries_mostly_cloudy_large@2x.png",
  51190: "51190_snow_heavy_mostly_clear_large@2x.png",
  51191: "51191_snow_heavy_mostly_clear_large@2x.png",
  51200: "51200_snow_heavy_partly_cloudy_large@2x.png",
  51201: "51201_snow_heavy_partly_cloudy_large@2x.png",
  51210: "51210_snow_heavy_mostly_cloudy_large@2x.png",
  51211: "51211_snow_heavy_mostly_cloudy_large@2x.png",
  51220: "51220_wintry_mix_large@2x.png",
  60000: "60000_freezing_rain_drizzle_large@2x.png",
  60010: "60010_freezing_rain_large@2x.png",
  60020: "60020_freezing_rain_drizzle_partly_cloudy_large@2x.png",
  60021: "60021_freezing_rain_drizzle_partly_cloudy_large@2x.png",
  60030: "60030_freezing_rain_drizzle_mostly_clear_large@2x.png",
  60031: "60031_freezing_rain_drizzle_mostly_clear_large@2x.png",
  60040: "60040_freezing_rain_drizzle_mostly_cloudy_large@2x.png",
  60041: "60041_freezing_rain_drizzle_mostly_cloudy_large@2x.png",
  62000: "62000_freezing_rain_light_large@2x.png",
  62010: "62010_freezing_rain_heavy_large@2x.png",
  62020: "62020_freezing_rain_heavy_partly_cloudy_large@2x.png",
  62021: "62021_freezing_rain_heavy_partly_cloudy_large@2x.png",
  62030: "62030_freezing_rain_light_partly_cloudy_large@2x.png",
  62031: "62031_freezing_rain_light_partly_cloudy_large@2x.png",
  62040: "62040_wintry_mix_large@2x.png",
  62050: "62050_freezing_rain_light_mostly_clear_large@2x.png",
  62051: "62051_freezing_rain_light_mostly_clear_large@2x.png",
  62060: "62060_wintry_mix_large@2x.png",
  62070: "62070_freezing_rain_heavy_mostly_clear_large@2x.png",
  62071: "62071_freezing_rain_heavy_mostly_clear_large@2x.png",
  62080: "62080_freezing_rain_heavy_mostly_cloudy_large@2x.png",
  62081: "62081_freezing_rain_heavy_mostly_cloudy_large@2x.png",
  62090: "62090_freezing_rain_light_mostly_cloudy_large@2x.png",
  62091: "62091_freezing_rain_light_mostly_cloudy_large@2x.png",
  62120: "62120_wintry_mix_large@2x.png",
  62130: "62130_freezing_rain_mostly_clear_large@2x.png",
  62131: "62131_freezing_rain_mostly_clear_large@2x.png",
  62140: "62140_freezing_rain_partly_cloudy_large@2x.png",
  62141: "62141_freezing_rain_partly_cloudy_large@2x.png",
  62150: "62150_freezing_rain_mostly_cloudy_large@2x.png",
  62151: "62151_freezing_rain_mostly_cloudy_large@2x.png",
  62200: "62200_wintry_mix_large@2x.png",
  62220: "62220_wintry_mix_large@2x.png",
  70000: "70000_ice_pellets_large@2x.png",
  71010: "71010_ice_pellets_heavy_large@2x.png",
  71020: "71020_ice_pellets_light_large@2x.png",
  71030: "71030_wintry_mix_large@2x.png",
  71050: "71050_wintry_mix_large@2x.png",
  71060: "71060_wintry_mix_large@2x.png",
  71070: "71070_ice_pellets_partly_cloudy_large@2x.png",
  71071: "71071_ice_pellets_partly_cloudy_large@2x.png",
  71080: "71080_ice_pellets_mostly_clear_large@2x.png",
  71081: "71081_ice_pellets_mostly_clear_large@2x.png",
  71090: "71090_ice_pellets_mostly_cloudy_large@2x.png",
  71091: "71091_ice_pellets_mostly_cloudy_large@2x.png",
  71100: "71100_ice_pellets_light_mostly_clear_large@2x.png",
  71101: "71101_ice_pellets_light_mostly_clear_large@2x.png",
  71110: "71110_ice_pellets_light_partly_cloudy_large@2x.png",
  71111: "71111_ice_pellets_light_partly_cloudy_large@2x.png",
  71120: "71120_ice_pellets_light_mostly_cloudy_large@2x.png",
  71121: "71121_ice_pellets_light_mostly_cloudy_large@2x.png",
  71130: "71130_ice_pellets_heavy_mostly_clear_large@2x.png",
  71131: "71131_ice_pellets_heavy_mostly_clear_large@2x.png",
  71140: "71140_ice_pellets_heavy_partly_cloudy_large@2x.png",
  71141: "71141_ice_pellets_heavy_partly_cloudy_large@2x.png",
  71150: "71150_wintry_mix_large@2x.png",
  71160: "71160_ice_pellets_heavy_mostly_cloudy_large@2x.png",
  71161: "71161_ice_pellets_heavy_mostly_cloudy_large@2x.png",
  71170: "71170_wintry_mix_large@2x.png",
  80000: "80000_tstorm_large@2x.png",
  80010: "80010_tstorm_mostly_clear_large@2x.png",
  80011: "80011_tstorm_mostly_clear_large@2x.png",
  80020: "80020_tstorm_mostly_cloudy_large@2x.png",
  80021: "80021_tstorm_mostly_cloudy_large@2x.png",
  80030: "80030_tstorm_partly_cloudy_large@2x.png",
  80031: "80031_tstorm_partly_cloudy_large@2x.png",
};

export const weatherStatusMapping = {
  0: "Unknown",
  10000: "Clear, Sunny",
  11000: "Mostly Clear",
  11010: "Partly Cloudy",
  11020: "Mostly Cloudy",
  10010: "Cloudy",
  11030: "Partly Cloudy and Mostly Clear",
  21000: "Light Fog",
  21010: "Mostly Clear and Light Fog",
  21020: "Partly Cloudy and Light Fog",
  21030: "Mostly Cloudy and Light Fog",
  21060: "Mostly Clear and Fog",
  21070: "Partly Cloudy and Fog",
  21080: "Mostly Cloudy and Fog",
  20000: "Fog",
  42040: "Partly Cloudy and Drizzle",
  42030: "Mostly Clear and Drizzle",
  42050: "Mostly Cloudy and Drizzle",
  40000: "Drizzle",
  42000: "Light Rain",
  42130: "Mostly Clear and Light Rain",
  42140: "Partly Cloudy and Light Rain",
  42150: "Mostly Cloudy and Light Rain",
  42090: "Mostly Clear and Rain",
  42080: "Partly Cloudy and Rain",
  42100: "Mostly Cloudy and Rain",
  40010: "Rain",
  42110: "Mostly Clear and Heavy Rain",
  42020: "Partly Cloudy and Heavy Rain",
  42120: "Mostly Cloudy and Heavy Rain",
  42010: "Heavy Rain",
  51150: "Mostly Clear and Flurries",
  51160: "Partly Cloudy and Flurries",
  51170: "Mostly Cloudy and Flurries",
  50010: "Flurries",
  51000: "Light Snow",
  51020: "Mostly Clear and Light Snow",
  51030: "Partly Cloudy and Light Snow",
  51040: "Mostly Cloudy and Light Snow",
  51220: "Drizzle and Light Snow",
  51050: "Mostly Clear and Snow",
  51060: "Partly Cloudy and Snow",
  51070: "Mostly Cloudy and Snow",
  50000: "Snow",
  51010: "Heavy Snow",
  51190: "Mostly Clear and Heavy Snow",
  51200: "Partly Cloudy and Heavy Snow",
  51210: "Mostly Cloudy and Heavy Snow",
  51100: "Drizzle and Snow",
  51080: "Rain and Snow",
  51140: "Snow and Freezing Rain",
  51120: "Snow and Ice Pellets",
  60000: "Freezing Drizzle",
  60030: "Mostly Clear and Freezing drizzle",
  60020: "Partly Cloudy and Freezing drizzle",
  60040: "Mostly Cloudy and Freezing drizzle",
  62040: "Drizzle and Freezing Drizzle",
  62060: "Light Rain and Freezing Drizzle",
  62050: "Mostly Clear and Light Freezing Rain",
  62030: "Partly Cloudy and Light Freezing Rain",
  62090: "Mostly Cloudy and Light Freezing Rain",
  62000: "Light Freezing Rain",
  62130: "Mostly Clear and Freezing Rain",
  62140: "Partly Cloudy and Freezing Rain",
  62150: "Mostly Cloudy and Freezing Rain",
  60010: "Freezing Rain",
  62120: "Drizzle and Freezing Rain",
  62200: "Light Rain and Freezing Rain",
  62220: "Rain and Freezing Rain",
  62070: "Mostly Clear and Heavy Freezing Rain",
  62020: "Partly Cloudy and Heavy Freezing Rain",
  62080: "Mostly Cloudy and Heavy Freezing Rain",
  62010: "Heavy Freezing Rain",
  71100: "Mostly Clear and Light Ice Pellets",
  71110: "Partly Cloudy and Light Ice Pellets",
  71120: "Mostly Cloudy and Light Ice Pellets",
  71020: "Light Ice Pellets",
  71080: "Mostly Clear and Ice Pellets",
  71070: "Partly Cloudy and Ice Pellets",
  71090: "Mostly Cloudy and Ice Pellets",
  70000: "Ice Pellets",
  71050: "Drizzle and Ice Pellets",
  71060: "Freezing Rain and Ice Pellets",
  71150: "Light Rain and Ice Pellets",
  71170: "Rain and Ice Pellets",
  71030: "Freezing Rain and Heavy Ice Pellets",
  71130: "Mostly Clear and Heavy Ice Pellets",
  71140: "Partly Cloudy and Heavy Ice Pellets",
  71160: "Mostly Cloudy and Heavy Ice Pellets",
  71010: "Heavy Ice Pellets",
  80010: "Mostly Clear and Thunderstorm",
  80030: "Partly Cloudy and Thunderstorm",
  80020: "Mostly Cloudy and Thunderstorm",
  80000: "Thunderstorm",
  // ---------------------------
  10001: "Clear",
  11001: "Mostly Clear",
  11011: "Partly Cloudy",
  11021: "Mostly Cloudy",
  10011: "Cloudy",
  11031: "Partly Cloudy and Mostly Clear",
  21001: "Light Fog",
  21011: "Mostly Clear and Light Fog",
  21021: "Partly Cloudy and Light Fog",
  21031: "Mostly Cloudy and Light Fog",
  21061: "Mostly Clear and Fog",
  21071: "Partly Cloudy and Fog",
  21081: "Mostly Cloudy and Fog",
  20001: "Fog",
  42041: "Partly Cloudy and Drizzle",
  42031: "Mostly Clear and Drizzle",
  42051: "Mostly Cloudy and Drizzle",
  40001: "Drizzle",
  42001: "Light Rain",
  42131: "Mostly Clear and Light Rain",
  42141: "Partly Cloudy and Light Rain",
  42151: "Mostly Cloudy and Light Rain",
  42091: "Mostly Clear and Rain",
  42081: "Partly Cloudy and Rain",
  42101: "Mostly Cloudy and Rain",
  40011: "Rain",
  42111: "Mostly Clear and Heavy Rain",
  42021: "Partly Cloudy and Heavy Rain",
  42121: "Mostly Cloudy and Heavy Rain",
  42011: "Heavy Rain",
  51151: "Mostly Clear and Flurries",
  51161: "Partly Cloudy and Flurries",
  51171: "Mostly Cloudy and Flurries",
  50011: "Flurries",
  51001: "Light Snow",
  51021: "Mostly Clear and Light Snow",
  51031: "Partly Cloudy and Light Snow",
  51041: "Mostly Cloudy and Light Snow",
  51221: "Drizzle and Light Snow",
  51051: "Mostly Clear and Snow",
  51061: "Partly Cloudy and Snow",
  51071: "Mostly Cloudy and Snow",
  50001: "Snow",
  51011: "Heavy Snow",
  51191: "Mostly Clear and Heavy Snow",
  51201: "Partly Cloudy and Heavy Snow",
  51211: "Mostly Cloudy and Heavy Snow",
  51101: "Drizzle and Snow",
  51081: "Rain and Snow",
  51141: "Snow and Freezing Rain",
  51121: "Snow and Ice Pellets",
  60001: "Freezing Drizzle",
  60031: "Mostly Clear and Freezing drizzle",
  60021: "Partly Cloudy and Freezing drizzle",
  60041: "Mostly Cloudy and Freezing drizzle",
  62041: "Drizzle and Freezing Drizzle",
  62061: "Light Rain and Freezing Drizzle",
  62051: "Mostly Clear and Light Freezing Rain",
  62031: "Partly cloudy and Light Freezing Rain",
  62091: "Mostly Cloudy and Light Freezing Rain",
  62001: "Light Freezing Rain",
  62131: "Mostly Clear and Freezing Rain",
  62141: "Partly Cloudy and Freezing Rain",
  62151: "Mostly Cloudy and Freezing Rain",
  60011: "Freezing Rain",
  62121: "Drizzle and Freezing Rain",
  62201: "Light Rain and Freezing Rain",
  62221: "Rain and Freezing Rain",
  62071: "Mostly Clear and Heavy Freezing Rain",
  62021: "Partly Cloudy and Heavy Freezing Rain",
  62081: "Mostly Cloudy and Heavy Freezing Rain",
  62011: "Heavy Freezing Rain",
  71101: "Mostly Clear and Light Ice Pellets",
  71111: "Partly Cloudy and Light Ice Pellets",
  71121: "Mostly Cloudy and Light Ice Pellets",
  71021: "Light Ice Pellets",
  71081: "Mostly Clear and Ice Pellets",
  71071: "Partly Cloudy and Ice Pellets",
  71091: "Mostly Cloudy and Ice Pellets",
  70001: "Ice Pellets",
  71051: "Drizzle and Ice Pellets",
  71061: "Freezing Rain and Ice Pellets",
  71151: "Light Rain and Ice Pellets",
  71171: "Rain and Ice Pellets",
  71031: "Freezing Rain and Heavy Ice Pellets",
  71131: "Mostly Clear and Heavy Ice Pellets",
  71141: "Partly Cloudy and Heavy Ice Pellets",
  71161: "Mostly Cloudy and Heavy Ice Pellets",
  71011: "Heavy Ice Pellets",
  80011: "Mostly Clear and Thunderstorm",
  80031: "Partly Cloudy and Thunderstorm",
  80021: "Mostly Cloudy and Thunderstorm",
  80001: "Thunderstorm",
};

export const alertMapping = {
  alert: {
    1: "Heavy Rain warning issued * Bring a umbrella just in case.",
    2: "Flurries warning issued * Bring a jacket just in case.",
    3: "Heavy Snow warning issued * Bring a jacket just in case.",
    4: "Thunderstorm warning issued * Seek shelter and stay safe!",
  },
  weatherCodes: {
    42110: 1,
    42020: 1,
    42120: 1,
    42010: 1,
    42111: 1,
    42021: 1,
    42121: 1,
    42011: 1,
    51150: 2,
    51160: 2,
    51170: 2,
    50010: 2,
    51151: 2,
    51161: 2,
    51171: 2,
    50011: 2,
    51010: 3,
    51190: 3,
    51200: 3,
    51210: 3,
    51011: 3,
    51191: 3,
    51201: 3,
    51211: 3,
    80010: 4,
    80030: 4,
    80020: 4,
    80000: 4,
    80011: 4,
    80031: 4,
    80021: 4,
    80001: 4,
  },
};