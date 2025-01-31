import React from "react";
import { LeadersSectionType } from "../../../lib/sanity/types";
import RichText from "../global/richText";
import Button from "../global/button";
import Image from "../global/image";

const LeadersSection: React.FC<LeadersSectionType> = (block) => {
  const { id, title, buttons, description, leaders } = block || {};
  return (
    <section id={id} className="bg-[red] pt-[211px] pb-[228px]">
      {title?.custom_rich_text && (
        <div className="[&>p]:text-theme-slateGray [&>p]:text-62px [&>p]:font-semibold [&>p]:text-center [&>p]:leading-1.3">
          <RichText block={title} />
        </div>
      )}
      {description?.custom_rich_text && (
        <div className="[&>p]:text-theme-slateGray [&>p]:text-62px [&>p]:font-semibold [&>p]:text-center [&>p]:leading-1.3">
          <RichText block={description} />
        </div>
      )}
      {buttons?.length > 0 && (
        <div>
          {buttons?.map((item, index) => {
            return (
              <div key={index}>
                <Button block={item} />
              </div>
            );
          })}
        </div>
      )}
      {leaders?.length > 0 && (
        <div>
          {leaders?.map((item, index) => {
            const { bio, image, name, slug } = item || {};
            return (
              <div key={index}>
                <div>
                  {name && <div>{name}</div>}
                  {bio && <div>{bio}</div>}
                  {image && (
                    <div>
                      <Image src={image} alt={image?.alt} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default LeadersSection;
