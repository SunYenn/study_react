import '../styles/Immer.css'

function ImmerCpnt({data, form, onChange, onSubmit, onRemove}) {
  return (
    <>
      <form onSubmit={onSubmit} style={{ display: 'flex' }}>
        <input
          className='inputTxt'
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          className='inputTxt'
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button className='btn' type="submit">등록</button>
      </form>
      <div>
        <ul className='immerList'>
          {data.array.map(info => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              <p>아이디 : {info.username}</p>
              <p>이름 : {info.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>

  )
}

export default ImmerCpnt