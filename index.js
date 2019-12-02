class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9' -]+/g, '')
  }

  static titleize(string) {
    let words = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let splitString = string.split(' ')
    let newString = splitString.map(word => {
      if (!words.includes(word) || splitString.indexOf(word) === 0) return this.capitalize(word)
      else return word
    })
    return newString.join(' ')
  }
}
