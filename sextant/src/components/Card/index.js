import "./styles.css"

function Card({heading,children}) {
  return (
    <div className="card-container">
        <h4 className="card-heading">{heading}</h4>
        {children}
    </div>
  )
}

export default Card