import Formulario from './formulario';
import Timer from './timer';

function Navbar() {
  return (
    <nav style={{ background: 'black', color: 'white', padding: '10px' }}>
      <b>Navbar</b> Home Features Pricing About
      <input placeholder="Search" style={{ background: 'white', color: 'black' }} />
      <button style={{ color: 'blue' }}>Search</button>
    </nav>
  );
}

type HomeProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default function Home({ searchParams }: HomeProps) {
  return (
    <div>
      <Navbar />
      <br />
      <div style={{ transform: 'rotateY(180deg)' }}>
        <Navbar />
      </div>

      <Formulario searchParams={searchParams} />

      <Timer />
    </div>
  );
}