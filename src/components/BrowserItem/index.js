import './index.css'

const BrowserItem = props => {
  const {items, deleteItem} = props

  const {timeAccessed, logoUrl, title, domainUrl, id} = items

  const onTap = () => {
    deleteItem(id)
  }

  return (
    <div className="m1">
      <li className="li">
        <p className="p1">{timeAccessed}</p>
        <div className="m2">
          <div className="m3">
            <img src={logoUrl} alt="domain logo" className="img2" />
            <p className="p2">{title}</p>
            <p className="p3">{domainUrl}</p>
          </div>
        </div>

        <div className="m4">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete"
            onClick={onTap}
          />

          <button data-testid="delete" type="button" onClick={onTap}>
            ...
          </button>
        </div>
      </li>
    </div>
  )
}

export default BrowserItem
