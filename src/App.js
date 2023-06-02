import Moviesex from './props1';



let title = "propsExample";
let imageUrl = "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/06/cartoons-1655022560.jpg"


function App() {
  return (
    <div className="App">
     <Movies/>
     <Moviesex title = {title} imageUrl={imageUrl}/>
     <Movieswithprops title = {title} imageUrl={imageUrl}/>
    </div>
  );
}


function Movies(){
  return(
    <div>
      <h1>{title}</h1>
      <img src={imageUrl} alt=''/>
    </div>
  )
}

function Movieswithprops(props){
  return(
    <div>
      <h1>{props.title}</h1>
      <img src={props.imageUrl} alt=''/>
    </div>
  )
}
export default App;
