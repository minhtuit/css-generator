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
      <br />
      <Link href="/border">Border</Link>

    </div>
  );
}

export default Home;