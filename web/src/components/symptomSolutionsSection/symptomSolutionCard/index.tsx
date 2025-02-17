import React from 'react'
import { SymptomSolutionType } from '../../../../lib/sanity/types'
import Image from '@/components/global/image'
import { cn } from '../../../../lib/utils/helperFunctions'

const SymptomSolutionCard: React.FC<{ block: SymptomSolutionType, itemIndex: number }> = ({ block, itemIndex }) => {
    const { image, title, icon, lists } = block || {}
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
    const isHovered = hoveredIndex === itemIndex
    return (
        <div className={cn('relative   transition-transform duration-300 animate-float flex flex-col items-center gap-5 md:gap-0',
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
                <div
                    onMouseEnter={() => setHoveredIndex(itemIndex)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={cn('md:absolute  bg-white p-2 xl:p-4 rounded-2xl text-sm font-semibold shadow-cardSolutionShadow flex items-center gap-[11px] z-20 w-full md:w-fit justify-center',
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
                    <div>
                        <span
                            className={cn('text-[18px] xl:text-[24px] text-darkPurple font-Kulim font-semibold tracking-[-0.48px]',
                                itemIndex === 0 && "",
                                itemIndex === 1 && "",
                                itemIndex === 2 && "!text-darkPink",)}
                        >
                            {title}
                        </span>
                        {isHovered && lists?.length > 0 &&
                            <ul>
                                {lists?.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            {item}
                                        </li>
                                    )
                                })}
                            </ul>
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default SymptomSolutionCard