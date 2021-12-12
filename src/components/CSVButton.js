import * as React from 'react'
import { CSVLink } from "react-csv";
import { Container } from "react-bootstrap";

const CSVButton = ({games, names}) => {

  const csv = createCSV(games, names)
  return !csv ?
    <></>
    :
    <Container className="text-center">
      <CSVLink data={csv}
               filename="mario-kart-tournament-schedule.csv"
               className="btn btn-primary"
               target="_blank">
        Export to Spreadsheet
      </CSVLink>
    </Container>
}

const zipArrays = (arr1, arr2) => {
  const arr3 = []
  for(let i = 0; i < arr1.length; i++)
  {
    arr3.push(arr1[i]);
    arr3.push(arr2[i]);
  }
  return arr3
}


const createCSV = (games, names) => {
  if (games.length === 0) { return }

  const gameRows = games.map((g, i) => {
    return [`Game ${i+1}`, ...g]
  })

  const emptyRow = Array(games[0].length + 1).fill('')
  const scoreRows = Array(gameRows.length).fill(emptyRow)

  let csv = zipArrays(gameRows, scoreRows)

  csv.push(emptyRow)
  csv.push(["Totals", ...Array(games[0].length - 1)])
  csv.push(emptyRow)

  const scoreTotals = names.map((n) => [n, ...Array(games[0].length - 1)])

  return csv.concat(scoreTotals)
}


export default CSVButton
