import './style.css'

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const Header = () => {
  return <div className='header'>
    <h1>Naik's Pizza Co.</h1>
  </div>

}

const Menu = () => {
  return <main className='menu'>
    <h2>our menu</h2>
    <p className='intro'>
      Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
    </p>
    <div className='pizzas'>
      {
        pizzaData.map((pizza, index) => {
          return (<Pizza key={index} pizza={pizza} />);
        })
      }
    </div>

  </main>
}

const Pizza = ({ pizza }) => {
  const { name, ingredients, photoName, price, soldOut } = { ...pizza }

  // if (soldOut) return null;

  return <div className={`pizza ${soldOut ? "sold-out" : ""}`}>
    <img src={photoName} alt="focaccia" />
    <div>
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <span>{soldOut ? 'SOLD OUT' : '$' + price}</span>
    </div>
  </div >
}

const Footer = () => {
  const openHour = 13;
  const closeHour = 23;
  const currHour = new Date().getHours();
  let isOpen = openHour <= currHour && currHour <= closeHour;

  if (isOpen) {
    return <footer className='footer'>
      {
        <p>We're currently open !!! Until {closeHour}:00 come order visit us or order online<br />
        </p>
      }
      <button className='order'>order now</button>
    </footer>
  }
  else {
    return <footer className='footer'>
      {
        <p>CLOSED - We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      }
    </footer>
  }
}


function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
