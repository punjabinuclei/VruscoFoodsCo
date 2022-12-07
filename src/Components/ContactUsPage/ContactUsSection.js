import React from 'react'
import "../../Styles/ContactUs.css"

const ContactUsSection = () => {
    return (
        <div>
            <section className='contactUsSection h-screen pt-36'>
                <div>
                    <div className='px-16'>
                        <h1 className='text-gray-100 text-3xl font-semibold'>DISCOVER US</h1>
                        <p className='text-gray-300   w-96 pt-2 text-xs'>VRUSCO is here to help you;<br/> Our experts are available to answer any questions you might have.<br/> We’ve got the answers.</p>
                    </div>

                    <div className='px-16 pt-6'>
                        <h1 className='text-gray-100 text-3xl font-semibold'>VISIT US</h1>
                        <p className='text-gray-300   w-96 pt-2 text-xs'>357, Rjd Integrated Textile Park Icchapore,<br/> Hazira Road, Icchapore Surat</p>
                        <p className='text-gray-300   w-96 pt-2 text-xs'>Feel free to get in touch with us through our channels:</p>
                    </div>

                    <div className='px-16 pt-6'>
                        <h1 className='text-gray-100 text-3xl font-semibold'>Email US</h1>
                        <p className='text-gray-300   w-96 pt-2 text-xs'>vrushabhfoodsupplyco@gmail.com <br/> http://vrushabhfoodsupplyco</p>
                    </div>

                    <div className='px-16 pt-6'>
                        <h1 className='text-gray-100 text-3xl font-semibold'>CALL US</h1>
                        <p className='text-gray-300   w-96 pt-2 text-xs'>+91 98752 10464 <br/>+91 77570 20280 </p>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default ContactUsSection