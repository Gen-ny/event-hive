export default function Navbar() {
return (
    <nav className="flex justify-between">
        <h1 className='text-2xl font-bold p-8 tracking-wide'><span>Event</span><span  className='text-purple-500 ml-2'>Hive</span></h1>
        
        <div className="mr-8 p-4">
            <button className="text-[10px] m-6">Login</button>
            <button className="text-[10px] text-white bg-purple-500 px-4 py-1.5">Signup</button>
        </div>
    </nav>
)
}
