'use client';
import GoogleMaps from "./components/GoogleMaps";
import { useRouter } from 'next/navigation'
import HomePage from "./HomePage/page";
export default function Home() {
   const router = useRouter();

  return (
    <div>
      <main>
        <nav >
            <ul className="main_navbar">
              <li className="main_navbar_list"><button onClick={() => router.push('/About')}>About</button></li>
              <li className="main_navbar_list"><button>Services</button></li>
              <li className="main_navbar_list"><button>Contact us</button></li>
              <li className="main_navbar_list"><button>Login</button></li>
          </ul>
        </nav>
        <HomePage />
        <footer className="footer_items">
          <GoogleMaps />
            <ul className="footer_navbar_list">
                <li className="footer_navbar_list_item"><button onClick={() => router.push('/About')}>About</button></li>
                <li className="footer_navbar_list_item"><button>Services</button></li>
                <li className="footer_navbar_list_item"><button>Contact us</button></li>
                <li className="footer_navbar_list_item"><button>Login</button></li>   
          </ul>
        </footer>
      </main>
    </div>
  )
}