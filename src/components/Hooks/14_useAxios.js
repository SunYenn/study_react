import useAxios from "./14_useAxios_module"

const HookUseAxios = () => {

  const {loading, data, error, refetch } = useAxios({ url: "https://yts.mx/api/v2/list_moviesssssss.json"})
  console.log(`Loading: ${loading}`)
  console.log(`Data: ${JSON.stringify(data)}`)
  console.log(`Error: ${JSON.stringify(error)}`)

  return (
    <div>
      <h1>Hello</h1>
      <h2>{data && data.status}</h2>
      <h2>{loading && "Loading"}</h2>
      <button className='btn' onClick={refetch}>Refetch</button>
    </div>
  );
}

export default HookUseAxios;
