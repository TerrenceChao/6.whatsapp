module.exports = function (paramIdx = 2) {
    let port
    try {
      console.log(process.argv, `param ${paramIdx} is ${process.argv[paramIdx]}`)
      port = process.argv[paramIdx]
      if (typeof port == 'number' && (0 >= port || port <= 65535)) {
        throw new Error('Out of the port range')
      }
    } catch (e) {
      console.error(`\n\nError Caused during parse port from cmd:\n ${e}`)
      port = parsePortFromCmd(paramIdx + 1)
    }
  
    return port
}