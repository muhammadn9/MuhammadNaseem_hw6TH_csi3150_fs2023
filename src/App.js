// import React from "react";
// import "./App.css";
// import Hero from "./components/Hero/Hero";
// import TravelBlog from "./components/TravelBlog/TravelBlog";
// import TravelData from "./TravelData";

// function App() {
//   return (
//     <div className="App">
//       <Hero
//         backgroundImage={require("./assets/HeroSection-bg-image.jpg").default}
//         title="Your Travel Blog"
//         subtitle="Explore the world with us"
//       />

//       {TravelData.map((place) => (
//         <React.Fragment key={place.id}>
//           <TravelBlog placeData={place} />
//           {/* Add a divider or separator if needed */}
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import TravelBlog from "./components/TravelBlog/TravelBlog";
import TravelData from "./TravelData";

// Using 'default' property for better compatibility with ES6 modules
const backgroundImage = require("./assets/HeroSectionImage.png");

function App() {
  return (
    <div className="App">
      <Hero
        backgroundImage={backgroundImage}
        title="Welcome to My Travel Blog Website"
        subtitle="Here are some examples of locations with pictures of them followed by a blurb. Enjoy!"
      />

      {TravelData.map((place) => (
        <React.Fragment key={place.id}>
          <TravelBlog placeData={place} />
          {/* Add a divider or separator if needed */}
        </React.Fragment>
      ))}
    </div>
  );
}

export default App;
