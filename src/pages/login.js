import Search from '../components/Search';

export default function Login (){
  return (
  <section id="login-container">
    <Search />
    <form id='login-form'>
      <input type="username" placeholder='username'/>
      <br/><br/>
      <input type="password" placeholder='password'/>
      <br/><br/>
      <button type='submit'>Sign In</button>
    <br/><br/>
    <a href="/signup" className="signup-para">Don't have an account? Sign Up!</a>
    </form>
  </section>
  )
}