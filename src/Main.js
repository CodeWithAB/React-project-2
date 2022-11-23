import classes from "./Main.module.css"
import pic1 from "./3.png"
import pic2 from "./4.png"
import pic3 from "./learn_machine_learning_courses_online.png"
import pic4 from "./6.png"
import pic5 from "./automation-testing-an-overview-2.png"
import pic6 from "./what_is_isa_blog_1.png"

function Main(){
    return(
        <main className={classes.Main}>
        <h2>Trending Posts</h2> 
         <p>Filter by Catergory</p>
         <div className={classes.choose}>
            <span >All</span>
            <span >Artificial Intelligence</span>
            <span >Cloud Computing</span>
            <span >DevOps</span>
            <span >Programming Languages</span>
            <span >Mobile Application Development</span>
            <span >Technology and Tools</span> 
            <span >Get a Job in a Tech Company</span>
            <span >others</span>
         </div>
          <section className={classes.split}>
         <div  className={classes.card}>
            <img className={classes.image} src={pic5} />
            <h2 >What is Web Scraping?</h2>
            <i  >Edyoda</i>
             <span>/23 Aug 2019</span>
             <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita sapiente suscipit in itaque ipsam illum nostrum vel atque velit quo, veniam maxime qui id voluptas laborum! Quia optio tenetur nequenostrum vel atque velit quo, veniam maxime qui id voluptas laborum! Quia optio tenetur neque.</p>
            </div>

            <div className={classes.card}>
            <img  src={pic3} alt=""/>
            <h2 >Introduction to Machine 
                 Learning Online Course</h2>
            <i  >Edyoda</i>
             <span>/23 Aug 2019</span>
             <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita sapiente suscipit in itaque ipsam illum nostrum vel atque velit quo, veniam maxime qui id voluptas laborum! Quia optio tenetur nequenostrum vel atque velit quo, veniam maxime qui id voluptas laborum! Quia optio tenetur neque.</p>
            </div>

            <div className={classes.card}>
            <img  src={pic4} alt=""/>
            <h2 >LAMP Stack Vs MEAN Stack</h2>
            <i  >Edyoda</i>
             <span>/23 Aug 2019</span>
             <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita sapiente suscipit in itaque ipsam illum nostrum vel atque velit quo, veniam maxime qui id voluptas laborum! Quia optio tenetur nequenostrum vel atque velit quo, veniam maxime qui id voluptas laborum! Quia optio tenetur neque.</p>
            </div>

            <div className={classes.card}>
            <img  src={pic2} alt=""/>
            <h2>Impact of Cloud computing in various industries</h2>
            <i >Edyoda</i>
             <span>/23 Aug 2019</span>
             <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita sapiente suscipit in itaque ipsam illum nostrum vel atque velit quo, veniam maxime qui id voluptas laborum! Quia optio tenetur nequenostrum vel atque velit quo, veniam maxime qui id voluptas laborum! Quia optio tenetur neque.</p>
            </div>

            <div className={classes.card}>
            <img src={pic1} alt=""/>
            <h2 >Challenges of Machine Learning</h2>
            <i  >Edyoda</i>
             <span>/23 Aug 2019</span>
             <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita sapiente suscipit in itaque ipsam illum nostrum vel atque velit quo, veniam maxime qui id voluptas laborum! Quia optio tenetur nequenostrum vel atque velit quo, veniam maxime qui id voluptas laborum! Quia optio tenetur neque.</p>
            </div>

            <div className={classes.card}>
            <img  src={pic6} alt=""/>
            <h2 >What is Income Share Agreement?</h2>
            <i  >Edyoda</i>
            <span>/23 Aug 2019</span>
            <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita sapiente suscipit in itaque ipsam illum nostrum vel atque velit quo, veniam maxime qui id voluptas laborum! Quia optio tenetur nequenostrum vel atque velit quo, veniam maxime qui id voluptas laborum! Quia optio tenetur neque.</p>
        </div>
        </section>
        </main>
    )
}

export default Main