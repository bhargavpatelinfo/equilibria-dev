import React, { useEffect, useState } from 'react';
import { SymptomSolutionsSectionType } from '../../../lib/sanity/types';
import RichText from '../global/richText';
import { cn, groupItems } from '../../../lib/utils/helperFunctions';
import SymptomSolutionCard from './symptomSolutionCard';

const SymptomSolutionsSection: React.FC<SymptomSolutionsSectionType> = (block) => {
    const { id, title, symptomSolutions } = block || {};
    const groupSymptomSolutions = groupItems(symptomSolutions, 3);

    const ref = React.useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { root: null, threshold: 0.6 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [hasAnimated]);

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
                                )}
                            >
                                {groupItem?.map((item, itemIndex) => (
                                    <SymptomSolutionCard
                                        block={item}
                                        key={itemIndex}
                                        itemIndex={itemIndex}
                                        hasAnimated={hasAnimated}
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
