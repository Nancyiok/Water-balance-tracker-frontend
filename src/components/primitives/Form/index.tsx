import { useFormContext } from "react-hook-form";

function Form({ name, onSubmit, children = null }) {
  const { handleSubmit } = useFormContext();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {name ? <h1>{name}</h1> : null}
      <div>{children}</div>
    </form>
  );
}

export default Form;
