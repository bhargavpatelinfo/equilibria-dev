import React from 'react'
import { TransformationSectionType } from '../../../lib/sanity/types';
import { useSanityImage } from '../../../lib/sanity';
import { cn } from '../../../lib/utils/helperFunctions';
import RichText from '../global/richText';
import Button from '../global/button';

const TransformationSection: React.FC<TransformationSectionType> = (block) => {
    const { id, title, description, backgroundImage, buttons } = block || {};
    const bgImage = useSanityImage(backgroundImage);
    return (
        <section id={id} className="mb-[80px] lg:mb-[206px]">
            <div
                className={cn(
                    "container"
                )}
            >

                <div className="rounded-3xl py-16 em:py-24 lg:py-[177px] px-8"
                    style={{
                        backgroundImage: bgImage?.src ? `url(${bgImage?.src})` : undefined,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundColor: "linear-gradient(180deg, #5D5BD4 0%, #8C75E6 100%)",
                    }}
                >
                    <div className="max-w-[956px] mx-auto w-full flex flex-col gap-4">
                        {title?.custom_rich_text && (
                            <div className="[&>*]:text-36 em:[&>*]:text-46 lg:[&>*]:text-64 [&>*]:text-darkPurple [&>*]:tracking-[-1.28px] [&>*]:font-semibold [&>*]:font-Kulim [&>*]:leading-[110%] [&>*]:text-center">
                                <RichText block={title} />
                            </div>
                        )}
                        {description?.custom_rich_text && (
                            <div className="[&>*]:text-lg em:[&>*]:text-xl [&>*]:font-medium [&>*]:tracking-[-0.1px] [&>*]:text-maroon [&>*]:text-center [&>*]:opacity-70">
                                <RichText block={description} />
                            </div>
                        )}
                    </div>
                    {buttons?.length > 0 && (
                        <div>
                            {buttons?.map((item, index) => {
                                return (
                                    <div key={index} className="w-fit  mx-auto mt-10 em:mt-14">
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
        </section>
    );
}

export default TransformationSection