import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text1: `YES!`,
    text2: `A perfect day to wear your shorts!`,
    text3: `Go out with confidence and enjoy having comfortable lower legs!`,
    iconName: "sun",
    iconName2: "thumbs up",
    iconName3: "calendar check outline",
    iconName4: "compass outline",
    iconName5: "thermometer",
    iconName6: "umbrella",
    iconName7: "thumbs down",
    link: `Haven't got any shorts?`,
  },
  winter: {
    text1: `It's winter! Put your trousers on!`,
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());

  // const [weather, setWeather] = useState(object);

  // useEffect(() => {
  //   setWeather({});
  // }, []);

  const {
    text1,
    text2,
    text3,
    iconName,
    iconName2,
    iconName3,
    iconName4,
    iconName5,
    iconName6,
    iconName7,
    link,
    Time,
  } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <h1 className="yes">{text1}</h1>
      <h1>{text2}</h1>
      <div className="icons">
        <i className={`${iconName3} big icon `} />
        <i className={`${iconName2} big green icon`} />
        <br />
        <i className={`${iconName4} big icon`} />
        <i className={`${iconName2} big green icon`} />
        <br />
        <i className={`${iconName} big icon `} />
        <i className={`${iconName2} big green icon`} />
        <br />
        <i className={`${iconName5} big icon `} />
        <i className={`${iconName2} big green icon`} />
        <br />
        <i className={`${iconName6} big icon `} />
        <i className={`${iconName7} big red icon`} />
      </div>
      <h2>{text3}</h2>
      <p>
        Of course it can get a little chilly in the evenings but you will still
        be able to enjoy your lower leg freedom until the sun goes down. Maybe
        bring a pair of trousers if you're planning on going 'out out'
        afterwards.
      </p>
      <a
        className="link"
        href="https://www.amazon.co.uk/men-shorts/b?ie=UTF8&node=1731002031"
      >
        {link}
      </a>
      <br />
    </div>
  );
};

export default SeasonDisplay;
