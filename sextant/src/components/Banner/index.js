import './styles.css'

function Banner({title}) {
    return (
    <div className="banner-container">
        <h1 className="banner">{title}</h1>
    </div>
    )
}

export default Banner