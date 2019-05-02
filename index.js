function takeANumber(katzDeliLine) {
  katzDeliLine.push("")
  return `Welcome. You are guest number ${katzDeliLine.length}.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  var result = "The line is currently: "
  var i
  for(i=0; i<katzDeliLine.length; i++) {
    result = result + `${i+1}. ${katzDeliLine[i]}, `
  }
  return result.substring(0, result.length-2)
}