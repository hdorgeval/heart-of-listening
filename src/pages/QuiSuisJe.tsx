import { FC } from 'react';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';

export const QuiSuisJe: FC = () => {
  return (
    <>
      <PublicPageLayoutWithFixedBackgroundImage
        backgroundImageUrl="/images/background-qui-suis-je.png"
        backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.40))"
        backgroundPositionX="95%"
        backgroundPositionY="35%"
        htmlTitle={`Qui-suis je? | ${websiteConfig.websiteTitle}`}
      >
        <div className="d-flex flex-column justify-content-start align-items-center">
          <div className="mt-6">
            <PageTitle>Qui suis-je ?</PageTitle>
          </div>
          <div className="" style={{ minHeight: '10vh' }}></div>
          <SemiTransparentTile className="card text-start text-light fs-5 font-monserrat px-4 py-4">
            <p className="">Bonjour !</p>
            <p>Je suis John Doe.</p>
            <p className="font-monserrat">
              Au cœur de mon identité se trouvent mes passions, ces feux intérieurs qui m'animent et
              me donnent un sens à chaque pas que je fais. (font monserrat)
            </p>
            <p className="font-playfair">
              Au cœur de mon identité se trouvent mes passions, ces feux intérieurs qui m'animent et
              me donnent un sens à chaque pas que je fais. (font playfair)
            </p>
            <p className="font-raleway">
              Au cœur de mon identité se trouvent mes passions, ces feux intérieurs qui m'animent et
              me donnent un sens à chaque pas que je fais. (font raleway)
            </p>
            <p className="font-marcellus">
              Au cœur de mon identité se trouvent mes passions, ces feux intérieurs qui m'animent et
              me donnent un sens à chaque pas que je fais. (font marcellus)
            </p>
            <p className="font-dancing-script fs-3">
              Au cœur de mon identité se trouvent mes passions, ces feux intérieurs qui m'animent et
              me donnent un sens à chaque pas que je fais. (font dancing-script)
            </p>
            <p className="font-open-sans">
              Au cœur de mon identité se trouvent mes passions, ces feux intérieurs qui m'animent et
              me donnent un sens à chaque pas que je fais. (font open-sans)
            </p>
            <p className="font-mali">
              Au cœur de mon identité se trouvent mes passions, ces feux intérieurs qui m'animent et
              me donnent un sens à chaque pas que je fais. (font mali)
            </p>
            <p className="mb-0 pb-0 font-kite-one">
              Au cœur de mon identité se trouvent mes passions, ces feux intérieurs qui m'animent et
              me donnent un sens à chaque pas que je fais. (font kite-one)
            </p>
          </SemiTransparentTile>
        </div>
      </PublicPageLayoutWithFixedBackgroundImage>
    </>
  );
};

QuiSuisJe.displayName = 'QuiSuisJe';
