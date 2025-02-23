import './styles.css'

function Banner({title}) {
    return (
    <div className="banner-container">
        <img alt="logo" src="logo.png" className="banner-logo"/>
        <h1 className="banner">{title}</h1>
    </div>
    )
}

export default Banner