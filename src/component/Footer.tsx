const Footer = () => {
  return (
      <nav className="fixed-bottom pb-4">
        <ul className="mb-2 d-flex flex-row justify-content-center align-items-center">
          <li className="nav-item">
            <a className="nav-link text-warning mx-3"href="/">- Home -</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-warning mx-3" href="/result">- Result -</a>
          </li>
          <li className="nav-item">
            <a className="nav-link  text-warning mx-3" href="/more">- More -</a>
          </li>
          <span className="text-warning">Powered by GIPHY</span>
        </ul>
      </nav>   
  )
}

export default Footer