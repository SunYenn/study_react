import { useParams } from 'react-router-dom';

// react의 가장 기본적인 형태
function base() {
  return (
    // 반드시 하나의 element로 구성되어야 함.
    <>
    </>
  )
}

function Hello({ color, name }) {

  return (
    <>
      <h2 style={{ color }}>{name}님 안녕하세요.</h2>
    </>
  )
}

// Hello 컴포넌트에 기본값 설정
Hello.defaultProps = {
  name: 'OO'
}

function Home() {

  // ${this.$route.query.name} : vue 형식
  const { name, color } = useParams();

  return (
    <div style={{'textAlign' : 'center'}}>
      <Hello />
      <Hello name={name} color={color}/>
      <Hello name="예은" color={'blue'} />
    </div>
  )
}

export default Home; // 컴포넌트 내보내기