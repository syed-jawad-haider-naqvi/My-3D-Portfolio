import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper cursor-pointer" onClick={()=>window.location="https://drive.google.com/file/d/17O7PBlDaCM5G0P8GyStzefzzvCXxb8tP/view?usp=drive_link"}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="PetVerse Interface" />
            </div>
            <div className="text-content">
              <h2>
              PetVerse Vets: All-in-one veterinary platform connecting pet owners with vets through seamless appointments, payments, and communication.              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with MERN Stack with Stripe payment integration for a fast,
                user-friendly experience for pet owners and vets.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>RestoMania:</h2>
              <p className="text-white-50 md:text-xl">
               Market-Ready Restauraunt Management Desktop Platform in C#, .NET and Microsoft SQL
              </p>
            </div>
           
            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/fakeNewsDt.png" alt="YC Directory App" />
              </div>
              <h2>Latest Ongoing: AI-Based Fake News Detection System</h2>
              <p className="text-white-50 md:text-xl">
              Python, Flask, Streamlit, Scikit-Learn, NumPy, Matplotlib, Pandas, TF-IDF
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;