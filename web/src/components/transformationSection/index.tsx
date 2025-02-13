import React from 'react'
import { TransformationSectionType } from '../../../lib/sanity/types';
import { useSanityImage } from '../../../lib/sanity';
import { cn } from '../../../lib/utils/helperFunctions';
import RichText from '../global/richText';
import Button from '../global/button';
import Image from '../global/image';

const TransformationSection: React.FC<TransformationSectionType> = (block) => {
    const { id, title, description, backgroundImage, buttons } = block || {};
    const bgImage = useSanityImage(backgroundImage);
    return (
        <section id={id} className="mb-[80px] lg:mb-[100px] xl:mb-[160px]">
            <div
                className={cn(
                    "container"
                )}
            >

                <div className="rounded-3xl py-10 em:py-16 md:py-24 lg:py-[124px] px-6 em:px-10 lg:px-[92px] relative z-[2] overflow-hidden"
                    style={{
                        backgroundImage: bgImage?.src ? `url(${bgImage?.src})` : undefined,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundColor: "linear-gradient(180deg, #5D5BD4 0%, #8C75E6 100%)",
                    }}
                >

                    <div className=' absolute bottom-0 left-0 right-0  -z-[1]'>
                        <Image src={'/images/sectionGradient.png'} width={1456} height={255}  alt="image" className="w-auto h-auto" />
                    </div>
                    <div className="max-w-[956px] w-full flex flex-col gap-6">
                        {title?.custom_rich_text && (
                            <div className="[&>*]:text-36 em:[&>*]:text-46 lg:[&>*]:text-64 [&>*]:text-white [&>*]:tracking-[-1.28px] [&>*]:font-semibold [&>*]:font-Kulim [&>*]:leading-[110%]">
                                <RichText block={title} />
                            </div>
                        )}
                        {description?.custom_rich_text && (
                            <div className="[&>p]:text-white [&>p]:text-lg em:[&>p]:text-xl [&>p]:font-medium [&>p]:tracking-[-0.1px] [&>*]:opacity-70 [&>div>ol>li]:text-white [&>div>ol>li]:opacity-70 [&>div>ol>li]:font-semibold [&>div>ol>li]:tracking-[-0.1px] [&>div>ol>li]:text-lg em:[&>div>ol>li]:text-xl">
                                <RichText block={description} />
                            </div>
                        )}
                        {buttons?.length > 0 && (
                            <div className='flex flex-wrap gap-6 items-center mt-8'>
                                {buttons?.map((item, index) => {
                                    return (
                                        <div key={index} className="!w-full em:!w-auto">
                                            <Button
                                                block={item}
                                                className=""
                                            />
                                        </div>
                                    )
                                })}
                            </div>

                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default TransformationSection