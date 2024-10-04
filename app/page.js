import Home from "./pages/home/page"
export const metadata = {
  name: "viewport",
  content: "width=device-width, initial-scale=1.0",
};


export default function app(){
  return(
    <div>
     <Home/>
    </div>
  )
}