'use client';
import GoogleMaps from "./components/GoogleMaps";
import HomePage from "./components/HomePage/page";

export default function Home() {
    console.log(process.env.NEXT_PUBLIC_MAPS_API_KEY);

  return (
    <div>
      <main>
        <nav >
            <ul className="main_navbar">
              <li className="main_navbar_list"><button>About</button></li>
              <li className="main_navbar_list"><button>Services</button></li>
              <li className="main_navbar_list"><button>Contact us</button></li>
              <li className="main_navbar_list"><button>Login</button></li>
          </ul>
        </nav>
        <HomePage />
        <footer className="footer_items">
          <GoogleMaps />
            <ul className="footer_navbar_list">
                <li className="footer_navbar_list_item"><button>About</button></li>
                <li className="footer_navbar_list_item"><button>Services</button></li>
                <li className="footer_navbar_list_item"><button>Contact us</button></li>
                <li className="footer_navbar_list_item"><button>Login</button></li>   
          </ul>
        </footer>
      </main>
    </div>
  )
}