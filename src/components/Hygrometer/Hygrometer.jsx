import ReactSlider from 'react-slider';
import './Hygrometer.css';
import { useClimate } from '../../context/ClimateContext';

function Hygrometer() {
  const { humidity, thermoHumidity, setThermoHumidity } = useClimate();

  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {humidity}%</div>
      <ReactSlider
        value={thermoHumidity}
        onAfterChange={val => setThermoHumidity(val)}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Hygrometer;
