import Head from "next/head";
import CardList from "../comps/CardList";

export const getStaticProps = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const todos = await res.json();

  return {
      props: {todos},
  }

}

export default function Home({ todos }) {
  return (
    <>
    <Head>
      <title>Todoapp - Homepage</title>
    </Head>
    <div>
      <CardList todos={todos}/>
    </div>
    </>
  )
}
