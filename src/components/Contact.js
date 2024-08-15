// const Contact = () => {
//   return (
//     <div>
//       <h1 className="text-3xl text-bold m-4 p-4">Contact Us Page</h1>
//       <form className="w-full h-96">
//         <label htmlFor="user_name">Name</label>
//         <input className="block" id="user_name" placeholder="Enter your name"></input>
//         <label htmlFor="user_name">Email Id</label>
//         <input id="user_name" className="block" placeholder="Enter your email id"></input>
//         <label htmlFor="user_message" className="block">Name</label>
//         <input id="user_message" type="text" placeholder="Enter your message"></input>
//         <button className="block">Submit</button>
//       </form>

//     </div>
//   );
// };
// export default Contact;
// // const Contact = () => {
// //   return (
// //     <div>
// //       <h1 className="text-3xl font-bold m-4 p-4">Contact Us Page</h1>
// //       <form className="w-full h-96">
// //         <label htmlFor="user_name">Name</label>
// //         <input id="user_name" placeholder="Enter your name" className="block mb-4"></input>
        
// //         <label htmlFor="user_email">Email Id</label>
// //         <input id="user_email" placeholder="Enter your email id" className="block mb-4"></input>
        
// //         <label htmlFor="user_message">Message</label>
// //         <input id="user_message" type="text" placeholder="Enter your message" className="block mb-4"></input>
        
// //         <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Contact;
import React from 'react';

const Contact = () => {
  return (
    <section className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="user_name"
            name="user_name"
            type="text"
            required
            placeholder="Enter your name"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="user_email" className="block text-sm font-medium text-gray-700">
            Email Id
          </label>
          <input
            id="user_email"
            name="user_email"
            type="email"
            required
            placeholder="Enter your email id"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="user_message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="user_message"
            name="user_message"
            required
            placeholder="Enter your message"
            rows="4"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="inline-flex justify-center px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
