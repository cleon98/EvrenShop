import styles from './styles.module.css'

function Buttons(props) {
    const { handleClickMenu, iconActive } = props;
  
    return (
      <>
        <span className = {styles.btnMenu} onClick={() => handleClickMenu()}>
          <i className = {iconActive}></i>
        </span>
      </>
    );
  }
  export { Buttons };