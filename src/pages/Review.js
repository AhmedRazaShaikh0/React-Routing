import { useNavigate } from "react-router-dom"

export default function Review() {
  const btn = useNavigate('/');
  const Gotohome = () => {
    btn('/Contact')
  }

  return (
    <div>
        <h1>This Is Review Page</h1>
        <button onClick={Gotohome}>Go to Contact</button>
    </div>
  )
}
