import useAxios from "./14_useAxios_module"
import Button from 'react-bootstrap/Button';

const HookUseAxios = () => {

  const {loading, data, error, refetch } = useAxios({ url: "https://yts.mx/api/v2/list_movies.json"})
  console.log(`Loading: ${loading}`)
  console.log(`Data: ${JSON.stringify(data)}`)
  console.log(`Error: ${JSON.stringify(error)}`)

  return (
    <div>
      <h1>Hello</h1>
      <h2>{data && data.status}</h2>
      <h2>{loading && "Loading"}</h2>
      <Button onClick={refetch}>Refetch</Button>
    </div>
  );
}

export default HookUseAxios;
