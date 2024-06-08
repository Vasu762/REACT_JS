import TaskApp from './List_array';
// 1.Passing the updater function

// import { useState } from 'react';

// export default function Counter() {
//   const [age, setAge] = useState(42);

//   function increment() {
//     setAge(a => a + 1);
//   }

//   return (
//     <>
//       <h1>Your age: {age}</h1>
//       <h1>Passing the update function</h1>
//       <button onClick={() => {
//         increment();
//         increment();
//         increment();
//       }}>+3</button>
//       <button onClick={() => {
//         increment();
//       }}>+1</button>
//     </>
//   );
// }





//2. Passing the next state directly 


// import { useState } from 'react';

// export default function Counter() {
//   const [age, setAge] = useState(42);

//   function increment() {
//     setAge(age + 1);
//   }

//   return (
//     <>
//       <div className='bg-amber-400'>
//         <h1> Passing the next state directly:</h1>
//         <h1 className='font-bold'>Your age: {age}</h1>
//         <button className='bg-cyan-100 border-2 border-solid  border-red-600 hover:bg-cyan-950 text-white m-3' onClick={() => {
//           increment();
//           increment();
//           increment();
//         }}>+3</button>
//         <button className='bg-cyan-100 border-2 border-solid  border-red-600 hover:bg-cyan-950 text-white' onClick={() => {
//           increment();
//         }}>+1</button>
//       </div>
//     </>
//   );
// }




// 3.Form (object) 

// import { useState } from 'react';

// export default function Form() {
//   const [form, setForm] = useState({
//     firstName: 'Barbara',
//     lastName: 'Hepworth',
//       email: 'bhepworth@sculpture.com',
//   });

//   return (
//     <>
//     <div className='bg-green-50'>
//       <label>
//         First name:
//         <input className='bg-indigo-500'
//           value={form.firstName}
//           onChange={e => {
//             setForm({
//               ...form,
//               firstName: e.target.value
//             });
//           }}
//         />
//       </label>
//       <label>
//         Last name:
//         <input className='bg-indigo-500'
//           value={form.lastName}
//           onChange={e => {
//             setForm({
//               ...form,
//               lastName: e.target.value
//             });
//           }}
//         />
//       </label>
//       <label>
//         Email:
//         <input className='bg-indigo-500'
//           value={form.email}
//           onChange={e => {
//             setForm({
//               ...form,
//               email: e.target.value
//             });
//           }}
//         />
//       </label>
//       <p>
//         {form.firstName}{' '}
//         {form.lastName}{' '}
//         ({form.email})
//       </p>
//     </div>
//     </>
//   );
// }









// Form (nested object) 

// import { useState } from 'react';

// export default function Form() {
//   const [person, setPerson] = useState({
//     name: 'Niki de Saint Phalle',
//     artwork: {
//       title: 'Blue Nana',
//       city: 'Hamburg',
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzS1ZeDzhagww0gXwic09UMLVxx6GB1YNeR9w7u1mpmA&s',
//     }
//   });

//   function handleNameChange(e) {
//     setPerson({
//       ...person,
//       name: e.target.value
//     });
//   }

//   function handleTitleChange(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         title: e.target.value
//       }
//     });
//   }

//   function handleCityChange(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         city: e.target.value
//       }
//     });
//   }

//   function handleImageChange(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         image: e.target.value
//       }
//     });
//   }

//   return (
//     <>
//       <div className='bg-orange-200'>

//         <label className='bg-red-300'>
//           Name:Z
//           <input className='bg-yellow-200 hover:bg-lime-300'
//             value={person.name}
//             onChange={handleNameChange}
//           />
//         </label>
//         <label className='bg-red-300'>
//           Title:
//           <input className='bg-yellow-200 hover:bg-lime-300'
//             value={person.artwork.title}
//             onChange={handleTitleChange}
//           />
//         </label>
//         <label className='bg-red-300'>
//           City:
//           <input className='bg-yellow-200 hover:bg-lime-300'
//             value={person.artwork.city}
//             onChange={handleCityChange}
//           />
//         </label>
//         <label className='bg-red-300'>
//           Image:
//           <input className='bg-yellow-200 hover:bg-lime-300'
//             value={person.artwork.image}
//             onChange={handleImageChange}
//           />
//         </label>
//         <p>
//           <i>{person.artwork.title}</i>
//           {' by '}
//           {person.name}
//           <br />
//           (located in {person.artwork.city})
//         </p>
//         <img
//           src={person.artwork.image}
//           alt={person.artwork.title}
//         />
//       </div>
//     </>
//   );
// }







// import React from 'react'

const App = () => {
  return (
    <div>
      <TaskApp/>
    </div>
  )
}

export default App










