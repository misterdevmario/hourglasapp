import { useAppInfo } from "../context/AppContext";



function Application() {
const {setAppInfo} = useAppInfo()

  return (
   <>
    <div>Application</div>
   
   </>
  )
}

export default Application