import { useSearchParams } from 'react-router-dom';
import { formatCurrency, formatDate, formatDay } from '../../helper/format';
const ticket = Date.now();
function Receipt() {

 const [params] = useSearchParams();
 const objString = (params.get('obj'));
 const obj = JSON.parse(objString);
 const { from, to, travelDate, returnDate, adults, duration, airline, price, fullName, fromCode, toCode } = obj;


 const subtotal = price * adults;
 const tax = subtotal * 0.075;

 const creditCard = Math.floor(Math.random() * 1000);

 return (
  <div className="sm:flex sm:justify-center sm:text-sm">


   <div className="bg-zinc-300 text-[0.5rem] text-slate-600 w-[595px] h-[842px] p-4 ">
    <div className="">
     <h1 className="text-blue-800 text-sm">Booking Confirmation</h1>
     <div className="flex gap-12">
      <p className="text-[0.5rem]">Booking: {ticket} |</p>
      <p className="text-[0.5rem]">| Booked on {formatDate(new Date().toLocaleDateString())}</p>
     </div>
     <h1 className="text-sm text-blue-800">✈ Flight Details</h1>
    </div>

    <div className="flex justify-between p-2 bg-zinc-50 mt-2">
     <div className="grow">
      <h1 className="text-sm text-blue-800">Departing Flight</h1>
      <div className="flex gap-2">
       <div className="">
        <div className="flex gap-6 mb-2">
         <h1 className=" rotate-45">✈</h1>
         <div>
          <p>{airline}</p>
          <p>Flight JQ112</p>
         </div>
        </div>
        <div>
         <p className="">Nonstop | Coach</p>
         <p className="">Baggage Fees | Visa & Passport Info</p>
        </div>
       </div>
       <div className="ps-8">
        <h1 className="text-sm">{duration}</h1>
        <p>{from}</p>
        <h1 className="text-sm">{fromCode} - {formatDay(travelDate)}</h1>
        <p className="mt-2">{to}</p>
        <h1 className="text-sm">{toCode} - {formatDay(returnDate)}</h1>
        <p>{returnDate}</p>
       </div>
      </div>
     </div>
     <div className="">
      <p className="">Travel Time:</p>
      <p className="">{duration}</p>
      <div className="bg-zinc-300 py-2 ps-1 pe-4 ">
       <p>Seats Selected:</p>
       <p className="bg-yellow-300 w-full pe-5 mt-0.5">Airport Check in</p>
      </div>
     </div>
    </div>

    <div className="bg-zinc-50 text-center pb-2">
     <p className="bg-yellow-100/50 py-2 ">✈ + 🛏 <span className="text-blue-800">Exclusive savings! </span>Add a Hotel and Save up to 25%</p>
    </div>

    <div className="bg-zinc-50">
     <div><p className="text-center py-3 bg-yellow-900/20">Check airline <span className="text-blue-600">Fare Rules.</span> Most airlines charge baggage fees, check the <span className="text-blue-600">Baggage Fees</span> for completed details</p></div>
     <div className="py-4  px-2">
      <div className="flex gap-28 ">
       <h1 className="text-blue-800 text-sm">Traveler<br />Information</h1>
       <p className="text-red-600">Please verify the travelers name below. Rules require travelers full names <br />match exactly passport or government issued photo ID. If you <br />need to make a name change, please call us.</p>
      </div>
      <div className="flex gap-20 py-1">
       <div className="">
        <p className="pt-2">E-Ticket Number</p>
        <h2 className="pt-2">{ticket}</h2>
        <p className="pt-2">Special Services</p>
        <p className="pt-2">No Special Service Requested</p>
       </div>
       <div className="">
        <p className="pt-2">Traveler Name</p>
        <h2 className="pt-2">{fullName}</h2>
        <p className="pt-2">Meal Preference</p>
        <p className="pt-2">Any Meal</p>
       </div>
       <div className="">
        <p className="pt-2">Requests</p>
        <h2 className="pt-2">🍴</h2>
       </div>
       <div className="">
        <p className="pt-2">Type</p>
        <h2 className="pt-2">Adult</h2>
       </div>
      </div>

     </div>
     <div><p className="text-center py-3 bg-yellow-900/20">Disclaimer: Special requests are not guaranteed. Contact your airline to confirm they have received and confirmed your requests.</p></div>
    </div>
    <div className="">
     <h1 className="text-blue-800 text-sm pt-2">Billing Details <span className="text-[0.5rem]">(USD)</span></h1>
     <hr className="border-t-stone-400" />
     <div className="flex gap-4 pt-2">
      <p className="">Method: </p>
      <p className="">Credit Card ending in {creditCard < 1000 ? creditCard + 1000 : creditCard}</p>
     </div>
     <p className="pb-1">Email:</p> <hr className="border-t-stone-400" />
     <h1 className="text-blue-800 text-[10px] pt-2">Flight Price Details</h1> <hr className="border-t-stone-400 border-dotted" />
     <div className="flex justify-between items-center">
      <p>1 Adult Ticket</p>
      <p>{formatCurrency(price)}</p>
     </div> <hr className="border-t-stone-400 border-dotted" />
     <div className="flex justify-between items-center">
      <p>Subtotal</p>
      <p>{formatCurrency(subtotal)}</p>
     </div> <hr className="border-t-stone-400 border-dotted" />
     <div className="flex justify-between items-center">
      <h1 className="text-blue-800 text-[8px]">Taxes and Agency Fees</h1>
      <p>{formatCurrency(tax)}</p>
     </div> <hr className="border-t-stone-400 border-dotted" />
     <div className="flex justify-between items-center">
      <p className="pb-2">Flight Total</p>
      <p>{formatCurrency(subtotal + tax)}</p>
     </div> <hr className="border-t-stone-400" />
     <div className="flex justify-between items-center">
      <h1 className="text-blue-800 text-sm pt-2">Total Charge</h1>
      <p>{formatCurrency(subtotal + tax)}</p>
     </div> <hr className="border-t-stone-400 border-2" />
     <p className="py-4">Please Note</p>

    </div>

    <ol>
     <li>All fares are quoted in USD.</li>
     <li>Your credit card may be billed in multiple charges totaling to the above amount.</li>
     <li>Some airline may charge Baggage Fees.</li>
    </ol>

    <div className="text-stone-400 pt-4">
     <p>Privacy Policy</p>
     <p>We&apos;re committed to protecting your privacy. See our privacy policy for details</p>

     <p className="pt-4">Contact Us</p>
     <p>If you have any question please email us or contact us.</p>
     <footer>&copy; {new Date().getFullYear()} All right reserved.</footer>
    </div>

   </div>

  </div>
 );
}

export default Receipt;
