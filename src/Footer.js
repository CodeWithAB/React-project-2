import classes from "./Footer.module.css"

function Footer(){
    return(
        <footer className={classes.Footer}>
        <section>
           <h3>EDYODA</h3>
        <h5>About Us</h5>
        <h5>Careers</h5>
        <h5>Contact Us</h5>
        <h5>Terms of Use</h5>
        <h5>Privacy Policy</h5>
         </section>

         <section>
        <h3>RESOURCES</h3>
        <h5>Courses</h5>
        <h5>Learning Videos</h5>
        <h5>Educators</h5>
        <h5>EdYoda Stories</h5>
        <h5>University</h5>
        </section>

        <section>
           <h3>For ENTERPRISES</h3>
           <h5>Train Your Employees</h5>
           <h3>Quick Links</h3>
           <h5>Learn and Earn</h5>
           <h5>Tips for learning-Enabler</h5>
           <h5>Request New Topic</h5>
           <h5>Certification</h5>
           <h5>Affiliate Program</h5>
        </section>
       
       <section>
           <h3>CONNECT</h3>
           <h5>2nd Floor #188, Survey No. - 123/1,<br/>
               Incubes Building Next to McDonalds, <br/>
               ITPL Main Rd, Brookefield, <br/>
               Bengaluru, Karnataka-560037,<br/>
               India</h5>
               <h5>hello@edyoda.com</h5>
       </section>
       </footer>
    )
}

export default Footer