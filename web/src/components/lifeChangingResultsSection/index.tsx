import React from "react";
import { LifeChangingResultsSectionType } from "../../../lib/sanity/types";
import RichText from "../global/richText";
import Button from "../global/button";

const LifeChangingResultsSection: React.FC<LifeChangingResultsSectionType> = (
  block
) => {
  const { id, title, buttons, titleValueUnit, headLine } = block || {};
  return (
    <section id={id} className="bg-[red] pt-[211px] pb-[228px]">
      {headLine && <div>{headLine}</div>}
      {title?.custom_rich_text && (
        <div className="[&>p]:text-theme-slateGray [&>p]:text-62px [&>p]:font-semibold [&>p]:text-center [&>p]:leading-1.3">
          <RichText block={title} />
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
      {titleValueUnit?.title && (
        <div style={{ backgroundColor: titleValueUnit?.color?.hex || "" }}>
          <div>
            {titleValueUnit?.title && <div>{titleValueUnit?.title}</div>}
          </div>
          <div>{`${titleValueUnit?.value} ${titleValueUnit?.suffix}`}</div>
        </div>
      )}
    </section>
  );
};

export default LifeChangingResultsSection;
