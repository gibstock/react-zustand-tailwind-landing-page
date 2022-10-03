import Button from "./Button"
import {BsFillPlayFill} from 'react-icons/bs'

const CTA = () => {
  return (
    <div className="flex flex-row gap-5">
      <Button version="two">Get 6 months free</Button>
      <Button version="three"><BsFillPlayFill color="#1c64f2"/>Watch video</Button>
    </div>
  )
}

export default CTA