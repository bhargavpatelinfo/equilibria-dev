import React from 'react'
import { IntegratedCareSectionType } from '../../../lib/sanity/types';
import RichText from '../global/richText';
import { groupItems } from '../../../lib/utils/helperFunctions';
import Image from '../global/image';

const IntegratedCareSection: React.FC<IntegratedCareSectionType> = (block) => {
    const { id, title, integratedCares } = block || {};
    const groupIntegratedCares = groupItems(integratedCares, 3)

    return (
        <section id={id} className="mb-[80px] sm:mb-[100px] lg:mb-[160px] py-16 lg:py-20 bg-pink">
            <div className="container">
                <div className="">
                    <div className="flex flex-col gap-14 md:gap-20">
                        <div className="flex flex-col justify-center items-center">
                            {title?.custom_rich_text && (
                                <div className="[&>*]:text-36 em:[&>*]:text-46 lg:[&>*]:text-64 [&>*]:text-maroon [&>*]:tracking-[-1.28px] [&>*]:font-semibold [&>*]:font-Kulim [&>*]:leading-[110%] [&>*]:text-center">
                                    <RichText block={title} />
                                </div>
                            )}
                        </div>
                        {integratedCares?.length > 0 && (
                           <div  className=" flex flex-col lg:flex-row justify-between gap-16 lg:gap-4 items-center w-full 
                           [&>*:nth-child(2)>span]:before:content-none xl:[&>*:nth-child(2)>span]:before:content-[''] [&>*:nth-child(2)>span]:before:bg-[url('/images/hrLine.png')] [&>*:nth-child(2)>span]:before:bg-cover [&>*:nth-child(2)>span]:before:bg-center [&>*:nth-child(2)>span]:before:w-[250px] 1xl:[&>*:nth-child(2)>span]:before:w-[400px] 2xl:[&>*:nth-child(2)>span]:before:w-[430px] [&>*:nth-child(2)>span]:before:h-[2px] [&>*:nth-child(2)>span]:before:after:bg-no-repeat [&>*:nth-child(2)>span]:before:absolute [&>*:nth-child(2)>span]:before:top-[50%] [&>*:nth-child(2)>span]:before:right-[150px] mxl:[&>*:nth-child(2)>span]:before:right-[170px] 1xl:[&>*:nth-child(2)>span]:before:right-[130%] [&>*:nth-child(2)>span]:before:z-10
                           
                           [&>*:nth-child(2)>span]:after:content-none xl:[&>*:nth-child(2)>span]:after:content-[''] [&>*:nth-child(2)>span]:after:bg-[url('/images/hrLine.png')] [&>*:nth-child(2)>span]:after:bg-cover [&>*:nth-child(2)>span]:after:bg-center [&>*:nth-child(2)>span]:after:w-[250px] 1xl:[&>*:nth-child(2)>span]:after:w-[400px] 2xl:[&>*:nth-child(2)>span]:after:w-[430px] [&>*:nth-child(2)>span]:after:h-[2px] [&>*:nth-child(2)>span]:after:after:bg-no-repeat [&>*:nth-child(2)>span]:after:absolute [&>*:nth-child(2)>span]:after:top-[50%] [&>*:nth-child(2)>span]:after:left-[150px] mxl:[&>*:nth-child(2)>span]:after:left-[170px] 1xl:[&>*:nth-child(2)>span]:after:left-[130%] [&>*:nth-child(2)>span]:after:z-10
                           
                           " >
                           {integratedCares?.map((item, itemIndex) => {
                               const { features, title } = item || {}
                               const updatedCount = itemIndex + 1;
                               const formattedIndex = updatedCount < 10 ? `0${updatedCount}` : updatedCount;
                              const isLastLength =  itemIndex < integratedCares?.length - 1 
                               return (
                                   <div key={itemIndex} className='flex flex-col justify-center items-center gap-6 sm:gap-10'>
                                       {formattedIndex &&
                                           <>
                                               {formattedIndex &&
                                                   <span className="w-10 sm:w-[67px] h-10 sm:h-[67px] flex items-center justify-center rounded-full border border-[#C43D6A] text-darkPurple font-bold text-[20px] sm:text-26 lg:text-32 relative">
                                                       {formattedIndex}
                                                   </span>
                                               }
                                              {/* {isLastLength &&
                                               <Image
                                                   src={"/images/hrLine.png"}
                                                   alt='hrLine'
                                                   height={1}
                                                   width={429}
                                                   className=''
                                               />
                                               } */}
                                           </>
                                       }
                                       <div className='flex flex-col gap-5 sm:gap-7 '>
                                           {title &&
                                               <h3 className="text-26 esm:text-30 sm:text-40  text-darkPurple tracking-[-0.8px] font-semibold font-Kulim leading-[110%] text-center lg:text-left">
                                                   {title}
                                               </h3>
                                           }
                                           {features?.length > 0 && (
                                               <ul className="flex flex-col list-disc list-inside gap-4 pl-6 em:pl-12 sm:pl-3">
                                                   {features?.map((feature, featureIndex) => (
                                                       <li key={featureIndex} className="text-darkRed text-[18px] em:text-[20px] sm:text-[22px] md:text-24 font-medium tracking-[-0.12px]">
                                                           {feature}
                                                       </li>
                                                   ))}
                                               </ul>
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

export default IntegratedCareSection