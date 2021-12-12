import * as React from "react"
import {useState} from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from "./components/NavigationBar"
import ResultsList from "./components/ResultsList"
import exampleSpreadsheetImage from "./images/example_spreadsheet.png"
import Footer from "./components/Footer";

function App() {
  const [playersPerGame, setPlayersPerGame] = useState(4)
  const [names, setNames] = useState([])

  const handleNamesChange = (e) => {
    let tempNames = e.target.value.toUpperCase()
    setNames(tempNames.split(',').filter(n => n))
  }

  const handlePPGChange = (e) => {
    let ppg = parseInt(e.target.value)
    console.log("ppg",ppg)
    ppg ? setPlayersPerGame(ppg)  : setPlayersPerGame(0)
  }

  return (
    <>
      <NavigationBar/>
      <Container className="m-auto col-lg-5 col-md-6 col-12">
        <p>This tool generates a list of match-ups, in which fairness is maximised in the minimum number of games</p>
        <p className="blockquote-footer">
          Algorithm By Ethan <cite>(Roberts & Wright)</cite>
        </p>
        <InputGroup variant="outline-secondary">
          <FormControl as="textarea" aria-label="names" placeholder={"alpha, bravo, charlie, delta, echo, foxtrot, golf"} onChange={handleNamesChange}/>
        </InputGroup>
        <br/>
        <InputGroup className="mb-3 w-auto">
          <InputGroup.Text>Players Per Game</InputGroup.Text>
          <FormControl aria-label="Text input with dropdown button" onChange={handlePPGChange} defaultValue={4}/>
        </InputGroup>
      </Container>
      <hr/>
      <ResultsList playersPerGame={playersPerGame} names={names}/>
      <hr/>
      <Container className="m-auto col-lg-6 col-md-9 col-12">
        <h4 className="mb-4">Example Tournament With Spreadsheet</h4>
        <Row className="mw-100">
          <Col className="col-md-4 col-12">
            <p className="text-danger">You will need an application capable of opening CSVs, like Excel, Pages or Google Sheets.</p>
            <p>After each game, fill in the number of points each player received. At the end of the game, calculate the total.</p>
          </Col>
          <Col className="col-md-8 col-12p">
            <img src={exampleSpreadsheetImage} alt="example spreadsheet use" className="mw-100 mb-3"/>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  )
}

export default App
