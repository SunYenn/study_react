import { Component } from 'react';
import { useParams } from 'react-router-dom';

// 함수형 컴포넌트
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

// 클래스형 컴포넌트
class Hi extends Component {
  render() {

    const { color } = this.props;

    return (
      <>
        <h1 style={{ color }}>Hi</h1>
      </>
    )
  }
}

function Home() {

  // vue 형식 : ${this.$route.query.name}
  const { name, color } = useParams();

  return (
    <div style={{'textAlign' : 'center'}}>
      <Hi color={'deeppink'} />
      <Hello />
      <Hello name="yeeun" color={'blue'} />
      <Hello name={name} color={color} />
    </div>
  )
}

export default Home; // 컴포넌트 내보내기