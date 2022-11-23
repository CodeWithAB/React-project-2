import classes from "./Header.module.css"

function Header() {
    return (
        <header  className={classes.Header}>
        <nav>
            <span class={classes.Logo}>EDYODA</span> 
            <span class={classes.ex}>Explore Categories</span>
            <br/>
             <i>Stories</i>
            <div className={classes.rightside}>
             <p>EdYoda is free learning and knowledge <br/>
             sharing platform for techies</p>
             <button> Go To Main Website </button>
             </div>
        </nav>
        </header>
    )
  }
  
  export default Header;
  