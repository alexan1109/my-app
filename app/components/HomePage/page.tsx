import Image from "next/image";

export default function HomePage() {
    return (
        <div className="homepage_container">
            <div className="homepage_title_container">
                <h1 className="homepage_title">Welcome to our website!</h1>
            </div>
           <div style={{ position: 'relative', width: '100%', height: '1000px' }}>
             <Image src="/images/employees.jpg"  alt="Homepage Image" fill style={{
          objectFit: 'cover', // Crops the top/bottom to fit the height
          objectPosition: 'center', // Keeps the center of the image visible
        }}
        quality={100}/>
          </div>
          <div className="homepage_description_container">
            <p className="homepage_description">We are glad to have you here. Explore our services and feel free to contact us for more information.</p>
            <button className="homepage_button">Learn More</button>
          </div>
        </div>
    );
}