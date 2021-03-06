module.exports = () => {
  var input = ''
  return new Promise((resolve, reject) => {
    process.stdin
    .on('data', chunk => { input += chunk.toString() })
    .on('end', () => resolve(input.trim()))
    .on('error', reject)
  })
}
