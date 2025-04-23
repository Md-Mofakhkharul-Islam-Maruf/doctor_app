import { Mail } from 'lucide-react';
import img from '../../assets/logo.png';
const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-white  p-10 mt-20">
        <aside>
          <figure className="flex items-center gap-2 mb-6">
            <img src={img} alt="logo" />
            <h1 className="text-3xl font-bold">DocTalk</h1>
          </figure>
          <div>
            <ul className="flex gap-10">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">My-Bookings</a>
              </li>
              <li>
                <a href="">Blogs</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
        </aside>
        <div className="flex w-full flex-col">
          <div className="divider"></div>
        </div>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              className="text-red-600"
              href="https://www.youtube.com/@marufhasan5422"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a
              className="text-blue-800"
              href="https://www.facebook.com/maruf.hasan.67/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a
              className="text-red-500"
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl"
              target="_blank"
            >
              <Mail />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
