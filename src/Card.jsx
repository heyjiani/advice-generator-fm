export default function Card(props) {
  const { id, advice } = props;

  return(
    <article>
      <h1>Advice #{id}</h1>
      <p>{advice}</p>
    </article>
  )
}