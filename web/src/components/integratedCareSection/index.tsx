import React from 'react'
import { IntegratedCareSectionType } from '../../../lib/sanity/types';
import RichText from '../global/richText';

const IntegratedCareSection: React.FC<IntegratedCareSectionType> = (block) => {
    const { id, title, integratedCares } = block || {};
    return (
        <section id={id} className="mb-[80px] lg:mb-[200px] xl:mb-[264px]">
            <div className="container">
                <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-10">
                    <div className="max-w-full lg:max-w-[604px] w-full flex flex-col gap-8 em:gap-12">
                        <div className="flex flex-col gap-6">
                            {title?.custom_rich_text && (
                                <div className="[&>*]:text-36 em:[&>*]:text-46 lg:[&>*]:text-64 [&>*]:text-darkPurple [&>*]:tracking-[-1.28px] [&>*]:font-semibold [&>*]:font-Kulim [&>*]:leading-[110%]">
                                    <RichText block={title} />
                                </div>
                            )}
                        </div>
                        {integratedCares?.length > 0 && (
                            <div className="flex flex-col em:flex-row gap-4">
                                {integratedCares?.map((item, index) => {
                                    const { features, title } = item || {}
                                    return (
                                        <div key={index}>
                                            {title &&
                                                <div>
                                                    {title}
                                                </div>
                                            }
                                            {features?.length > 0 &&
                                            <div>
                                                {features?.map((item,index)=>{
                                                    return(
                                                        <div key={index}>
                                                            {item}
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            }
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

export default IntegratedCareSection