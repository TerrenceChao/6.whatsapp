const LEN = 21
const ary = []
let i = 0
while (i++ < LEN) ary.push(i * i * i)
// console.log(ary)

module.exports = {
  clients: function () {
    return ary
  }
}
