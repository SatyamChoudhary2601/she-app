import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./MainBody.css";
import { isMobile } from "react-device-detect";
import { IconButton } from '@material-ui/core';


import CakeIcon from "@material-ui/icons/Cake";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import WishMe from "./WishMe";

function MainBody() {
  const [photos, setPhotos] = useState([
    {
      happyBirthday: "janmadin mubaarak!",
      lang: "Hindi",
      url:
        "https://1.bp.blogspot.com/-IZam73lsY7g/YAcx3hLUHQI/AAAAAAAACsY/D3AAsso_07scyPjBCgcrAhdxcO_i1_tvgCNcBGAsYHQ/s600/3.PNG",
    },
    {
      happyBirthday: "Grattis på födelsedagen!",
      lang: "Swedish",
      url:
        "https://1.bp.blogspot.com/-iLz8yG7w4TA/YAcx50eZDfI/AAAAAAAACs0/VUEKPV_xBfUD5zPQZ5JmbAMmxBsF5LOMwCNcBGAsYHQ/s600/4.PNG",
    },
    {
      happyBirthday: "Piṟantanāḷ vāḻttukkaḷ!",
      lang: "Tamil",
      url:
        "https://1.bp.blogspot.com/-a4uHhp1zMJY/YAcx5xFvH_I/AAAAAAAACs4/HGcs-zKyZeYPXb_c8o6eTl7pBgUnGJfzQCNcBGAsYHQ/s602/5.PNG",
    },
    {
      happyBirthday: "S̄uk̄hs̄ạnt̒ wạn keid!",
      lang: "Thai",
      url:
        "https://1.bp.blogspot.com/-1l_Yr1ghy3s/YAcxz7AKNyI/AAAAAAAACrs/0tWqAoLqJvoLUKvwY5bqIiB6FIMA80ZvQCNcBGAsYHQ/s600/2.PNG",
    },
    {
      happyBirthday: "İyi ki doğdun!",
      lang: "Turkish",
      url:
        "https://1.bp.blogspot.com/-vTRpR00OSNw/YAcxwq_j4DI/AAAAAAAACrE/lh9sLmKDKaMAFCd9yB04vcJOUackBKUwwCNcBGAsYHQ/s600/1.PNG",
    },
    {
      happyBirthday: "Chúc mừng sinh nhật!",
      lang: "Vietnamese",
      url:
        "https://1.bp.blogspot.com/-eR1bXYof5UY/YAcx6b9WY2I/AAAAAAAACs8/XBCRmDlOXOQ4XLBocENXGEJepcQy_RBiACNcBGAsYHQ/s600/6.PNG",
    },
    {
      happyBirthday: "Usuku olumnandi lokuzalwa!",
      lang: "Zulu",
      url:
        "https://1.bp.blogspot.com/-Fx3hAHQJiec/YAcx61_G3jI/AAAAAAAACtA/-tlCpiE8NcA_3nYYvu0RKOWzY492PIJfACNcBGAsYHQ/s599/7.PNG",
    },
    {
      happyBirthday: "Śubha janmadina!",
      lang: "Bangla",
      url:
        "https://1.bp.blogspot.com/-JYEpc4jY5vs/YAcx7E89gNI/AAAAAAAACtE/GhyJw6R7CMwknRgB_KV5dxuIVNiH6EuQQCNcBGAsYHQ/s598/8.PNG",
    },
    {
      happyBirthday: "Srećan rođendan!",
      lang: "Serbian",
      url:
        "https://1.bp.blogspot.com/-RAI30Qh51iE/YAcx7fP0dOI/AAAAAAAACtI/Lsh-0uXwkOMye97O3vflT4e25VPlTQJhACNcBGAsYHQ/s600/9.PNG",
    },
    {
      happyBirthday: "Wilujeung tepang taun!",
      lang: "Sudanese",
      url:
        "https://1.bp.blogspot.com/-hltKau_XFwA/YAcxwubtf1I/AAAAAAAACrI/YmmvlfFD3r4PnWWP1d6HNSq24y3l6o60QCNcBGAsYHQ/s600/10.PNG",
    },
    {
      happyBirthday: "¡Feliz cumpleaños!",
      lang: "Spanish",
      url:
        "https://1.bp.blogspot.com/-xB5z3FXAPMU/YAcxwom_iQI/AAAAAAAACrA/dNKUWDyV3x0H2JWIj5OmgWL1srAn-pS0wCNcBGAsYHQ/s599/11.PNG",
    },
    {
      happyBirthday: "S dnem ​​rozhdeniya!",
      lang: "Russian",
      url:
        "https://1.bp.blogspot.com/-QpmGJr89Nns/YAcxxh4wdjI/AAAAAAAACrM/veRlcdS5-hE_7kHbP751dUO2K8hdBbT9gCNcBGAsYHQ/s587/12.PNG",
    },
    {
      happyBirthday: "Sretan rođendan!",
      lang: "Bosnian",
      url:
        "https://1.bp.blogspot.com/-3RFkrOw7Uws/YAcxxxEH1HI/AAAAAAAACrQ/xKbN7GlitnYZlbBP8gjTHbVmCd1u-1PQQCNcBGAsYHQ/s576/13.PNG",
    },
    {
      happyBirthday: "Feliz Aniversário!",
      lang: "Portugese",
      url:
        "https://1.bp.blogspot.com/-ByBE2GDb9f0/YAcxx41260I/AAAAAAAACrU/KWi1qiY_e7wV73NBnCk_nNKX6NP_YI_LgCNcBGAsYHQ/s587/14.PNG",
    },
    {
      happyBirthday: "Janamadina mubāraka!",
      lang: "Punjabi",
      url:
        "https://1.bp.blogspot.com/-I35Id0W0ZQo/YAcxySIJU8I/AAAAAAAACrY/JuzJ5xv1yP8P5_KbF9ms_yWg0NAonCvfACNcBGAsYHQ/s600/15.PNG",
    },
    {
      happyBirthday: "La multi ani!",
      lang: "Romanian",
      url:
        "https://1.bp.blogspot.com/-dVaGsLB6Pss/YAcxy4br6QI/AAAAAAAACrc/B9frrLyjUlgNkwQarLLL25laR7HXsgsZQCNcBGAsYHQ/s527/16.PNG",
    },
    {
      happyBirthday: "Všechno nejlepší k narozeninám!",
      lang: "Czech",
      url:
        "https://1.bp.blogspot.com/-ee5qEBIiaes/YAcxy5-nDwI/AAAAAAAACrg/h1VpSQANFxIib9tygEdTR0U4ZYjKbE6SQCNcBGAsYHQ/s392/17.PNG",
    },
    {
      happyBirthday: "تولدت مبارک!",
      lang: "Persian",
      url:
        "https://1.bp.blogspot.com/-ee5qEBIiaes/YAcxy5-nDwI/AAAAAAAACrg/h1VpSQANFxIib9tygEdTR0U4ZYjKbE6SQCNcBGAsYHQ/s392/17.PNG",
    },
    {
      happyBirthday: "Janmadinakō śubhakāmanā!",
      lang: "Nepali",
      url:
        "https://1.bp.blogspot.com/-KOpYDCEIbCg/YAcxzfprmvI/AAAAAAAACrk/Hms3Xogv6rM5zaZiG6beMhflbS0dH1A2ACNcBGAsYHQ/s600/18.PNG",
    },
    {
      happyBirthday: "Gelukkige verjaardag!",
      lang: "Dutch",
      url:
        "https://1.bp.blogspot.com/-Q6lb3GwqpVA/YAcxz2QTZlI/AAAAAAAACro/cfc0az13R8EWs-SsmdIfv0R_5ZFjijbngCNcBGAsYHQ/s479/19.PNG",
    },
    {
      happyBirthday: "Wszystkiego najlepszego z okazji urodzin!",
      lang: "Polish",
      url:
        "https://1.bp.blogspot.com/-Ux5uBDAR4mg/YAcx0TiNtrI/AAAAAAAACrw/YvVyzoFggs4dLHJEFfH4UKzp9dyGfDRlQCNcBGAsYHQ/s589/20.PNG",
    },
    {
      happyBirthday: "Vāḍhadivasācyā hārdika śubhēcchā!",
      lang: "Marathi",
      url:
        "https://1.bp.blogspot.com/-Ux5uBDAR4mg/YAcx0TiNtrI/AAAAAAAACrw/YvVyzoFggs4dLHJEFfH4UKzp9dyGfDRlQCNcBGAsYHQ/s589/20.PNG",
    },
    {
      happyBirthday: "saeng-il chugha haeyo!",
      lang: "Korean",
      url:
        "https://1.bp.blogspot.com/-Ux5uBDAR4mg/YAcx0TiNtrI/AAAAAAAACrw/YvVyzoFggs4dLHJEFfH4UKzp9dyGfDRlQCNcBGAsYHQ/s589/20.PNG",
    },
    {
      happyBirthday: "Otanjōbiomedetōgozaimasu!",
      lang: "Japanese",
      url:
        "https://1.bp.blogspot.com/-0Sr1hYjsZZE/YAcx0yDsTPI/AAAAAAAACr0/eg0kN3igX8I4OLf0kyePglhQ6yGkfhwawCNcBGAsYHQ/s545/21.PNG",
    },
    {
      happyBirthday: "Boldog születésnapot!",
      lang: "Hungarian",
      url:
        "https://1.bp.blogspot.com/-LWTA2AVRPGk/YAcx07iBtpI/AAAAAAAACr4/3zR7mokypgAxEbqcOEt2lZAXWy12ec4BACNcBGAsYHQ/s484/22.PNG",
    },
    {
      happyBirthday: "Buon compleanno!",
      lang: "Italian",
      url:
        "https://1.bp.blogspot.com/-De4eg1aYeEM/YAcx1HX7UeI/AAAAAAAACr8/4Hbjc3YbQEIwI0CWsCpuhtSv8IGFb-lowCNcBGAsYHQ/s595/23.PNG",
    },
    {
      happyBirthday: "Chestit Rozhden den!",
      lang: "Bulgarian",
      url:
        "https://1.bp.blogspot.com/-CYY7ZnAzxLM/YAcx13RUouI/AAAAAAAACsA/Vji63NtzRhweKLvMy-mTV1UqQFwowstEACNcBGAsYHQ/s593/24.PNG",
    },
    {
      happyBirthday: "Shēngrì kuàilè!",
      lang: "Chinese",
      url:
        "https://1.bp.blogspot.com/-QOJKVwaQf58/YAcx2MEu1_I/AAAAAAAACsE/h2o-n_HbaH8zCcmdA_KzEI4Poe5dlcD-QCNcBGAsYHQ/s595/25.PNG",
    },
    {
      happyBirthday: "Janmadivasa nī śubhakāmanā!",
      lang: "Gujarati",
      url:
        "https://1.bp.blogspot.com/--A4hpKIt1X4/YAcx2AuQfXI/AAAAAAAACsI/jTKydkPdZfoDPDkxoQdzb4YJZ8Q7z6vJwCNcBGAsYHQ/s454/26.PNG",
    },
    {
      happyBirthday: "Maligayang kaarawan!",
      lang: "Tagalog",
      url:
        "https://1.bp.blogspot.com/-IFYJ-TfGAnI/YAcx2lyHsYI/AAAAAAAACsM/yfCmQ3EWQiYp_Z04pwLz171TML8nIzbwQCNcBGAsYHQ/s455/27.PNG",
    },
    {
      happyBirthday: "Rojbûna te pîroz be!",
      lang: "Kurdish",
      url:
        "https://1.bp.blogspot.com/-X5_h-WpuNbs/YAcx27HQtqI/AAAAAAAACsQ/kWAXjishq6chiWBneMOlRgrdc0OVDYYsQCNcBGAsYHQ/s437/28.PNG",
    },
    {
      happyBirthday: "Twğan küniñ quttı bolsın!",
      lang: "Kazakh",
      url:
        "https://1.bp.blogspot.com/-z1WWZvCjfHE/YAcx3BCW5LI/AAAAAAAACsU/jIgobLA3Jmc7SkWmtifs4OIi2NBSep5MgCNcBGAsYHQ/s602/29.PNG",
    },
    {
      happyBirthday: "Lá breithe shona duit!",
      lang: "Irish",
      url:
        "https://1.bp.blogspot.com/-oXothHFq-sM/YAcx3wMt_6I/AAAAAAAACsc/FF_px_TaP1ERGlt8h9oTvfCKw1CZJTOLwCNcBGAsYHQ/s559/30.PNG",
    },
    {
      happyBirthday: "Hauʻoli Lā Hānau!",
      lang: "Hawalian",
      url:
        "https://1.bp.blogspot.com/-W4S4TfjttKQ/YAcx34cRtPI/AAAAAAAACsg/plbXx0JjL5U5FU7JZcIP9hhHcXtYpcrBACNcBGAsYHQ/s358/31.PNG",
    },
    {
      happyBirthday: "Charoúmena genéthlia!",
      lang: "Greek",
      url:
        "https://1.bp.blogspot.com/-Dghxxok_c24/YAcx4no8-qI/AAAAAAAACsk/PiX8WQwXjsY8zd8sSkXNX-CEXK2-1nvxQCNcBGAsYHQ/s373/32.PNG",
    },
    {
      happyBirthday: "Alles zum Geburtstag!",
      lang: "German",
      url:
        "https://1.bp.blogspot.com/-UJwoqtynTQY/YAcx41qFksI/AAAAAAAACso/mFSDzJOHh8Y0epcPWaCZh7htFjI0ptBqQCNcBGAsYHQ/s601/33.PNG",
    },
    {
      happyBirthday: "Joyeux anniversaire!",
      lang: "French",
      url:
        "https://1.bp.blogspot.com/-j313gYBnV2M/YAcx5MfYruI/AAAAAAAACss/GvyXBiWABQ0v0qyuluqhH-WNcRAErvFpACNcBGAsYHQ/s593/34.PNG",
    },
    {
      happyBirthday: "Happy Birthday",
      lang: "English",
      url:
        "https://1.bp.blogspot.com/-jdz8vkd0SZU/YAcx5bt3A9I/AAAAAAAACsw/0etvPN8x4zsVQwJ1tHUM4DOfQjm4l8-CQCNcBGAsYHQ/s600/35.PNG",
    },
  ]);
  const [wish, setWish] = useState(false);
  const [cake, setCake] = useState(false);

  const wishHandler = () => {
    setWish(!wish);
    setCake(null);
  };

  const cakeHandler = () => {
    setCake(!cake);
    setWish(null);
  };

  console.log(photos);
  if (isMobile) {
    return (
      <div>
        {!wish && !cake && (
          <>
            <span style={{ textAlign: "center" }}>
              <h5>Happy Birthday in 35 Language</h5>
              <p>Swipe Card - Left or Right</p>{" "}
            </span>
          </>
        )}
        {wish && <WishMe />}
        {cake && (
          <>
            <img
              src="https://thumbs.gfycat.com/AdorableJampackedCrab-max-1mb.gif"
              // width="200px"
              height="90px"
              style={{
                justifyContent: "center",
                width: "50%",
                borderRadius: "20px",
              }}
            />
            <img
              src="https://i.pinimg.com/originals/33/80/4d/33804d58cd9c76105c3507ba539666db.gif"
              height="90px"
              style={{
                justifyContent: "center",
                width: "50%",
                borderRadius: "20px",
              }}
            />
          </>
        )}
        <div className="tindercard__cardContainer">
          {photos.map((photo) => (
            <>
              <TinderCard
                className="swipe"
                key={photo.happyBirthday}
                preventSwipe={["up", "down"]}
              >
                <div
                  className="card"
                  style={{
                    backgroundImage: `url(${photo.url})`,
                    borderRadius: "20px",
                  }}
                >
                  <h3 className="lang">{photo.lang}</h3>
                </div>
                <div className="message__container">
                  <h2 className="message">{photo.happyBirthday}</h2>
                </div>
              </TinderCard>
            </>
          ))}
        </div>
        <div className="button_container">
          <IconButton>
            <CakeIcon className="cake__button" onClick={cakeHandler} />
          </IconButton>
          <IconButton>
            <button className="btn btn-primary">
              <span style={{ fontWeight: "bold" }} onClick={wishHandler}>
                Wish!
              </span>
            </button>
          </IconButton>
          <IconButton>
            <MusicNoteIcon className="music__button" />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default MainBody;
