import Image from "next/image";
import logo from "@/public/icon.png";
import RevealScale from "./RevealScale";

export default function Footer() {
  return (
    <>
      {/* bg-[#0C1D33] */}
      <RevealScale>
        <div className="flex bg-gray-950  flex-col md:flex-row p-5 border-y-2 border-[#1694CC]/50">
          {/* get in touch  */}

          <div className="md:w-1/3 w-full border-[#1694CC] px-20 flex justify-center md:border-e-2 items-start flex-col">
            <div className="w-full mb-2 flex justify-start items-center">
              <Image
                src={logo}
                alt="Footer Logo"
                width={50}
                height={50}
                className="my-4"
              />
              <h4 className="text-[#6CC2EE] font-bold">Get in Touch</h4>
            </div>
            <p className="text-white cursor-pointer hover:text-[#6CC2EE] text-[14px] py-2 flex text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 me-3 text-[#6CC2EE]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              Info@etqanco.com
            </p>

            <p className="text-white cursor-pointer hover:text-[#6CC2EE] text-[14px] py-2 flex text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 me-3 text-[#6CC2EE]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              Zahraa Al Maadi , Cairo
            </p>

            <p className="text-white cursor-pointer  hover:text-[#6CC2EE] text-[14px] py-2 flex text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 me-3 text-[#6CC2EE]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              02 23259050
            </p>
          </div>

          {/* Social Media  */}

          <div className="w-full md:border-e-2 border-[#1694CC]  md:w-1/3 h-auto py-8 flex flex-col items-center justify-center gap-4">
            <h3 className="text-2xl text-[#6CC2EE] font-bold mb-3">
              Our Social Media Platforms
            </h3>

            <div className=" w-full md:w-1/3 h-auto flex items-center justify-center gap-4">
              <button className="group transition-all duration-500 hover:-translate-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 93 92"
                  fill="none"
                >
                  <rect
                    x="1.13867"
                    width="91.5618"
                    height="91.5618"
                    rx="15"
                    fill="#337FFF"
                  />
                  <path
                    d="M57.4233 48.6403L58.7279 40.3588H50.6917V34.9759C50.6917 32.7114 51.8137 30.4987 55.4013 30.4987H59.1063V23.4465C56.9486 23.1028 54.7685 22.9168 52.5834 22.8901C45.9692 22.8901 41.651 26.8626 41.651 34.0442V40.3588H34.3193V48.6403H41.651V68.671H50.6917V48.6403H57.4233Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button className="group transition-all duration-500 hover:-translate-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 93 92"
                  fill="none"
                >
                  <rect
                    x="1.13867"
                    width="91.5618"
                    height="91.5618"
                    rx="15"
                    fill="#0A66C2"
                  />
                  <path
                    d="M32.5 34.5C32.5 32.1 34.43 30.2 36.9 30.2C39.37 30.2 41.3 32.1 41.3 34.5C41.3 36.9 39.37 38.8 36.9 38.8C34.43 38.8 32.5 36.9 32.5 34.5ZM32.9 41.9H40.9V68.8H32.9V41.9ZM49.1 41.9H56.8V45C57.9 43.3 60.1 41.5 63.6 41.5C70.2 41.5 72 45.7 72 51.8V68.8H64V53.5C64 50.3 63.3 48.3 60.7 48.3C57.8 48.3 56.4 50.4 56.4 53.5V68.8H48.9L49.1 41.9Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button className="group transition-all duration-500 hover:-translate-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 93 92"
                  fill="none"
                >
                  <rect
                    x="1.13867"
                    width="91.5618"
                    height="91.5618"
                    rx="15"
                    fill="#00D95F"
                  />
                  <path
                    d="M23.5068 66.8405L26.7915 54.6381C24.1425 49.8847 23.3009 44.3378 24.4211 39.0154C25.5413 33.693 28.5482 28.952 32.89 25.6624C37.2319 22.3729 42.6173 20.7554 48.0583 21.1068C53.4992 21.4582 58.6306 23.755 62.5108 27.5756C66.3911 31.3962 68.7599 36.4844 69.1826 41.9065C69.6053 47.3286 68.0535 52.7208 64.812 57.0938C61.5705 61.4668 56.8568 64.5271 51.5357 65.7133C46.2146 66.8994 40.6432 66.1318 35.8438 63.5513L23.5068 66.8405ZM36.4386 58.985L37.2016 59.4365C40.6779 61.4918 44.7382 62.3423 48.7498 61.8555C52.7613 61.3687 56.4987 59.5719 59.3796 56.7452C62.2605 53.9185 64.123 50.2206 64.6769 46.2279C65.2308 42.2351 64.445 38.1717 62.4419 34.6709C60.4388 31.1701 57.331 28.4285 53.6027 26.8734C49.8745 25.3184 45.7352 25.0372 41.8299 26.0736C37.9247 27.11 34.4729 29.4059 32.0124 32.6035C29.5519 35.801 28.2209 39.7206 28.2269 43.7514C28.2237 47.0937 29.1503 50.3712 30.9038 53.2192L31.3823 54.0061L29.546 60.8167L36.4386 58.985Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M54.9566 46.8847C54.5093 46.5249 53.9856 46.2716 53.4254 46.1442C52.8651 46.0168 52.2831 46.0186 51.7236 46.1495C50.8831 46.4977 50.3399 47.8134 49.7968 48.4713C49.6823 48.629 49.514 48.7396 49.3235 48.7823C49.133 48.8251 48.9335 48.797 48.7623 48.7034C45.6849 47.5012 43.1055 45.2965 41.4429 42.4475C41.3011 42.2697 41.2339 42.044 41.2557 41.8178C41.2774 41.5916 41.3862 41.3827 41.5593 41.235C42.165 40.6368 42.6098 39.8959 42.8524 39.0809C42.9063 38.1818 42.6998 37.2863 42.2576 36.5011C41.9157 35.4002 41.265 34.42 40.3825 33.6762C39.9273 33.472 39.4225 33.4036 38.9292 33.4791C38.4359 33.5546 37.975 33.7709 37.6021 34.1019C36.9548 34.6589 36.4411 35.3537 36.0987 36.135C35.7562 36.9163 35.5939 37.7643 35.6236 38.6165C35.6256 39.0951 35.6864 39.5716 35.8046 40.0354C36.1049 41.1497 36.5667 42.2144 37.1754 43.1956C37.6145 43.9473 38.0937 44.6749 38.6108 45.3755C40.2914 47.6767 42.4038 49.6305 44.831 51.1284C46.049 51.8897 47.3507 52.5086 48.7105 52.973C50.1231 53.6117 51.6827 53.8568 53.2237 53.6824C54.1018 53.5499 54.9337 53.2041 55.6462 52.6755C56.3588 52.1469 56.9302 51.4518 57.3102 50.6512C57.5334 50.1675 57.6012 49.6269 57.5042 49.1033C57.2714 48.0327 55.836 47.4007 54.9566 46.8847Z"
                    fill="white"
                  />
                </svg>
              </button>

              <button className="group transition-all duration-500 hover:-translate-y-2">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 92 92"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.638672"
                    y="0.5"
                    width="90.5618"
                    height="90.5618"
                    rx="14.5"
                    fill="white"
                    stroke="#C4CFE3"
                  />
                  <path
                    d="M22.0065 66.1236H30.4893V45.5227L18.3711 36.4341V62.4881C18.3711 64.4997 20.001 66.1236 22.0065 66.1236Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M59.5732 66.1236H68.056C70.0676 66.1236 71.6914 64.4937 71.6914 62.4881V36.4341L59.5732 45.5227"
                    fill="#34A853"
                  />
                  <path
                    d="M59.5732 29.7693V45.5229L71.6914 36.4343V31.587C71.6914 27.0912 66.5594 24.5282 62.9663 27.2245"
                    fill="#FBBC04"
                  />
                  <path
                    d="M30.4893 45.5227V29.769L45.0311 40.6754L59.5729 29.769V45.5227L45.0311 56.429"
                    fill="#EA4335"
                  />
                  <path
                    d="M18.3711 31.587V36.4343L30.4893 45.5229V29.7693L27.0962 27.2245C23.4971 24.5282 18.3711 27.0912 18.3711 31.587Z"
                    fill="#C5221F"
                  />
                </svg>
              </button>
              <button className="group transition-all duration-500 hover:-translate-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 93 93"
                  fill="none"
                >
                  <rect
                    x="1.13867"
                    y="1"
                    width="91.5618"
                    height="91.5618"
                    rx="15"
                    fill="#FF0000"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M67.5615 29.2428C69.8115 29.8504 71.58 31.6234 72.1778 33.8708C73.2654 37.9495 73.2654 46.4647 73.2654 46.4647C73.2654 46.4647 73.2654 54.98 72.1778 59.0586C71.5717 61.3144 69.8032 63.0873 67.5615 63.6866C63.4932 64.7771 47.1703 64.7771 47.1703 64.7771C47.1703 64.7771 30.8557 64.7771 26.7791 63.6866C24.5291 63.079 22.7606 61.306 22.1628 59.0586C21.0752 54.98 21.0752 46.4647 21.0752 46.4647C21.0752 46.4647 21.0752 37.9495 22.1628 33.8708C22.7689 31.615 24.5374 29.8421 26.7791 29.2428C30.8557 28.1523 47.1703 28.1523 47.1703 28.1523C47.1703 28.1523 63.4932 28.1523 67.5615 29.2428ZM55.5142 46.4647L41.9561 54.314V38.6154L55.5142 46.4647Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Newsletter  */}

          <div className="w-full md:w-1/3 h-auto p-8 flex flex-col items-center text-center  justify-center ">
            <h3 className="text-[18px]   m-0 font-bold text-[#6CC2EE] ">
              Our Vision
            </h3>
            <p className=" text-[#6CC2EE] text-[13px] mb-5 ">
              To become a global leader in geospatial innovation, shaping the
              future of smart cities, digital transformation, and spatial
              intelligence across industries.
            </p>

            <h3 className="text-[18px] m-0 font-bold text-[#6CC2EE] ">
              Our Mission
            </h3>
            <p className=" text-[#6CC2EE] text-[13px] ">
              To deliver integrated geospatial systems, services, and solutions
              that empower organizations to make smarter decisions, enhance
              operational efficiency, and achieve sustainable growth.
            </p>
          </div>
        </div>
      </RevealScale>
      <div className="flex h-5 bg-black text-white justify-center text-center items-center p-10">
        © 2025 ETQAN Geoinformatics Systems. All rights reserved.
      </div>
    </>
  );
}
