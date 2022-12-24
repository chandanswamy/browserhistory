import './index.css'

const HistorySearchItem = props => {
  const {historyDetails, deleteHistoryItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  const onDelete = () => {
    deleteHistoryItem(id)
  }

  return (
    <li className="list-item">
      <div className="history-container">
        <p className="time-stamp">{timeAccessed}</p>
        <div className="history-item">
          <img src={logoUrl} alt="domain logo" className="domain-image" />
          <div className="title-domain-container">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
          <button
            testId="delete"
            type="button"
            className="button"
            onClick={onDelete}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistorySearchItem
