import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Contact
        </h2>
        <div className="flex justify-center items-center space-x-8">
          <a
            href="mailto:yyyljy@gmail.com"
            className="text-4xl text-slate-300 hover:text-blue-400 transition-colors"
          >
            <MdEmail />
          </a>
          <a
            href="https://github.com/yyyljy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-slate-300 hover:text-blue-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yyyljy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-slate-300 hover:text-blue-400 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
