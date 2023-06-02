import './App.css';
import Movies from './props1';



let title = "propsExample";
let imageUrl = "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/06/cartoons-1655022560.jpg"


function App() {
  return (
    <div className="App">
     <Movies title = {title} imageUrl={imageUrl}/>
    </div>
  );
}


// function Movies(){
//   return(
//     <div>
//       <h1>{title}</h1>
//       <img src={imageUrl}/>
//     </div>
//   )

// }
export default App;
