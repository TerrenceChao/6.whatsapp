module.exports = {
  receiveWsServerByMsgServiceA: function (ary) {
    console.log(`\t\t Msg Service "A" process client: ${ary[0]} from ${ary[1]}`)
    return [ary[0], '>> msg A']
  },
  receiveWsServerByMsgServiceB: function (ary) {
    console.log(`\t\t Msg Service "B" process client: ${ary[0]} from ${ary[1]}`)
    return [ary[0], '>> msg B']
  },
  receiveWsServerByMsgServiceC: function (ary) {
    console.log(`\t\t Msg Service "C" process client: ${ary[0]} from ${ary[1]}`)
    return [ary[0], '>> msg C']
  },
  receiveWsServerByMsgServiceD: function (ary) {
    console.log(`\t\t Msg Service "D" process client: ${ary[0]} from ${ary[1]}`)
    return [ary[0], '>> msg D']
  },
  receiveWsServerByMsgServiceE: function (ary) {
    console.log(`\t\t Msg Service "E" process client: ${ary[0]} from ${ary[1]}\n`)
    return [ary[0], '>> msg E']
  }
}
