class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^-,'A-Za-z0-9' -]/g, '')

  }
  static titleize(string){
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let restWord = []
    let allWords = string.split(" ")
    for (let n = 0; n < allWords.length; n++ ){
      if(n == 0){
        restWord.push(this.capitalize(allWords[n]))
      } else {
        if(exceptions.includes(allWords[n])){
          restWord.push(allWords[n])
        } else {
          restWord.push(this.capitalize(allWords[n]))
        }

      }
    }
    return restWord.join( " ")

  }
  
}

