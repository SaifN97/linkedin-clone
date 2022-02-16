import "./Widgets.scss";
import { Info } from "@material-ui/icons";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>

      {newsArticle("Salary hikes in 2022", "Top news: 2,294 readers")}
      {newsArticle("Corona Virus India updates", "Top news: 3,816 readers")}
      {newsArticle(
        "It's back to office time for IT firms",
        "Software Development: 1,565 readers"
      )}
      {newsArticle("Tesla hits new highs", "Cars & auto: 8,612 readers")}
      {newsArticle("Is Redux good?", "Code: 408 readers")}
    </div>
  );
};

export default Widgets;
