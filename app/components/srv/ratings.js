import Image from "next/image";
import { IoIosStar } from "react-icons/io";

const Rating = () => {
    return (
        <div><div className='flex gap-4 justify-center items-center mt-8'>
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                    <div className="w-12">
                    <Image src='/images/av4.jpg' width={80} height={80} />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-12">
                    <Image src='/images/av3.jpg' width={80} height={80} />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-12">
                    <Image src='/images/av2.jpg' width={80} height={80} />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-12">
                       <Image src='/images/av1.jpg' width={80} height={80} />
                    </div>

                </div>

                <div className="avatar">
                    <div className="w-12">
                       <Image src='/images/av5.jpg' width={80} height={80} />
                    </div>

                </div>

            </div>
            <div className='flex flex-col justify-center font-medium '>
                50,250 Happy user
                <div className='flex gap-1 items-center'> 4.9
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />

                </div>
            </div>

        </div></div>
    )
}

export default Rating