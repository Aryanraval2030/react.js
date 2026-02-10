import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Bird } from 'lucide-react';


function Section1() {
    return (
        <div>
            <div className="w-screen mt-10 sm:flex tracking-wide overflow-x-hidden text-center">

                <div className="w-screen sm:w-full sm:pl-10 pl-2 ">
                    <h1 className="text-5xl font-semibold text-purple-500 mb-5">join our club</h1>
                    <h1 className="text-3xl font-semibold">yoga for your <br /> healthy life</h1>
                    <p className="mt-5">join our club and discover this true benefit of yoga enhance <br />  flexibility reduce stress, and embrace a healthir, balanced lifestyle with guided sessions made for everyone.</p>
                    <button className="mt-5 borde rounded-3xl px-8 py-2 bg-purple-700 text-white">book now</button>

                    <div className='flex mt-5 justify-center gap-3'>
                        <span className='rounded-3xl bg-purple-700  p-2'><Instagram  className='text-white' /></span>
                        <span className='rounded-3xl bg-purple-700 p-2'><Facebook /></span>
                        <span className='rounded-3xl bg-purple-700 p-2'><Bird /></span>
                    </div>
                </div>

                <div className="w-screen sm:w-full sm:pr-10 px-5 mt-2">
                    <img className=" h-full w-full object-cover rounded-3xl border-none" src="https://www.everydayyoga.com/cdn/shop/articles/yoga_1024x1024.jpg?v=1703853908" alt="yoga-img" />
                </div>
            </div>
        </div>
    )
}

export default Section1
