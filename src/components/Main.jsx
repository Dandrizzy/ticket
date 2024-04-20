import { Flex, Text, TextField } from '@radix-ui/themes';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import { Form, useNavigate } from "react-router-dom";

function Main() {

 const { register, handleSubmit } = useForm();
 const navigate = useNavigate();


 const navigateWithObj = (obj) => {
  const queryString = encodeURIComponent(JSON.stringify(obj));
  navigate(`/receipt?obj=${queryString.toString()}`);
 };

 function submit(data) {
  if (!data) return;
  navigateWithObj(data);
 }
 return (
  <Form className='p-8 bg-blue-200/90 max-w-4xl mx-auto' onSubmit={handleSubmit(submit)}>
   <Flex direction="column" gap="3">
    <label>
     <Text as="div" size="2" mb="1" weight="bold">
      From
     </Text>
     <TextField.Root
      {...register('from')}
      id='from'
      required
      defaultValue="Canada"
      placeholder="Enter where you are traveling from"
     />
    </label>
    <label>
     <Text as="div" size="2" mb="1" weight="bold">
      To
     </Text>
     <TextField.Root
      {...register('to')}
      id='to'
      required
      defaultValue="Ireland"
      placeholder="Enter your destination"
     />
    </label>
    <label>
     <Text as="div" size="2" mb="1" weight="bold">
      Travel Date
     </Text>
     <TextField.Root
      {...register('travelDate')}
      type='date'
      id='travelDate'
      required
     />
    </label>
    <label>
     <Text as="div" size="2" mb="1" weight="bold">
      Return Date
     </Text>
     <TextField.Root
      type='date'
      {...register('returnDate')}
      required
      id='returnDate'
     />
    </label>
    <label>
     <Text as="div" size="2" mb="1" weight="bold">
      Adults
     </Text>
     <TextField.Root
      {...register('adults')}
      id='adults'
      type='number'
      required
      defaultValue={1}
      placeholder="Number of adults"
     />
    </label>
    <label>
     <Text as="div" size="2" mb="1" weight="bold">
      Duration
     </Text>
     <TextField.Root
      {...register('duration')}
      id='duration'
      required
      defaultValue="7hrs 3min"
      placeholder="Enter flight duration"
     />
    </label>
    <label>
     <Text as="div" size="2" mb="1" weight="bold">
      Airline
     </Text>
     <TextField.Root
      {...register('airline')}
      required
      defaultValue="Air Canada"
      placeholder="Enter flight airline"
     />
    </label>
    <label>
     <Text as="div" size="2" mb="1" weight="bold">
      Price
     </Text>
     <TextField.Root
      {...register('price')}
      id='price'
      required
      defaultValue={1500}
      placeholder="Enter ticket price"
     />
    </label>
    <label>
     <Text as="div" size="2" mb="1" weight="bold">
      Full Name
     </Text>
     <TextField.Root
      {...register('fullName')}
      required
      defaultValue="Freja Johnsen"
      placeholder="Enter your full name"
     />
    </label>

    <label>
     <Text as="div" size="2" mb="1" weight="bold">
      From code
     </Text>
     <TextField.Root
      {...register('fromCode')}
      required
      id='fromCode'
      defaultValue="YYZ"
      placeholder="Enter your country CAC"
     />
    </label>
    <label>
     <Text as="div" size="2" mb="1" weight="bold">
      To code
     </Text>
     <TextField.Root
      {...register('toCode')}
      id='toCode'
      required
      defaultValue="DUB"
      placeholder="Enter your destination CAC"
     />
    </label>
   </Flex>


   <div className="flex items-center justify-center bg-blue-200/90  py-14">
    <button type="submit" className="border border-blue-500 rounded-full text-sm py-2 px-5 text-stone-800 font-semibold bg-blue-500 focus:outline-none focus:ring focus:ring-blue-600 focus:ring-offset-1 hover:bg-blue-400 ">Let&apos;s go ✈</button>
   </div>
  </Form>
 );
}

export default Main;
