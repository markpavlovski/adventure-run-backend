
const GREEN_LAKE = [
  '47.68149, -122.32894',
  '47.68215, -122.33998',
  '47.67553, -122.34627',
  '47.67163, -122.34238',
  '47.67574, -122.33385',
  '47.68003, -122.32940'
]

const ALL_THE_PARKS = [
  '-122.3194980, 47.6179810',
  '-122.3190093, 47.6253467',
  '-122.3145890, 47.6287560',
  '-122.3157263, 47.6318587',
  '-122.3101205, 47.6323639',
  '-122.3073538, 47.6323856',
  '-122.3054963, 47.6351799',
  '-122.3059040, 47.6365029',
  '-122.3048258, 47.6375512',
  '-122.3044449, 47.6379235',
  '-122.3021275, 47.6395265',
  '-122.2968744, 47.6395130',
  '-122.2947004, 47.6397976',
  '-122.2921121, 47.6420331',
  '-122.2903512, 47.6468337',
  '-122.3009956, 47.6468544',
  '-122.3044315, 47.6470622',
  '-122.3039326, 47.6495161'
]

const tracks = [GREEN_LAKE,GREEN_LAKE,ALL_THE_PARKS,GREEN_LAKE,GREEN_LAKE,GREEN_LAKE]
const allCheckpoints = tracks.reduce((acc,track,trackId) => {
  const checkpoints = track.map((latlong,id) => ({
      id: acc.length + id + 1,
      latlong,
      track_id: trackId + 1,
      order: id,
      title: '',
      description: ''
    })
  )
  return [...acc, ...checkpoints]
}, [])

console.log(allCheckpoints)
//
// const lake = GREEN_LAKE.map((latlong,idx) => ({
//     id: idx+1,
//     latlong,
//     track_id: 1,
//     order: idx,
//     title: '',
//     description: ''
//   })
// )
// console.log(lake)
