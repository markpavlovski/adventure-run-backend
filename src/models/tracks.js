const db = require('../../db/knex')
const shortid = require('shortid')


const getAll = () => {
  return (
    db('tracks')
    .select('*')
  )
  .then(tracks => {
    const badgePromises = tracks.map(track => getBadges(track.id))
    return Promise.all(badgePromises)
    .then(trackBadges => {
      trackBadges.forEach((badges,idx) => {
        tracks[idx].badges = badges
      })
      return tracks
    })
  })
}

const getOne = (id) => {
  return (
    db('tracks')
    .where({ id })
    .select('*')
  )
}

const getCheckpoints = (track_id) => {
  return (
    db('checkpoints')
    .where({ track_id })
    .select('*')
  )
}

const getBadges = (track_id) => {
  return (
    db('tracks_badges')
    .where({ track_id })
    .join('badges', 'badges.id', 'tracks_badges.badge_id')
    .select(db.raw('badges.*'))
  )
}


module.exports = { getAll, getOne, getCheckpoints, getBadges }
