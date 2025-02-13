import React from 'react'
import { HeroSectionType } from '../../../lib/sanity/types';
import RichText from '../global/richText';
import Image from '../global/image';
import Button from '../global/button';
import GreenTrueIcon from '../commons/icons/greenTrueIcon';

const HeroSection: React.FC<HeroSectionType> = (block) => {
    const { id, description, buttons, image, title, features } = block || {};
    return (
        <section id={id} className='mt-[120px] sm:mt-[150px] mb-[50px] lg:mb-[100px] xl:mb-[160px]'>
            <div className='container'>
                <div className='flex flex-col lg:flex-row items-center gap-10 justify-between'>
                    <div className='lg:basis-[60%] xl:basis-1/2 flex flex-col gap-8 sm:gap-12'>
                        <div className='flex flex-col gap-5 sm:gap-8'>
                            {title?.custom_rich_text &&
                                <div className='[&>*]:text-darkPink [&>*]:text-36 em:[&>*]:text-46 sm:[&>*]:text-50 lg:[&>*]:text-64 [&>*]:font-Kulim [&>*]:font-semibold [&>*]:leading-[120%] [&>*]:tracking-[-1.28px]'>
                                    <RichText block={title} />
                                </div>
                            }
                            {description?.custom_rich_text &&
                                <div className='[&>*]:text-lg sm:[&>*]:text-xl [&>*]:text-maroon [&>*]:tracking-[-0.1px] [&>*]:leading-[150%]'>
                                    <RichText block={description} />
                                </div>
                            }
                        </div>

                        {features?.length > 0 &&
                            <div className='pt-8 sm:pt-12 border-t border-[#DDDDDD] grid grid-cols-1 sm:grid-cols-2 gap-6'>
                                {features?.map((item, index) => {
                                    return (
                                        <div key={index} className='flex gap-4'>
                                            <div>
                                                <GreenTrueIcon/>
                                            </div>
                                            <div className='text-lg xl:text-xl text-maroon font-medium tracking-[-0.1px]'>
                                                {item}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        }
                        {buttons?.length > 0 &&
                            <div className='flex flex-wrap gap-4 items-center'>
                                {buttons?.map((item, index) => {
                                    return (
                                        item?.label &&
                                        <div key={index} className='w-full em:w-auto'>
                                            <Button block={item} className='!px-6 lg:!px-4 xl:!px-6 1xl:!px-10 !text-base xl:!text-lg '/>
                                        </div>
                                    )
                                })}
                            </div>
                        }
                    </div>
                    <div className='lg:basis-[35%] xl:basis-1/2 mx-auto'>
                        {image &&
                            <div className='aspect-square'>
                                <Image
                                    alt={image?.alt}
                                    src={image}
                                    className='w-full h-[280px] sm:h-[350px] md:h-[500px] lg:h-full object-cover'
                                />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection