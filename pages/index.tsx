import Link from 'next/link';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      Home page
      <br />
      <Link href="/box-shadow">Box Shadow</Link>
      <br />
      <Link href="/text-shadow">Text Shadow</Link>

    </div>
  );
}

export default Home;