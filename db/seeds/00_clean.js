exports.seed = function(knex, Promise) {

  const tablesToClean = [
    'users',
    'tracks',
    'checkpoints',
    'runs',
    'runs_checkpoints',
    'badges',
    'tracks_badges',
    // 'users_badges_runs',
    // 'guilds',
    // 'guilds_users'
    // 'high_scores',
  ].reverse()

  return tablesToClean.reduce(
    (acc, el) => acc.then(() => knex(el).del()),
    Promise.resolve()
  )

}
