// import logo from './gif.svg';
import './App.css';
import ComposantUn from './components/componentUn';
import ComposantDeux from './components/componentDeux';
import ComposantTrois from './components/componentTrois';
import styles from './components/componentStyle.module.scss';


function App() {
  return (
      <header>
        <ComposantUn></ComposantUn>
        <hr className={styles.trait}></hr>
        <div className={styles.bas}>
        <ComposantTrois></ComposantTrois>
        <ComposantDeux ></ComposantDeux>
        </div>
      </header>
  );
}

export default App;
