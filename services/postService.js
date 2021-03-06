import redisLib from 'redis';

export const redis = redisLib.createClient();

const postService = {
   find: function(id, cb) {
      redis.hgetall('post:dict:' + id, cb);
   },
   exists: function(id, cb) {
      redis.sismember('post:set', id, cb);
   },
   retrieveFeed: function(count, cb) {
      redis.lrange('post:list', 0, count, cb);
   },
   retrieveSorted: function(count, cb) {
      redis.zrange('post:sorted:published', 0, count, cb);
   }
};

module.exports = postService;
