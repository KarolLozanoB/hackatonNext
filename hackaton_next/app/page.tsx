function Navbar() {
  return (
    <nav style={{ background: 'black', color: 'white', padding: '10px' }}>
      <b>Navbar</b> Home Features Pricing About
      <input placeholder="Search" />
      <button style={{ color: 'blue' }}>Search</button>
    </nav>
  );
}

export default function Home() {
  return (
    <div>
      <Navbar />
      <br />
      <div style={{ transform: 'rotateY(180deg)' }}>
        <Navbar />
      </div>
    </div>
  );
}