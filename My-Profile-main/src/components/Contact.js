
export default function Contact() {

    const config = {
        email: 'pavithra@gmail.com',
        phone: '8752362728'
    }
    return <section id="contact" className='flex flex-col bg-secondary px-5 py-32 text-white '>
        <div className='flex flex-col items-center'>
                 <h1 className=' text-4xl border-b-4 border-[#29094b] mb-5 w-[140px] font-bold'>Contact</h1>
                 <p className='pb-5'>If you want to discuss more in details,Please Contact me</p>
                 <p className="py-2 "><span className="font-bold">Email: </span>{config.email}</p>
                 <p className="py-2 "><span className="font-bold">Phone: </span> {config.phone}</p>
        </div>
    </section>
}