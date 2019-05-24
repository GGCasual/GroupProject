str = "What&#039;s the famous line Vaas says in &quot;Far Cry 3&quot;?"

escStr = encodeURI(str);

console.log(escStr)

unescStr = decodeURI(escStr)

console.log(unescStr)