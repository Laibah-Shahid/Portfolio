// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { SiNextdotjs, SiMongodb, SiExpress, SiMui, SiTailwindcss, SiTypescript, SiRedux} from "react-icons/si";
import { DiNodejs,  DiJavascript } from "react-icons/di";
import { FaSass, FaHtml5, FaBootstrap, FaCss3Alt, FaReact, FaGithub  } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                               <SiNextdotjs className="skill-icon"/>
                                <h5>NextJs</h5>
                            </div>
                            <div className="item">
                                <FaReact className="skill-icon"/>
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <SiRedux className="skill-icon"/>
                                <h5>Redux</h5>
                            </div>
                            <div className="item">
                                <SiTypescript className="skill-icon"/>
                                <h5>TS</h5>
                            </div>
                            <div className="item">
                                <SiMongodb className="skill-icon"/>
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <GrMysql className="skill-icon"/>
                                <h5>MySql</h5>
                            </div>
                            <div className="item">
                                <SiExpress className="skill-icon"/>
                                <h5>ExpressJS</h5>
                            </div>
                            <div className="item">
                                <DiNodejs className="skill-icon"/>
                                <h5>NodeJS</h5>
                            </div>
                            <div className="item">
                                <SiMui className="skill-icon"/>
                                <h5>MUI</h5>
                            </div>
                            <div className="item">
                                <SiTailwindcss className="skill-icon"/>
                                <h5>TailwindCSS</h5>
                            </div>
                            <div className="item">
                                <FaSass className="skill-icon"/>
                                <h5>SASS</h5>
                            </div>
                            <div className="item">
                                <FaBootstrap className="skill-icon"/>
                                <h5>BootStrap</h5>
                            </div>
                            <div className="item">
                                <FaGithub className="skill-icon"/>
                                <h5>Github</h5>
                            </div>
                            <div className="item">
                                <DiJavascript className="skill-icon"/>
                                <h5>JS</h5>
                            </div>
                            <div className="item">
                                <FaHtml5 className="skill-icon"/>
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <FaCss3Alt className="skill-icon"/>
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <TbBrandCpp className="skill-icon"/>
                                <h5>C/C++</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}