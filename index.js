function takeANumber(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if(line.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty."
  }
  let newLine = [];
  let message = "The line is currently: ";
  for(let x = 0; x < line.length; x++){
    newLine.push(`${x + 1}. ${line[x]}`)
  }
  newLine = newLine.join(', ')
  return message + newLine
}































  