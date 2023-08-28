import React, { Component } from "react";

// 생명주기 메서드는 클래스형 컴포넌트에서만 사용 가능
class LifeCycleFC extends Component {

  state = {
    number: 0,
    color: null
  };

  myRef = null; // ref 를 설정 할 부분

  // <마운트될 때 실행> ---------------------------------------------------------------------------
  /** 
   * constructor
   * getDerivedStateFromProps
   * render
   * componentDidMount
   */
  // 컴포넌트의 생성자 메서드, 가장 먼저 실행
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  // props로 받아온 것을 state에 넣어주고 싶을 때 사용
  // static 필수, return값은 state로 설정됨.
  // null 반환 시 아무 일도 발생하지 않음
  // 렌더링 전 호출, 리렌더링 전에도 매번 실행
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  // 컴포넌트를 렌더링하는 메서드
  render() {
    console.log("render");

    const style = {
      color: this.props.color
    };

    return (
      <div className="center">
        <h1 style={style} ref={ref => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button className="btn" onClick={this.handleClick}>더하기</button>
      </div>
    );
  }

  // 컴포넌트의 첫번째 렌더링이 마치고 나면 호출되는 메서드
  // 이 메서드가 호출되는 시점에는 우리가 만든 컴포넌트가 화면에 나타난 상태
  // ajax 요청, DOM의 속성을 읽거나 직접 변경하는 작업 진행 
  componentDidMount() {
    console.log("componentDidMount");
  }
  // </마운트될 때 실행> ---------------------------------------------------------------------------

  // <업데이트될 때 실행> ---------------------------------------------------------------------------
  /** 
   * getDerivedStateFromProps : 마운트될 때, 업데이트될 때 둘 다 호출
   * shouldComponentUpdate
   * render
   * getSnapshotBeforeUpdate
   * componentDidUpdate
   */

  // 컴포넌트를 리렌더링 할지 말지를 결정하는 메서드
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링X
    return nextState.number % 10 !== 4;
  }

  // 컴포넌트에 변화가 일어나기 직전의 DOM 상태를 가져와서 특정 값을 반환하면
  // 그 다음 발생하게 되는 componentDidUpdate 함수에서 받아와서 사용
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  // 리렌더링을 마치고, 화면에 우리가 원하는 변화가 모두 반영되고 난 위 호출되는 메서드
  // 3번째 파라미터로 getSnapshotBeforeUpdate에서 반환한 값 조회 가능
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapshot) {
      console.log("업데이트 되기 직전 색상: ", snapshot);
    }
  }

  // 컴포넌트가 화면에서 사라지기 직전에 호출
  // 주로 DOM에 직접 등록했던 이벤트 제거, setTimeout을 걸었다면 clearTimeout을 통해 제거
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  // </업데이트될 때 실행> ---------------------------------------------------------------------------

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

}

export default LifeCycleFC;
