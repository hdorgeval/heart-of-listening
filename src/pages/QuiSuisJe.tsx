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
              Curabitur in mauris dapibus, aliquam velit sit amet, consequat metus. Praesent at est
              nunc. Fusce sed erat ex. Aliquam fringilla euismod vestibulum. Donec imperdiet nec est
              id aliquam. Sed sed ante ipsum. Cras id malesuada eros. Proin pharetra ultricies
              accumsan. Etiam placerat tempor nunc vitae cursus. (font monserrat)
            </p>
            <p className="font-playfair">
              Curabitur in mauris dapibus, aliquam velit sit amet, consequat metus. Praesent at est
              nunc. Fusce sed erat ex. Aliquam fringilla euismod vestibulum. Donec imperdiet nec est
              id aliquam. Sed sed ante ipsum. Cras id malesuada eros. Proin pharetra ultricies
              accumsan. Etiam placerat tempor nunc vitae cursus. (font playfair)
            </p>
            <p className="font-raleway">
              Curabitur in mauris dapibus, aliquam velit sit amet, consequat metus. Praesent at est
              nunc. Fusce sed erat ex. Aliquam fringilla euismod vestibulum. Donec imperdiet nec est
              id aliquam. Sed sed ante ipsum. Cras id malesuada eros. Proin pharetra ultricies
              accumsan. Etiam placerat tempor nunc vitae cursus. (font raleway)
            </p>
            <p className="font-marcellus">
              Curabitur in mauris dapibus, aliquam velit sit amet, consequat metus. Praesent at est
              nunc. Fusce sed erat ex. Aliquam fringilla euismod vestibulum. Donec imperdiet nec est
              id aliquam. Sed sed ante ipsum. Cras id malesuada eros. Proin pharetra ultricies
              accumsan. Etiam placerat tempor nunc vitae cursus. (font marcellus)
            </p>
            <p className="font-dancing-script fs-3">
              Curabitur in mauris dapibus, aliquam velit sit amet, consequat metus. Praesent at est
              nunc. Fusce sed erat ex. Aliquam fringilla euismod vestibulum. Donec imperdiet nec est
              id aliquam. Sed sed ante ipsum. Cras id malesuada eros. Proin pharetra ultricies
              accumsan. Etiam placerat tempor nunc vitae cursus. (font dancing-script)
            </p>
            <p className="font-open-sans">
              Curabitur in mauris dapibus, aliquam velit sit amet, consequat metus. Praesent at est
              nunc. Fusce sed erat ex. Aliquam fringilla euismod vestibulum. Donec imperdiet nec est
              id aliquam. Sed sed ante ipsum. Cras id malesuada eros. Proin pharetra ultricies
              accumsan. Etiam placerat tempor nunc vitae cursus. (font open-sans)
            </p>
            <p className="font-mali">
              Curabitur in mauris dapibus, aliquam velit sit amet, consequat metus. Praesent at est
              nunc. Fusce sed erat ex. Aliquam fringilla euismod vestibulum. Donec imperdiet nec est
              id aliquam. Sed sed ante ipsum. Cras id malesuada eros. Proin pharetra ultricies
              accumsan. Etiam placerat tempor nunc vitae cursus. (font mali)
            </p>
            <p className="mb-0 pb-0 font-kite-one">
              Curabitur in mauris dapibus, aliquam velit sit amet, consequat metus. Praesent at est
              nunc. Fusce sed erat ex. Aliquam fringilla euismod vestibulum. Donec imperdiet nec est
              id aliquam. Sed sed ante ipsum. Cras id malesuada eros. Proin pharetra ultricies
              accumsan. Etiam placerat tempor nunc vitae cursus. (font kite-one)
            </p>
          </SemiTransparentTile>
        </div>
      </PublicPageLayoutWithFixedBackgroundImage>
    </>
  );
};

QuiSuisJe.displayName = 'QuiSuisJe';
