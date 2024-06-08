import './App.css';

// function Recipe({ drinkers }) {
//   return (
//     <ol>
//       <li>Boil {drinkers} cups of water.</li>
//       <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
//       <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
//     </ol>
//   );
// }

// export default function App() {
//   return (
//     <section>
//       <h1>Spiced Chai Recipe</h1>
//       <h2>For two</h2>
//       <Recipe drinkers={3} />
//       <h2>For a gathering</h2>
//       <Recipe drinkers={4} />
//     </section>
//   );
// }


// -----------------------------

function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
    <h1>hello hw are you</h1>
    <h1>  hiiiii </h1>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}



// ---------------------------------------

