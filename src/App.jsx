import Header from "./components/Header";
import AgeGroupItem from "./components/Age-group-item";
import "./style/App.scss";
import filterIcon from "./assets/icons/filters.svg";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <button className="filters">
          <img className="filters__icon" src={filterIcon} alt="Filters icon." />
          <span>Фильтры</span>
        </button>
        <div className="container">
          <div className="main__inner">
            <h1 className="main__heading">Все программы обучения</h1>
            <div className="age-groups">
              <AgeGroupItem
                ageGroup="children"
                altTxt="Children icon."
                heading="Дети"
                minAge="8"
                maxAge="14"
                active={true}
              />
              <AgeGroupItem
                ageGroup="teens"
                altTxt="Teenagers icon."
                heading="Подростки"
                minAge="14"
                maxAge="18"
              />
              <AgeGroupItem
                ageGroup="adults"
                altTxt="Adults icon."
                heading="Взрослые"
                minAge="18"
                maxAge="&infin;"
              />
            </div>
            <hr />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
