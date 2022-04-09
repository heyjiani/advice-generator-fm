export default function Card(props) {
  const { id, advice } = props;

  return(
    <article className="advice">
      <h1 className="advice__header">Advice #{id}</h1>
      <p className="advice__text">"{advice}"</p>
      <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
    </article>
  )
}