module.exports = {
  receiveClientByServerA: function (client) {
    console.log(`> ServerA deal with client: ${client}\n`)
    return [client, '>> ws A']
  },
  receiveClientByServerB: function (client) {
    console.log(`>> ServerB deal with client: ${client}`)
    return [client, '>> ws B']
  },
  receiveClientByServerC: function (client) {
    console.log(`>>> ServerC deal with client: ${client}`)
    return [client, '>> ws C']
  },

  receiveMsgServiceByServerA: function (ary) {
    console.log(`> Server "A" deal with client: ${ary[0]} from messaging service: ${ary[1]}\n`)
    return [ary[0], '>> ws A"']
  },
  receiveMsgServiceByServerB: function (ary) {
    console.log(`> Server "B" deal with client: ${ary[0]} from messaging service: ${ary[1]}`)
    return [ary[0], '>> ws B"']
  },
  receiveMsgServiceByServerC: function (ary) {
    console.log(`> Server "C" deal with client: ${ary[0]} from messaging service: ${ary[1]}`)
    return [ary[0], '>> ws C"']
  }
}
