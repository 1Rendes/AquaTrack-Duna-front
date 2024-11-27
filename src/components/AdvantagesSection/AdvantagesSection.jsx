import css from './AdvantagesSection.module.css';
import desktopImage from "../../img/advantages-desktop.webp";
import desktopImage2x from "../../img/advantages-desktop-2.webp";
import tabletImage from "../../img/advantages-tabel.webp";
import tabletImage2x from "../../img/advantages-tabel-2.webp";
import mobileImage from "../../img/advantages-mobil.webp";
import mobileImage2x from "../../img/advantages-mobil-2.webp";

const AdvantagesSection = () => {
  return (
    <div className={css.advantagessection}>
      <picture>
        <source
          srcSet={`${desktopImage} 1x, ${desktopImage2x} 2x`}
          media="(min-width: 1440px)"
        />
        <source
          srcSet={`${tabletImage} 1x, ${tabletImage2x} 2x`}
          media="(min-width: 768px)"
        />
        <source
          srcSet={`${mobileImage} 1x, ${mobileImage2x} 2x`}
          media="(max-width: 767px)"
        />
        <img
          src={desktopImage}
          alt="Banking App"
          className={css.img} 
        />
      </picture>
    </div>
  );
};

export default AdvantagesSection;
