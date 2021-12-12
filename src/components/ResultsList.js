import * as React from 'react'
import Container from 'react-bootstrap/Container'
import { getGamesFromNames } from '../utils'
import {useEffect, useState} from "react"
import CSVButton from "./CSVButton";

const ResultsList = ({names, playersPerGame}) => {
  const [games, setGames] = useState([])
  const defaultNames = "alpha, bravo, charlie, delta, echo, foxtrot, golf".toUpperCase().split(',')

  useEffect(() => {
    names.length !== 0 ?
      setGames(getGamesFromNames(names, playersPerGame))
      :
      setGames(getGamesFromNames(defaultNames, playersPerGame))
  }, [ names, playersPerGame ])

  return (
    <Container>
      <h2 className="w-100 align-middle text-center mb-4">GAMES:</h2>
      {
        games.length !== 0 ?
          games.map((g, i) => <p className="w-100 align-middle text-center">{i+1}) {g.join(' | ')}</p>)
          : <p className="w-100 align-middle text-center">too few names</p>
      }
      <CSVButton games={games} names={names.length !== 0 ? names : defaultNames}/>
    </Container>
  )
}

export default ResultsList
