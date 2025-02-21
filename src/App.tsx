
import DatesMap from './components/DatesMap';
import Line from './pages/Line';
import style from './style/App.module.scss';

function App() {
   const { wrapper } = style;
   return (
      <div className={wrapper}>
         <Line />
         <DatesMap />
      </div>
   );
}

export default App;
