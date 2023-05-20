import "./header.css"

function Header() {
  return (
    <header>
      <h1>LeetCode</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/signupPage">SignUp</a></li>
          <li><a href="/loginPage">Login</a></li>
          <li><a href="/problemsPage">Problems</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
