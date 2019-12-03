class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    let arr = []
    let words = string.split(' ')
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    for(let x = 0; x < words.length; x++) {
      if (x == 0) {
        arr.push(this.capitalize(words[x]))
      } else {
      if (exceptions.includes(words[x])) {
        arr.push(words[x])
      } else {
        arr.push(this.capitalize(words[x]))
        }
      }
    }
    return arr.join(' ')
  }

}