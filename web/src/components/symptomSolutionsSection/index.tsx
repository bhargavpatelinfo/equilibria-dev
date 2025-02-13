import React from 'react'
import { SymptomSolutionsSectionType } from '../../../lib/sanity/types';
import RichText from '../global/richText';
import { cn, groupItems } from '../../../lib/utils/helperFunctions';
import Image from '../global/image';

const SymptomSolutionsSection: React.FC<SymptomSolutionsSectionType> = (block) => {
    const { id, title, symptomSolutions } = block || {};
    const groupSymptomSolutions = groupItems(symptomSolutions, 3)
    return (
        <section id={id} className="mb-[80px] lg:mb-[206px] pt-14 em:pt-20 pb-14 em:pb-20 md:pb-[220px] bg-maroon relative z-[5] overflow-hidden">
            <div className='container'>
            {title?.custom_rich_text &&
                <div className='[&>*]:text-36 em:[&>*]:text-46 lg:[&>*]:text-64 [&>*]:text-white [&>*]:tracking-[-1.28px] [&>*]:font-semibold [&>*]:font-Kulim [&>*]:leading-[110%] [&>*]:text-center'>
                    <RichText block={title} />
                </div>
            }
            {groupSymptomSolutions?.length > 0 &&
                <div className='mt-14 md:mt-[130px]'>
                    {groupSymptomSolutions?.map((groupItem, groupIndex) => {
                        return (
                            <div key={groupIndex} className='relative flex flex-col md:flex-row justify-center items-center gap-12 md:gap-6 z-0'>
                                {groupItem?.map((item, itemIndex) => {
                                    const { image, title, icon } = item || {}
                                    return (
                                        <div key={itemIndex} className={cn('relative   transition-transform duration-300 animate-float flex flex-col items-center gap-5 md:gap-0',
                                            itemIndex === 0 &&
                                            "w-auto esm:w-[300px] md:w-[280px] xl:w-[331px] h-full md:h-[400px] xl:h-[514px] bg-pink-100 shadow-lg transform  md:left-[100px] md:top-[100px]",
                                            itemIndex === 1 &&
                                            "w-auto esm:w-[300px] md:w-[300px] xl:w-[406px] h-full xl:h-[590px] bg-pink-200 shadow-xl z-10 ",
                                            itemIndex === 2 &&
                                            "w-auto esm:w-[300px] md:w-[280px] xl:w-[331px] h-full md:h-[400px] xl:h-[514px] bg-pink-100 shadow-lg transform  md:right-[100px] md:top-[100px]",
                                        )}>
                                            {image && (
                                              
                                                    <Image
                                                        src={image}
                                                        alt={image?.alt}
                                                        className={cn("w-full h-full object-cover rounded-[32px]",
                                                        itemIndex === 0 &&
                                                        "md:rotate-[-10deg]",
                                                        itemIndex === 1 &&
                                                        "",
                                                        itemIndex === 2 &&
                                                        "md:rotate-[10deg]",
                                                        
                                                        )}
                                                    />
                                            
                                            )}
                                            {title &&
                                                <div className={cn('md:absolute  bg-white p-2 xl:p-4 rounded-2xl text-sm font-semibold shadow-cardSolutionShadow flex items-center gap-[11px] z-20 w-full md:w-fit justify-center',
                                                    itemIndex === 0 && "md:left-[-120px] xl:left-[-200px] 1xl:left-[-250px]  md:top-[100px] xl:top-[120px] ",
                                                    itemIndex === 1 && "md:left-[-130px] top-[-20px] xl:top-[-38px]",
                                                    itemIndex === 2 && "md:right-[-120px] xl:right-[-140px] top-[10px] xl:top-[-20px] ",
                                                )}>
                                                    {icon && (
                                                        <div className="w-8 xl:w-10 h-8 xl:h-10">
                                                            <Image
                                                                src={icon}
                                                                alt={icon?.alt}
                                                                className="w-8 xl:w-10 h-8 xl:h-10 object-cover"
                                                            />
                                                        </div>
                                                    )}
                                                    <span 
                                                    className={cn('text-[18px] xl:text-[24px] text-darkPurple font-Kulim font-semibold tracking-[-0.48px]' , 
                                                    itemIndex === 0 && "",
                                                    itemIndex === 1 && "",
                                                    itemIndex === 2 && "!text-darkPink",)}
                                                    >
                                                        {title}
                                                    </span>
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
            </div>
        </section>
    );
}

export default SymptomSolutionsSection