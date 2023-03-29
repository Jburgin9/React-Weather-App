import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./index.css";

const WEEKDAYS = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const Forecast = ({ data }) => {
  return (
    <div>
      <label className="title">Forecast</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => {
          return (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                    <div className="forecast-container">
                        <img alt='forecast' className='forecast-icon' src={`assets/icons/${item.weather[0].icon}.png`}/>
                        <label className="day">{WEEKDAYS[idx]} </label>
                        <label className="description">{item.weather[0].description} </label>
                        <label className="min-max">{Math.trunc(item.main.temp_min)}°F / {Math.trunc(item.main.temp_max)}°F</label>
                    </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel></AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Forecast;