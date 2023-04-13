import { useNavigate } from "react-router-dom"

export default function About() {
  const btn = useNavigate('/');
  const Gotohome = () => {
    btn('/')
  }

  return (
    <div>
        <h1>This Is About Page</h1>
        <button onClick={Gotohome}>Go to Home</button>
    </div>
  )
}
