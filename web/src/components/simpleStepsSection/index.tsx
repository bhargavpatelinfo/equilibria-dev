import React from 'react'
import { SimpleStepsSectionType } from '../../../lib/sanity/types';
import RichText from '../global/richText';
import Image from '../global/image';

const SimpleStepsSection: React.FC<SimpleStepsSectionType> = (block) => {
    const { id, image, titleDescriptions, title } = block || {};
    return (
        <section id={id} className="mb-[100px] lg:mb-[206px]">
            <div className="container">
                <div className='flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-10 justify-between'>
                    <div className="max-w-[588px] w-full ">
                        {image && (
                            <Image src={image} alt={image?.alt} className="aspect-[400/500] lg:aspect-[588/727] object-cover rounded-[32px]" />
                        )}
                    </div>
                    <div className="max-w-full lg:max-w-[784px] w-full">
                        {title?.custom_rich_text && (
                            <div className="[&>*]:text-36 em:[&>*]:text-46 lg:[&>*]:text-50 xl:[&>*]:text-64 [&>*]:text-maroon [&>*]:tracking-[-1.28px] [&>*]:font-semibold [&>*]:font-Kulim [&>*]:leading-[110%]">
                                <RichText block={title} />
                            </div>
                        )}
                        {titleDescriptions?.length > 0 && (
                            <div className="flex flex-col gap-10 sm:gap-16 mt-10 em:mt-[72px]">
                                {titleDescriptions?.map((item, index) => {
                                    const { description, title } = item || {};
                                    return (
                                        <div key={index} className="flex flex-col gap-6">
                                            <div className="flex flex-col gap-4">
                                                {title && (
                                                    <h3 className="text-26 sm:text-32 font-semibold tracking-[-0.64px] font-Kulim text-darkPurple leading-[110%]">
                                                        {title}
                                                    </h3>
                                                )}
                                                {description?.custom_rich_text && (
                                                    <div className="[&>*]:text-lg lg:[&>*]:text-xl [&>*]:text-darkPurple [&>*]:tracking-[-0.4px] [&>*]:opacity-70 [&>*]:font-medium">
                                                        <RichText block={description} />
                                                    </div>
                                                )}
                                            </div>

                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SimpleStepsSection