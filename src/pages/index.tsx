
interface HomeProps {
  episodes: any;
}

export default function Home(props: HomeProps) {
  return (
   <h1>Index</h1>
  )
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props : {
      episodes: data,
    }
  }
}