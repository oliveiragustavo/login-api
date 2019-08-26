require('dotenv').config({ path: process.env.NODE_ENV || '.env' })

console.log("========")
console.log(process.env.DBUSERNAME)
console.log("========")

module.exports = {
  secret: process.env.SECRET,
  port: process.env.PORT,
  bucketName: process.env.BUCKET_NAME,
  bucketApi: process.env.BUCKET_API,
  envDevelopment: true,
  keyMaps: process.env.KEY_MAPS,
  guidTest: process.env.GUID_TEST,
  tokenTest: process.env.TOKEN_TEST,
}
