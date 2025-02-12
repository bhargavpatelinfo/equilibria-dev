import React from 'react'
import { SymptomSolutionsSectionType } from '../../../lib/sanity/types';
import RichText from '../global/richText';
import { cn, groupItems } from '../../../lib/utils/helperFunctions';
import Image from '../global/image';

const SymptomSolutionsSection: React.FC<SymptomSolutionsSectionType> = (block) => {
    const { id, title, symptomSolutions } = block || {};
    const groupSymptomSolutions = groupItems(symptomSolutions, 3)
    return (
        <section id={id} className="mb-[80px] lg:mb-[206px]">
            {title?.custom_rich_text &&
                <div>
                    <RichText block={title} />
                </div>
            }
            {groupSymptomSolutions?.length > 0 &&
                <div>
                    {groupSymptomSolutions?.map((groupItem, groupIndex) => {
                        return (
                            <div key={groupIndex} className='relative flex justify-center items-center gap-6'>
                                {groupItem?.map((item, itemIndex) => {
                                    const { image, title, icon } = item || {}
                                    return (
                                        <div key={itemIndex} className={cn('relative rounded-xl overflow-hidden transition-transform duration-300 animate-float',
                                            itemIndex === 0 &&
                                            "w-52 h-72 bg-pink-100 shadow-lg transform rotate-[-10deg] hover:scale-105",
                                            itemIndex === 1 &&
                                            "w-56 h-80 bg-pink-200 shadow-xl z-10  hover:scale-110",
                                            itemIndex === 2 &&
                                            "w-52 h-72 bg-pink-100 shadow-lg transform rotate-[10deg]  hover:scale-105",
                                        )}>
                                            {image && (
                                                <div className="">
                                                    <Image
                                                        src={image}
                                                        alt={image?.alt}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            )}
                                            {title &&
                                                <div className={cn('absolute top-4 bg-white px-3 py-1 rounded-lg text-sm font-semibold shadow-md flex items-center gap-2',
                                                    itemIndex === 0 && "left-4",
                                                    itemIndex === 1 && "left-4",
                                                    itemIndex === 2 && "right-4",
                                                )}>
                                                    {icon && (
                                                        <div className="">
                                                            <Image
                                                                src={icon}
                                                                alt={icon?.alt}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                    )}
                                                    {title}
                                                </div>
                                            }
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            }
        </section>
    );
}

export default SymptomSolutionsSection