'use client';
import Image from "next/image";
import { useRouter } from 'next/navigation'
export default function HomePage(){
       const router = useRouter();
    return(
    <div className="homepage_container">
                <div className="homepage_title_container">
                    <h1 className="homepage_title">Welcome to our website!</h1>
                </div>
               <div className="Homepage_img_form_container" style={{ position: 'relative', width: '100%', height: '1000px' }}>
               <form action="/" method="post" className="homepage_form">
                <h3>Contact us to schedule a meeting or ask questions!</h3>
                <label htmlFor="name" className="homepage_label">Name:</label> <br />
                <input type="text" name="name" placeholder="Enter your name" className="homepage_input" />
                <label htmlFor="email" className="homepage_label">Email:</label><br />
                <input type="email" name="email" placeholder="Enter your email" className="homepage_input" /> <br />
                <label htmlFor="message" className="homepage_label">Message:</label><br />
                <textarea name="message" placeholder="Enter your message" className="homepage_textarea"></textarea><br />
                <button type="submit" className="homepage_submit_button">Submit</button>
              </form>
              <Image src="/images/employees.jpg"  alt="Homepage Image" fill style={{
                objectFit: 'cover', // Crops the top/bottom to fit the height
                objectPosition: 'center', // Keeps the center of the image visible
              }}
              quality={100} 
              />
              </div>
              <div className="homepage_description_container">
                <p className="homepage_description">We are glad to have you here. Explore our services and feel free to contact us for more information.</p>
                <button className="homepage_button" onClick={() => router.push('/About')}>Learn More</button>
              </div>
            </div>
            )
}