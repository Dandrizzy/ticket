import { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from "react-redux";
import { flight } from "../features/home/userSlice";
import { useNavigate } from "react-router-dom";
const style = "w-40 rounded-full py-1 text-center bg-blue-50/70";
const label = "py-2 text-sm";
function Main() {
 const [travelFrom, setTravelFrom] = useState('Canada');
 const [travelTo, setTravelTo] = useState('Ghana');
 const [travelDate, setTravelDate] = useState(null);
 const [returnDate, setReturnDate] = useState(null);
 const [totalAdults, setTotalAdults] = useState('');
 const [duration, setDuration] = useState('');
 const [airline, setAirline] = useState();
 const [price, setPrice] = useState('');
 const [firstName, setFirstName] = useState('');
 const [lastName, setLastName] = useState('');
 const dispatch = useDispatch();
 const navigate = useNavigate();

 function handleSubmit(e) {
  e.preventDefault();
  if (!travelFrom || !travelTo || !travelDate || !returnDate || !totalAdults || !duration || !airline || !price || !firstName || !lastName) return;

  dispatch(flight(travelFrom, travelTo, travelDate, returnDate, totalAdults, duration, airline, price, firstName, lastName,));

  navigate('/receipt');


 }
 return (
  <form onSubmit={handleSubmit}>
   <main className="flex px-2 py-3 items-center justify-between text-stone-700 flex-wrap bg-blue-200/90 ">

    <div className="grid py-2">
     <label className="py-2 text-sm" htmlFor="from">Traveling from</label>
     <input required className="w-40 rounded-full py-1 text-center bg-blue-50/70" type="text" placeholder="Home" id="from" value={travelFrom} onChange={e => setTravelFrom(e.target.value)} />
    </div>
    <div className="grid text-right py-2">
     <label className={label} htmlFor="to">Traveling to</label>
     <input required={true} className={style} type="text" placeholder="Abroad" id="to" value={travelTo} onChange={e => setTravelTo(e.target.value)} />
    </div>
    <div className="grid py-2">
     <label className={label} htmlFor="travelDate">Traveling date</label>
     <input required className={style} type="date" id="travelDate" value={travelDate} onChange={e => setTravelDate(e.target.value)} />
    </div>
    <div className="grid text-right py-2">
     <label className={label} htmlFor="returnDate">Returning date</label>
     <input required className={style} type="date" id="returnDate" value={returnDate} onChange={e => setReturnDate(e.target.value)} />
    </div>

    <div className="grid text-right py-2">
     <label className={label} htmlFor="adults">Total adults</label>
     <input required className={style} type="number" placeholder="1" id="adults" value={totalAdults} onChange={e => setTotalAdults(+e.target.value)} />
    </div>
    <div className="grid py-2">
     <label className={label} htmlFor="duration">Duration</label>
     <input required className={style} type="text" placeholder="3 h 23 m" id="duration" value={duration} onChange={e => setDuration(e.target.value)} />
    </div>
    <div className="grid text-right py-2">
     <label className={label} htmlFor="airline">Airline</label>
     <input required className={style} type="text" placeholder="Qatar Airways" id="airline" value={airline} onChange={e => setAirline(e.target.value)} />
    </div>

    <div className="grid py-2">
     <label className={label} htmlFor="price">Price</label>
     <input required className={style} type="number" placeholder="$2,589.87" id="price" value={price} onChange={e => setPrice(+e.target.value)} />
    </div>

    <div className="grid py-2">
     <label className={label} htmlFor="firstName">First name</label>
     <input required className={style} type="text" placeholder="Penny" id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
    </div>
    <div className="grid text-right py-2">
     <label className={label} htmlFor="lastName">Last name</label>
     <input required className={style} type="text" placeholder="Gray" id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
    </div>



   </main>
   <div className="flex items-center justify-center bg-blue-200/90  py-14">
    <button onSubmit={handleSubmit} className="border border-blue-500 rounded-full text-sm py-2 px-5 text-stone-800 font-semibold bg-blue-500 focus:outline-none focus:ring focus:ring-blue-600 focus:ring-offset-1 hover:bg-blue-400 ">Let&apos;s go ✈</button>
   </div>
  </form>
 );
}

export default Main;
