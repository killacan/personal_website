import Image from 'next/image'

export default function ProjectBuilder ({gbox}) {

    console.log(gbox)

    return (
        <div className='gbox'>
            {gbox.image && gbox.img_alt && <Image src={gbox.image} width={350} height={400} className='mx-auto' alt={gbox.img_alt} />}
            <h3 className='text-lg font-medium pt-8 pb-2 text-gray-300'>{gbox.title}</h3>
            <p className='py-2 text-gray-300'>
                {gbox.description}
            </p>
            <h4 className='py-4 text-teal-600'>Technologies Used</h4>
            <div className='grid grid-cols-2'>
                {gbox.tech.map((tech, index) => (
                    <p className='text-gray-300 p-1' key={index}>{tech}</p>
                ))}
            <p className='text-gray-300 p-1'>React</p>
            <p className='text-gray-300 p-1'>Express</p>
            <p className='text-gray-300 p-1'>MongoDB</p>
            <p className='text-gray-300 p-1'>Node.js</p>
            <p className='text-gray-300 p-1'>WebSocket</p>
            </div>
            <div className='flex justify-center overflow-visible'>
            <div className='py-2'><a className='bg-blue-600 text-white px-4 py-2 rounded-md mx-4 hover:px-5 hover:py-3 hover:mx-3 duration-300' href={gbox.source_href} target={'_blank'}>Source&nbsp;Code</a></div>
            {gbox.live_href && <div className='py-2'><a className='bg-blue-600 text-white px-4 py-2 rounded-md mx-4 hover:px-5 hover:py-3 hover:mx-3 duration-300' href='https://gamebuddy-app.herokuapp.com/' target={'_blank'}>Live&nbsp;Project</a></div>}
            </div>
        </div>
    )
}