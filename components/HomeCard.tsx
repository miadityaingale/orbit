import { cn } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'
interface HomeCardProps {
    className : string,
    img: string,
    title: string,
    description: string,
    handleClick : () => void;
}

const HomeCard = ({className, img, title, description, handleClick}: HomeCardProps) => {
    return (
        <div className={cn('px-2 py-3 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[230px] rounded cursor-pointer', className)}
            onClick={handleClick}>
            <div className="flex-center glassmorphism size-12 rounded">
                <Image src={img} alt="meeting" width={27} height={27} />
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold ">{title}</h1>
                <p className="text-lg font-normal">{description}</p>
            </div>
        </div>
    )
}

export default HomeCard