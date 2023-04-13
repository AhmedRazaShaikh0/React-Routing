import { useNavigate } from "react-router-dom"

export default function Contact() {
  const btn = useNavigate('/');
  const Gotohome = () => {
    btn('/Review')
  }

  return (
    <div>
        <h1>This Is Contact Page</h1>
        <button onClick={Gotohome}>Go to Review</button>
    </div>
  )
}
