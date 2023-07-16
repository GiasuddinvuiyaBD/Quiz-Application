function ScoreCard({ totalScore, resetQuiz })
{
    return(
        <>
            <div className="result">
                <h3>Result Page</h3>
                <p className="max-reset"><small>you can reset 2 times</small></p>
                <p>Score : {totalScore}</p>
                <button onClick={resetQuiz} className="btn restart-btn">
                    Reset Quiz
                </button>
            </div>
        </>
    )
}

export default ScoreCard;