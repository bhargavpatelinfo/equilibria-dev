import React from 'react'
import { HeroSectionType } from '../../../lib/sanity/types';
import RichText from '../global/richText';
import Image from '../global/image';
import Button from '../global/button';

const HeroSection: React.FC<HeroSectionType> = (block) => {
    const { id, description, buttons, image, title, features } = block || {};
    return (
        <section id={id}>
            {title?.custom_rich_text &&
                <div>
                    <RichText block={title} />
                </div>
            }
            {description?.custom_rich_text &&
                <div>
                    <RichText block={description} />
                </div>
            }
            {image &&
                <div>
                    <Image
                        alt={image?.alt}
                        src={image}
                    />
                </div>
            }
            {features?.length > 0 &&
                <div>
                    {features?.map((item, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    {/* Icon */}
                                </div>
                                <div>
                                    {item}
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
            {buttons?.length > 0 &&
                <div>
                    {buttons?.map((item, index) => {
                        return (
                            item?.label &&
                            <div key={index}>
                                <Button block={item} />
                            </div>
                        )
                    })}
                </div>
            }
        </section>
    )
}

export default HeroSection