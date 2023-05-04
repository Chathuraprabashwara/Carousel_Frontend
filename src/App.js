import Carousel from "./Component/Carousel";

function App() {
  return (
    <div>
    <Carousel Slides="1" Infinite="false"/>
    <Carousel Slides="4" Infinite="true"/>   
    <Carousel Slides="10" Infinite="false"/> 
     </div>
  )
}

export default App;
