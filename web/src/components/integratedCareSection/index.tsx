import React from 'react'
import { IntegratedCareSectionType } from '../../../lib/sanity/types';
import RichText from '../global/richText';
import { groupItems } from '../../../lib/utils/helperFunctions';

const IntegratedCareSection: React.FC<IntegratedCareSectionType> = (block) => {
    const { id, title, integratedCares } = block || {};
    const groupIntegratedCares = groupItems(integratedCares, 3)
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
                        {groupIntegratedCares?.length > 0 && (
                            <div className="flex "> 
                                {groupIntegratedCares?.map((groupItem, groupIndex) => {
                                    return (
                                        <div key={groupIndex}className="grid grid-cols-3" >
                                            {groupItem?.map((item, itemIndex) => {
                                                const { features, title } = item || {}
                                                const updatedCount = itemIndex + 1;
                                                const formattedIndex = updatedCount < 10 ? `0${updatedCount}` : updatedCount;
                                                return (
                                                    <div key={itemIndex} >
                                                        {formattedIndex &&
                                                            <div className="">
                                                                {formattedIndex &&
                                                                    <div className="w-12 h-12 flex items-center justify-center rounded-full border border-[#C43D6A] text-darkPurple font-bold">
                                                                        {formattedIndex}
                                                                    </div>
                                                                }
                                                                {itemIndex < groupItem?.length - 1 && (
                                                                    <div className="w-16 border-t border-dashed border-[#C43D6A] mt-6" />
                                                                )}
                                                            </div>
                                                        }
                                                        {title &&
                                                            <h2 className="">{title}
                                                            </h2>
                                                        }
                                                        {features?.length > 0 && (
                                                            <div className="">
                                                                {features?.map((feature, featureIndex) => (
                                                                    <div key={featureIndex} className="">
                                                                        {feature}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            })}
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

export default IntegratedCareSection