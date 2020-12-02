import Link from 'next/link';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/box-shadow">Box Shadow</Link>
      <br />
      <Link href="/text-shadow">Text Shadow</Link>
      <br />
      <Link href="/border">Border</Link>
      <br />
      <Link href="/transform">Transform</Link>
    </div>
  );
}

export default Home;