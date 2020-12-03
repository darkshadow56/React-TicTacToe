import React, {useState} from 'react';
import Icon from './Components/Icon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Card, Container, Row, Col, Button, CardBody} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '../public/tictactoe-logo.svg';


//Checking for tie


// Declaring array
const itemArray = new Array(9).fill("empty")
//array ends
//setting counter
// let counter = 0;
let counter = 0;


//app function starts
const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");
  
//Tie game 
// const tieGame =() =>{

//    toast("Please reload the game ;-)", {type: "info"});
// }


  //reload function starts
const reloadGame = () => {
  setIsCross(false);
  setWinMessage("");
  counter = 0;
  itemArray.fill("empty", 0, 9);
  
}
//function to check winner starts here
const checkIsWinner =() => {
if (itemArray[0] === itemArray[1] &&
    itemArray[0] === itemArray[2] &&
    itemArray[0] !== "empty") 
 {
  setWinMessage(`${itemArray[0]} wins`)
 }
else if(itemArray[3] !== "empty" &&
itemArray[3] === itemArray[4] &&
itemArray[4] === itemArray[5])
{
  setWinMessage(`${itemArray[3]} wins`)
} 
else if(itemArray[6] !== "empty" &&
itemArray[6] === itemArray[7] &&
itemArray[7] === itemArray[8])
{
  setWinMessage(`${itemArray[6]} wins`)
} 
else if(itemArray[0] !== "empty" &&
itemArray[0] === itemArray[3] &&
itemArray[3] === itemArray[6])
{
  setWinMessage(`${itemArray[0]} wins`)
} 
else if(itemArray[1] !== "empty" &&
itemArray[1] === itemArray[4] &&
itemArray[4] === itemArray[7])
{
  setWinMessage(`${itemArray[1]} wins`)
} 
else if(itemArray[2] !== "empty" &&
itemArray[2] === itemArray[5] &&
itemArray[5] === itemArray[8])
{
  setWinMessage(`${itemArray[2]} wins`)
} 
else if(itemArray[0] !== "empty" &&
itemArray[0] === itemArray[4] &&
itemArray[4] === itemArray[8])
{
  setWinMessage(`${itemArray[0]} wins`)
} 
else if(itemArray[2] !== "empty" &&
itemArray[2] === itemArray[4] &&
itemArray[4] === itemArray[6])
{
  setWinMessage(`${itemArray[2]} wins`)
}
else if(counter >= 9)
{
  setWinMessage('Its a Tie');
}
};

//CheckWin method ends here

// const tieGame = (setIsCross, isCross) =>{
//   if ( isCross ? "cross" : "circle" === 'false'){
//     return toast("It's an Tie Please reload the game", {type: "error"})
    
//   }
// }
//function to change/switch player sttarts here 
const changeItem = itemNumber => {
  counter = counter + 1;
  if (winMessage){
    return toast(winMessage, { type: "success" });
  }
  if(itemArray[itemNumber] === "empty"){
itemArray[itemNumber] = isCross ? "cross" : "circle";
setIsCross(!isCross);
  }else{
    return toast("already filled", {type: "error"});
  }
checkIsWinner();
};
  return (
    
    <Container className="p-4" >
    <ToastContainer position="bottom-center"/>
    <Row>
      <Col md={6} className="offset-md-3">
        {winMessage === 'tie' || winMessage ? (<div className="mb-2 mt-2"><h1 className="text-success text-uppercase text-center">
          {winMessage}</h1>
          <Button className="reload-button" color="success" block onClick={reloadGame} >Reload The Game</Button></div>) : (
            
            <h1 className="text-center turn-text pb-4">{isCross ? "Cross" : "Circle"}s turn</h1>
          ) }
        <div className="grid">
          {itemArray.map((item, index) => (
            <Card color="warning" onClick={ () => changeItem(index) }>
            <CardBody className="box">
              <Icon name={item} />
            </CardBody>
            </Card>
          ))}
        </div>
      </Col>
    </Row>
    </Container> 
    
  );
};


export default App;
