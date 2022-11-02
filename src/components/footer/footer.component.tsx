import { Link } from "react-router-dom";
import { returnImageLocation } from "../../utils/funcs/publicFuncs";

export const Footer = () => {
  return (
    <footer id="resources" className="bg-[#232127] py-14 lg:py-18">
      <div className="flex-col gap-2">
        <div className="flex flex-col items-center gap-12 justify-between lg:flex-row max-w-[1108px] mx-auto lg:items-start">
          <div className="flex flex-col items-start justify-start lg:self-start lg:w-1/5">
            <Link to="/">
              {" "}
              <img
                src={returnImageLocation("/images/logo-white.svg")}
                alt="logo white"
                className=""
              />
            </Link>
          </div>
          <div className="flex flex-col justify-between text-center lg:text-left lg:flex-row lg:w-3/5">
            <div className="flex flex-col gap-[10px] mb-10">
              <p className="mb-3 text-white text-bold">Features</p>
              <Link to="/features">
                <p className="text-[#bfbfbf] hover:text-[#2BD0D0] text-[15px] leading-[22px] font-[500]">
                  Link Shortening
                </p>
              </Link>
              <Link to="/features">
                <p className="text-[#bfbfbf] hover:text-[#2BD0D0] text-[15px] leading-[22px] font-[500]">
                  Branded Links
                </p>
              </Link>
              <Link to="/features">
                <p className="text-[#bfbfbf] hover:text-[#2BD0D0] text-[15px] leading-[22px] font-[500]">
                  Analytics
                </p>
              </Link>
            </div>
            <div className="flex flex-col gap-[10px] mb-10">
              <p className="mb-3 text-white text-bold">Resources</p>
              <Link to="/resources">
                <p className="text-[#bfbfbf] hover:text-[#2BD0D0] text-[15px] leading-[22px] font-[500]">
                  Blog
                </p>
              </Link>
              <Link to="/resources">
                <p className="text-[#bfbfbf] hover:text-[#2BD0D0] text-[15px] leading-[22px] font-[500]">
                  Developers
                </p>
              </Link>
              <Link to="/resources">
                <p className="text-[#bfbfbf] hover:text-[#2BD0D0] text-[15px] leading-[22px] font-[500]">
                  Support
                </p>
              </Link>
            </div>
            <div className="flex flex-col gap-[10px] mb-12">
              <p className="mb-3 text-white text-bold">Company</p>
              <Link to="/company">
                <p className="text-[#bfbfbf] hover:text-[#2BD0D0] text-[15px] leading-[22px] font-[500]">
                  About
                </p>
              </Link>
              <Link to="/company">
                <p className="text-[#bfbfbf] hover:text-[#2BD0D0] text-[15px] leading-[22px] font-[500]">
                  Our Team
                </p>
              </Link>
              <Link to="/company">
                <p className="text-[#bfbfbf] hover:text-[#2BD0D0] text-[15px] leading-[22px] font-[500]">
                  Careers
                </p>
              </Link>
              <Link to="/company">
                <p className="text-[#bfbfbf] hover:text-[#2BD0D0] text-[15px] leading-[22px] font-[500]">
                  Contact
                </p>
              </Link>
            </div>
          </div>
          <div className="flex gap-6 lg:w-1/5">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <div className="w-6 h-6 bg-no-repeat bg-facebook icon-hover "></div>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <div className="w-6 h-6 bg-no-repeat bg-twitter icon-hover"></div>
            </a>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noreferrer">
              <div className="w-6 h-6 bg-no-repeat bg-pintrest icon-hover"></div>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer">
              <div className="w-6 h-6 bg-no-repeat bg-instagram icon-hover"></div>
            </a>
          </div>
        </div>
        <div className="font-semibold text-center text-white text-md">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by
          <a
            href="https://github.com/barnettet31"
            target="_blank"
            rel="noreferrer"
            className="text-[#2bd0d0]">
            {" "}
            Travis Barnette
          </a>
          .
        </div>
      </div>
    </footer>
  );
};
