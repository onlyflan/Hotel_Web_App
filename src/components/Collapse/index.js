
import "./collapse.css"

import bg1 from '../../assets/images/bg1.webp';
import { useState } from "react";
import singiel from "../../assets/images/main-brand-signiel.png"
import city2 from "../../assets/images/main-brand-lotte-city-hotels.png"
import l7 from "../../assets/images/main-brand-l7-hotels.png"
import hotel2 from "../../assets/images/main-brand-lotte-hotels-resorts.png"
import resort2 from "../../assets/images/221229-228-logo-resort.png"
import { Link } from "react-router-dom";
import { getDomain } from "../../utils/domain"

const CollapseHome = () => {
  const domainUrl = getDomain();

  var url = domainUrl+"/static/media/"
  var resort = url + "bg1.8ae77447d031137cf9f2.webp"
  var city = url + "bg2.2f12d99009a6d5cecc18.webp"
  var hotel = url + "bg3.96a68973e6372154d23f.webp"
  var singel = url + "bg4.1996c66090f9a279fa3e.webp"

  const HandleOnlick = (image, type) => {
    if (image === resort) {
      var bg = document.querySelector(".collapseBG")
      bg.style = `
      background-image: url(${image});
      `
    } else {
      var bg = document.querySelector(".collapseBG")
      bg.style = `
      background-image: url(${image});
      `
    }

    var otherOpacity = document.querySelectorAll('.collapse__content')
    otherOpacity.forEach(item => {
      item.style = `opacity: 0.4;`
      var otherContent = item.querySelector(`.collapse__text`);
      otherContent.style = "display: none;"
    });

    var opacity = document.querySelector(`.${type}`)
    opacity.style = ` opacity: 1;`
    var content = opacity.querySelector(`.collapse__text`)
    content.style = "display: block;"
  }

  return (
    <>
      <div className="collapseBG">
        <div className='container'>
          <div className="row">
            <div className="collapse__title col-xxl-12">
              LOTTE HOTELS & RESORTS Brands
            </div>
            <div className="collapse__content singiel col-xxl-3 col-xl-3 col-lg-3 col-md-12" onMouseEnter={() => HandleOnlick(singel, `singiel`)}>
              <img src={singiel} />
              <div className="collapse__text">
                <span>Life beyond Expectations</span>
                <p>SIGNIEL cung cấp chất lượng vượt qua sự mong đợi của quý khách. Chúng tôi cung cấp các dịch vụ cá nhân tốt nhất với phong cách sang trọng mà quý khách không thể tìm thấy ở bất kỳ nơi nào khác. Hãy tự thưởng cho mình những đặc quyền lớn nhất của cuộc sống bằng cách lưu trú tại SIGNIEL;</p>
                <button className="detail">
                  <Link to="/detail">
                    Xem chi tiết
                  </Link>
                </button>
              </div>
            </div>
            <div className="collapse__content resort col-xxl-3 col-xl-3 col-lg-3 col-md-12" onMouseEnter={() => HandleOnlick(resort, 'resort')}>
              <img src={resort2} />
              <div className="collapse__text">
                <span>Design the Value of Time</span>
                <p>SIGNIEL cung cấp chất lượng vượt qua sự mong đợi của quý khách. Chúng tôi cung cấp các dịch vụ cá nhân tốt nhất với phong cách sang trọng mà quý khách không thể tìm thấy ở bất kỳ nơi nào khác. Hãy tự thưởng cho mình những đặc quyền lớn nhất của cuộc sống bằng cách lưu trú tại SIGNIEL;</p>
                <button className="detail">
                  <Link to="/detail">
                    Xem chi tiết
                  </Link>
                </button>
              </div>
            </div>
            <div className="collapse__content hotel col-xxl-3 col-xl-3 col-lg-3 col-md-12" onMouseEnter={() => HandleOnlick(hotel, "hotel")}>
              <img src={hotel2} />
              <div className="collapse__text">
                <span>Life beyond Expectations</span>
                <p>SIGNIEL cung cấp chất lượng vượt qua sự mong đợi của quý khách. Chúng tôi cung cấp các dịch vụ cá nhân tốt nhất với phong cách sang trọng mà quý khách không thể tìm thấy ở bất kỳ nơi nào khác. Hãy tự thưởng cho mình những đặc quyền lớn nhất của cuộc sống bằng cách lưu trú tại SIGNIEL;</p>
                <button className="detail">
                  <Link to="/detail">
                    Xem chi tiết
                  </Link>
                </button>
              </div>
            </div>
            <div className="collapse__content city col-xxl-3 col-xl-3 col-lg-3 col-md-12" onMouseEnter={() => HandleOnlick(city, 'city')}>
              <img src={city2} />
              <div className="collapse__text">
                <span>Life beyond Expectations</span>
                <p>SIGNIEL cung cấp chất lượng vượt qua sự mong đợi của quý khách. Chúng tôi cung cấp các dịch vụ cá nhân tốt nhất với phong cách sang trọng mà quý khách không thể tìm thấy ở bất kỳ nơi nào khác. Hãy tự thưởng cho mình những đặc quyền lớn nhất của cuộc sống bằng cách lưu trú tại SIGNIEL;</p>
                <button className="detail">
                  <Link to="/detail">
                    Xem chi tiết
                  </Link>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default CollapseHome;