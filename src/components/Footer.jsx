import { Linkedin, Instagram, Facebook } from 'lucide-react';

// Usage
const App = () => {
  return <Camera color="red" size={48} />;
};


function Footer(){
    return (
        <footer className='bg-navy-blue text-white text-center justify-between'>
            <h1 className='text-2xl font-bold p-8 tracking-wide'><span>Event</span><span  className='text-purple-500 ml-2'>Hive</span></h1>
            <form>
                <input className='text-zinc-600 bg-white text-[10px] px-8 py-2 justify-between rounded-[3px]' type="email" placeholder="Enter your mail" name="email"/>
                <button className='text-[10px] bg-purple-500 px-6 py-2 ml-2 rounded-[3px]' type="submit">Subscribe</button>
            </form>

            <div className='text-[10px] space-x-8 p-8'>
                <span>Home</span>
                <span>About</span>
                <span>Services</span>
                <span>Get in Touch</span>
                <span>FAQs</span>
            </div>

            <hr className='ml-4 mr-6' />


            <div className='flex justify-between'>
                <div className='text-[8px] space-x-4 p-4'>
                    <button className='bg-purple-500 px-2 py-1 rounded-[3px]'>English</button>
                    <button>French</button>
                    <button>Hindi</button>
                </div>

                <div className='flex space-x-2 p-4 mt-1'>
                    <Linkedin size={15}/>
                    <Instagram size={15}/>
                    <Facebook size={15}/>
                </div>

                <div><p className='text-[10px] items-center p-6'>Non Copyrighted© 2025 Upload by EventHive</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer