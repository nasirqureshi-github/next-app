"use client";

const LoginModal = ({ onClose }) => {
  return (
      <form>
    <div className="fixed inset-0 bg-black/10 backdrop-blur-xs flex justify-center items-center z-50">
      <div className=" bg-white p-6 rounded-lg w-80 md:w-96 ">
        <h2 className="text-xl font-bold mb-4 text-black">Login</h2>
        <input type="email" placeholder="Email" required className=" text-black w-full mb-3 p-2 border border-black/20 outline-lime-400 rounded"/>
        <input type="password" placeholder="Password" required className=" text-black w-full mb-3 p-2 border border-black/20 outline-lime-400 rounded" />
        <button className="bg-lime-400 text-black px-4 py-2 rounded w-full cursor-pointer ">Login</button>
        <button onClick={onClose} className="mt-3 text-xl text-black cursor-pointer">Close</button>
      </div>
    </div>
    </form>
  );
  
};

export default LoginModal;
