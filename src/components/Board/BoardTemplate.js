function BoardTemplate({ children }) {

    return (
        <div className='container-wrap'>
            <div className="title-area">
                <h3>게시판</h3>
            </div>
            <div className="board-area">
                {children}
            </div>
        </div>
    )
}

export default BoardTemplate