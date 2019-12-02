class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase()+string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string){
    let array = string.split(' ');
    let exceptions = ['the', 'a', 'an','but','of', 'and', 'for', 'at', 'by', 'from'];
    let result = [];
    array.forEach(word => {
      if(result.length === 0 ){result.push(this.capitalize(word))}
      else{
        if(exceptions.includes(word)){result.push(word)}
        else {result.push(this.capitalize(word))}
      }
    })
    return result.join(' ')
  }
}