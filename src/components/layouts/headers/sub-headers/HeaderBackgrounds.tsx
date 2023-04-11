import HeaderTopBackgroundAVIF from "../../../../assets/medias/background/header-top-background.avif"
import HeaderTopBackgroundPNG from "../../../../assets/medias/background/header-top-background.png"
import HeaderTopDarkBackgroundAVIF from "../../../../assets/medias/background/header-top-dark-background.avif"
import HeaderTopDarkBackgroundPNG from "../../../../assets/medias/background/header-top-dark-background.png"

const HeaderBackgroundClassic = () => {
  return (
    <div className="header-background">
        <div>
          <picture>
            <source
              src={HeaderTopBackgroundAVIF}
              type="image/avif"
            />
            <img
              src={HeaderTopBackgroundPNG}
              alt=""
              className="light-version"
              decoding="async"
            />
          </picture>
          <picture>
            <source
              src={HeaderTopDarkBackgroundAVIF}
              type="image/avif"
            />
            <img
              src={HeaderTopDarkBackgroundPNG}
              alt=""
              className="dark-version"
              decoding="async"
            />
          </picture>
        </div>
      </div>
  )
}

export { HeaderBackgroundClassic }