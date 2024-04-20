/* eslint-disable react/prop-types */
import "../style/AgeGroupItem.scss";
import childrenIcon from "../assets/icons/age-group/children.png";
import teenIcon from "../assets/icons/age-group/teen.png";
import adultIcon from "../assets/icons/age-group/adult.png";

function AgeGroupItem({ ageGroup, altTxt, heading, minAge, maxAge, active }) {
  let chosenIcon;

  if (ageGroup == "children") {
    chosenIcon = childrenIcon;
  } else if(ageGroup == "teens") {
    chosenIcon = teenIcon
  } else {
    chosenIcon = adultIcon
  }

  return (
    <>
      <button className={active ? "age-group-item active-border" : "age-group-item"}>
        <img src={chosenIcon} alt={altTxt} className="age-group-item__icon" />
        <div className="age-group-item__txt">
          <h2 className="age-group-item__heading">{heading}</h2>
          <p className="age-group-item__age-span">
            {minAge} &mdash; {maxAge} лет
          </p>
        </div>
      </button>
    </>
  );
}

export default AgeGroupItem;
