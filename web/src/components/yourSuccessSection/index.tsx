import React from 'react'
import {  YourSuccessSectionType } from '../../../lib/sanity/types';
import RichText from '../global/richText';
import Image from '../global/image';
import GreenTrueIcon from '../commons/icons/greenTrueIcon';

const YourSuccessSection: React.FC<YourSuccessSectionType> = (block) => {
    const { id, image, titleDescriptions, title } = block || {};
    return (
        <section id={id} className="mb-[100px] lg:mb-[206px]">
            <div className="container">
                <div className="flex flex-col gap-4 max-w-[956px] w-full">
                    {image && (
                        <div className="">
                            <Image src={image} alt={image?.alt} className="aspect-[2/3] rounded-xxl" />
                        </div>
                    )}
                    {title?.custom_rich_text && (
                        <div className="[&>*]:text-36 em:[&>*]:text-46 lg:[&>*]:text-64 [&>*]:text-darkPurple [&>*]:tracking-[-1.28px] [&>*]:font-semibold [&>*]:font-Kulim [&>*]:leading-[110%]">
                            <RichText block={title} />
                        </div>
                    )}
                </div>
                <div className="mt-[50px] lg:mt-[88px]">
                    {titleDescriptions?.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {titleDescriptions?.map((item, index) => {
                                const { description, title } = item || {};
                                return (
                                    <div key={index} className="flex flex-col gap-6">
                                        <GreenTrueIcon />
                                        <div className="flex flex-col gap-4">
                                            {title && (
                                                <h3 className="text-32 lg:text-40 font-semibold tracking-[-0.8px] font-Kulim text-darkPurple leading-[110%]">
                                                    {title}
                                                </h3>
                                            )}
                                            {description?.custom_rich_text && (
                                                <div className="[&>*]:text-lg lg:[&>*]:text-xl [&>*]:text-darkPurple [&>*]:tracking-[-0.1px] [&>*]:opacity-70">
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
        </section>
    );
}

export default YourSuccessSection