
const findCombinationsPlayed = (mArray, p1, p2, players) => {
  let x = 0
  mArray.forEach(m => {
    if (m[players.indexOf(p1)] && m[players.indexOf(p2)]) { x ++ }
  })
  return x
}

const triangleGen = (n) => {
  let triangleNumbers = [0]
  for (let i = 1; i < n; i ++) {
    triangleNumbers.push(triangleNumbers[triangleNumbers.length-1] + i)
  }
  return triangleNumbers
}

const kernelGen = (numOfTrues, length) => {
  const trueIndices = triangleGen(numOfTrues)
  let kernel = new Array(trueIndices[trueIndices.length-1] + 2).fill(false)
  trueIndices.forEach(t => kernel[t] = true)

  if (kernel.length < length) {
    const diff = length - kernel.length
    kernel = [...kernel, ...(new Array(diff).fill(false))]
  }
  if (kernel.length > length) {
    const diff = kernel.length - length
    const i = kernel.length - diff - 1
    kernel = [...kernel.splice(0, i), true]
  }
  return kernel
}

const generateMatches = (playersPerGame, players) => {
  const numberOfPlayers = players.length

  if (numberOfPlayers <= playersPerGame + 1) {
    console.log('Too few players')
    return []
  }

  let matchArray = new Array(numberOfPlayers).fill(new Array(numberOfPlayers).fill(false))
  matchArray[0] = kernelGen(playersPerGame, numberOfPlayers)
  for (let i=1; i<numberOfPlayers; i++) {
    let prev = [...matchArray[i-1]]
    prev.push(prev.shift())
    matchArray[i] = prev
  }

  return matchArray
}

export const getGamesFromNames = (names, playersPerGame) => {
  const games = generateMatches(playersPerGame, names)

  if (!games) {
    return []
  }

  return games.map(g => {
    let prettyGame = []
    g.forEach((player, i) => {
      if (player) {
        prettyGame.push(names[i])
      }
    })
    return prettyGame
  })
}
