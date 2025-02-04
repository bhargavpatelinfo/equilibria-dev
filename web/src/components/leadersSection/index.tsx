import React from "react";
import { LeadersSectionType } from "../../../lib/sanity/types";
import RichText from "../global/richText";
import Button from "../global/button";
import Image from "../global/image";
import dynamic from "next/dynamic";
const Masonry = dynamic(() => import('react-layout-masonry'), { ssr: false });

const LeadersSection: React.FC<LeadersSectionType> = (block) => {
  const { id, title, buttons, description, leaders } = block || {};
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
              {description?.custom_rich_text && (
                <div className="[&>*]:text-lg em:[&>*]:text-xl [&>*]:font-medium [&>*]:tracking-[-0.1px] [&>*]:text-darkPurple">
                  <RichText block={description} />
                </div>
              )}
            </div>
            {buttons?.length > 0 && (
              <div className="flex flex-col em:flex-row gap-4">
                {buttons?.map((item, index) => {
                  return (
                    <div key={index}>
                      <Button block={item} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="max-w-full lg:max-w-[800px] w-full">
            {leaders?.length > 0 && (
              <Masonry
              columns={{ 320: 1, 640: 2 }}
              gap={32}
              columnProps={{
                className: '',
              }}
              >
                {leaders?.map((item, index) => {
                  const { bio, image, name, slug } = item || {};
                  return (
                    <div key={index} className="p-8 pb-0 bg-pinkShade rounded-xxl">

                      <div className="flex flex-col gap-4">
                        {name && <h3 className="text-32 xl:text-40 font-semibold tracking-[-0.8px] font-Kulim text-darkPink leading-[110%] opacity-50">{name}</h3>}
                        {bio && <p className="text-xl font-semibold tracking-[-0.1px] leading-[150%] text-darkPurple">{bio}</p>}
                      </div>
                      {image && (
                        <div className="mt-[50px]">
                          <Image src={image} alt={image?.alt} className="w-auto h-auto"/>
                        </div>
                      )}

                    </div>
                  );
                })}
              </Masonry>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadersSection;
