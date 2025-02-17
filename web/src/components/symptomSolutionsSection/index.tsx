import React from 'react';
import { SymptomSolutionsSectionType } from '../../../lib/sanity/types';
import RichText from '../global/richText';
import { cn, groupItems } from '../../../lib/utils/helperFunctions';
import SymptomSolutionCard from './symptomSolutionCard';
import useInView from '../../../lib/hooks/useInView';

const SymptomSolutionsSection: React.FC<SymptomSolutionsSectionType> = (block) => {
    const { id, title, symptomSolutions } = block || {};
    const groupSymptomSolutions = groupItems(symptomSolutions, 3);

    const [ref, isInView] = useInView({ threshold: 0.1 });

    return (
        <section id={id}
            className="mb-[80px] lg:mb-[206px] pt-14 em:pt-20 pb-14 em:pb-20 md:pb-[220px] bg-maroon relative z-[5] overflow-hidden"
        >
            <div className='container' >
                {title?.custom_rich_text && (
                    <div className='[&>*]:text-36 em:[&>*]:text-46 lg:[&>*]:text-64 [&>*]:text-white [&>*]:tracking-[-1.28px] [&>*]:font-semibold [&>*]:font-Kulim [&>*]:leading-[110%] [&>*]:text-center'>
                        <RichText block={title} />
                    </div>
                )}
                {groupSymptomSolutions?.length > 0 && (
                    <div className='mt-10 md:mt-[130px]' ref={ref}>
                        {groupSymptomSolutions?.map((groupItem, groupIndex) => (
                            <div key={groupIndex}
                                className={cn(
                                    'relative flex flex-col md:flex-row justify-center items-center gap-12 md:gap-6 z-0',
                                    isInView ? 'bg-[red]' : 'bg-[teal]'
                                )}
                            >
                                {groupItem?.map((item, itemIndex) => (
                                    <SymptomSolutionCard
                                        block={item}
                                        key={itemIndex}
                                        itemIndex={itemIndex}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default SymptomSolutionsSection;
