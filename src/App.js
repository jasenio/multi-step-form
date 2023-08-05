import './styles/App.css';
import {useState, createContext} from "react";
import {useMediaQuery} from "react-responsive";
import {Personal} from "./Personal";
import {Plan} from "./Plan";
import {Addon} from "./Addon";
import {Finish} from "./Finish";
import {ThankYou} from "./ThankYou";
export const FormContext = createContext();
function App() {
  const desktop = useMediaQuery({
    query: '(min-width: 1000px)'
  });
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [MoYe, setMoYe] = useState(false);
  const [plan, setPlan] = useState("");
  const [addons, setAddons] = useState([]);
  return (
    <FormContext.Provider value = {{MoYe, setMoYe, plan, setPlan, addons, setAddons, page, setPage, name, setName, email, setEmail, number, setNumber,}}>
      <div className="form">
        {!desktop? <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="375" height="172" viewBox="0 0 375 172"><defs><path id="a" d="M0 0h375v172H0z"/></defs><g fill="none" fillRule="evenodd"><mask id="b" fill="#fff"><use xlinkHref="#a"/></mask><use xlinkHref="#a" fill="#483EFF"/><g mask="url(#b)"><g transform="translate(-151.029 -133.957)"><path fill="#6259FF" d="M79.546 349.634c54.547 128.646 292.524 204.132 354.626 99.852 62.102-104.28-95.035-123.204-150.583-230.963-55.547-107.759-98.711-175.015-178.973-150.466C24.354 92.607 25 220.987 79.546 349.634Z"/><ellipse cx="129.864" cy="258.711" fill="#FFAF7E" rx="96.329" ry="96.373"/><path fill="#F9818E" d="M464.88 433.146c87.31-40.69 133.585-206.525 60.253-246.82-73.333-40.293-82.587 68.465-155.485 109.343-72.898 40.877-118.192 72.245-99.348 126.973 18.845 54.728 107.27 51.194 194.58 10.504Z"/><g stroke="#FFF" strokeLinecap="round" strokeLinejoin="bevel" strokeWidth="5"><path d="m367.336 243.125 15.263-15.549M430.872 251.016l-17.995-15.112M399.36 271.751l-9.94 21.293"/></g></g></g></g></svg>
          : <svg xmlns="http://www.w3.org/2000/svg" width="274" height="568" fill="none" viewBox="0 0 274 568"><rect width="274" height="568" fill="#483EFF" rx="10"/><mask id="a" width="274" height="568" x="0" y="0" maskUnits="userSpaceOnUse" style={{maskType:"alpha"}}><rect width="274" height="568" fill="#fff" rx="10"/></mask><g mask="url(#a)"><path fill="#6259FF" fill-rule="evenodd" d="M-34.692 543.101C3.247 632.538 168.767 685.017 211.96 612.52c43.194-72.497-66.099-85.653-104.735-160.569-38.635-74.916-68.657-121.674-124.482-104.607-55.824 17.068-55.375 106.32-17.436 195.757Z" clip-rule="evenodd"/><path fill="#F9818E" fill-rule="evenodd" d="M233.095 601.153c60.679-28.278 92.839-143.526 41.875-171.528-50.965-28.003-57.397 47.579-108.059 75.987-50.662 28.408-82.14 50.207-69.044 88.241 13.096 38.034 74.549 35.578 135.228 7.3Z" clip-rule="evenodd"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="5" d="m165.305 469.097 10.607-10.806M209.461 474.581l-12.506-10.503M187.56 488.991l-6.908 14.798"/><path fill="#FFAF7E" d="M.305 546.891c37.003 0 67-29.997 67-67s-29.997-67-67-67-67 29.997-67 67 29.997 67 67 67Z"/></g></svg>
        }
        <div className = "displayPageNum">
          <div >
            <p style = {{border: page!==1 &&  "solid 1px white", backgroundColor: page===1? "hsl(206, 94%, 87%)":"transparent", color: page===1? "hsl(213, 96%, 18%)":"white"}}>1</p>
            {desktop && <p className = "step">STEP 1 <span>YOUR INFO</span></p>}
          </div>
          <div>
            <p style = {{border: page!==2 && "solid 1px white", backgroundColor: page===2? "hsl(206, 94%, 87%)":"transparent", color: page===2? "hsl(213, 96%, 18%)":"white"}}>2</p>
            {desktop && <p className = "step">STEP 2 <span>SELECT PLAN</span></p>}
          </div>
          <div >
            <p style = {{border: page!==3 && "solid 1px white", backgroundColor: page===3? "hsl(206, 94%, 87%)":"transparent", color: page===3? "hsl(213, 96%, 18%)":"white"}}>3</p>
            {desktop && <p className = "step">STEP 3 <span>ADD-ONS</span></p>}
          </div>
          <div >
            <p style = {{border: page<4 && "solid 1px white", backgroundColor: page>=4? "hsl(206, 94%, 87%)":"transparent", color: page>=4? "hsl(213, 96%, 18%)":"white"}}>4</p>
            {desktop && <p className = "step">STEP 4 <span>SUMMARY</span></p>}
          </div>
        </div>
        {page===1 && <Personal/>}
        {page===2 && <Plan />}
        {page===3 && <Addon />}
        {page===4 && <Finish />}
        {page===5 && <ThankYou />}
        {page <5 && 
          <div className="nextStep">
            {(page>1 && page <5) && <button className = "back" type = "button" onClick = {()=>{setPage(page-1)}}>Go Back</button>}
            <button className = "sub" type = "submit" form = "p1">Next step</button>
          </div>
        }
      </div>

    </FormContext.Provider>
  );
}

export default App;
