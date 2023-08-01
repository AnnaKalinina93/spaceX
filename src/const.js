export const ApiRoute = {
  launches: 'https://api.spacexdata.com/v4/launches/query',
  image: 'https://api.spacexdata.com/v4/rockets/'
}

export const query = {
  query: {
    date_utc: {
      $gte: '2015-01-01T00:00:00.000Z',
      $lte: '2019-01-01T00:00:00.000Z',
    },
    success: true,
  },
  options: {
    pagination: false,
  }
}

export const getTimeUtc = (a) => {
    const date = new Date (a.date_utc);
    const b = date.getTime();
    return b;
}