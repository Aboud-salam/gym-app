import logo from "@/assets/Logo.png";
import { footerLinks } from "@/constants";
const Footer = () => {
  return (
    <section className="bg-primary-100">
      <div
        className={`custom-container lg:grid-cols-3 md:grid-cols-2 grid-cols-[minmax(300px,_1fr)] 
        text-center md:text-left justify-items-center grid justify-center section-padding gap-20`}
      >
        <div className="flex flex-col lg:gap-6 gap-3 md:items-start items-center max-w-[350px] md:max-w-none">
          <img src={logo} alt="logo" className="mx-auto md:mx-0" />
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            esse impedit velit eum ullam atque alias! Aliquid quaerat doloribus
          </p>
          <p>&copy; Evogym All Rights Reserved</p>
        </div>
        <div className="">
          <h4 className="font-bold">Links</h4>
          <ul className="list-none mt-3">
            {footerLinks.map((link, index) => (
              <li
                key={index}
                className={`${index !== footerLinks.length - 1 ? "mb-1" : ""}`}
              >
                <a
                  href="#"
                  className={`underline transition-all hover:text-primary-500`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-3">Tempus metus mattis risus volutpat egestas.</p>
          <p>
            <a
              href="#"
              className="underline transition-all hover:text-primary-500"
            >
              (333)425-6825
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
