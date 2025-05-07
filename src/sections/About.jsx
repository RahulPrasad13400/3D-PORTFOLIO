import { Canvas } from "@react-three/fiber";
import GradientSpheres from "../components/GradientSpheres";
import TitleHeader from "../components/TitleHeader";
import { Alien } from "../../public/models/Alien";
import { OrbitControls } from "@react-three/drei";
import { bentoSocialLinks } from "../constants";

export default function About() {
  return (
    <section id="about" className="flex-center relative md:p-0 px-5">
        <GradientSpheres sphere1Class={"about-gradient-sphere about-sphere-1"} sphere2Class={"about-gradient-sphere about-sphere-2"}/>
        <div className="container w-full h-full md:my-40 my-20 relative z-10">
            <TitleHeader title="About Me" text="Passionate, adaptable, quick learner" number='01' />
            
            <div className="md:mt-20 mt-10">
                <div className="grid grid-cols-12 md:grid-rows-12 gap-5">
                    <div className="md:col-span-7 col-span-12 row-span-5">
                        <div className="bg-black-300  rounded-2xl p-7 w-full h-full">
                            <div>
                                <img src="images/flower.svg" alt="flower"
                                    className="md:w-32 w-16 flower"/>
                            </div>
                            <div className="mt-5">
                                <h1 className="text-blue-50 md:text-5xl text-3xl ">David jhonson</h1>
                                <p className="md:text-2xl mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ut blanditiis ipsa iste corrupti, eos neque maiores commodi ipsam veniam?</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-5 col-span-12 row-span-5">
                        <div className="bg-[#c8d751] hover:cursor-grab rounded-2xl w-full md:h-full h-60"> 
                            <div className="w-full h-full">
                                <Canvas>
                                    <OrbitControls enableZoom={false} />
                                    <Alien scale={2} position={[-0.5, -5.0, 0]} rotation={[0,-0.5,0]}/>
                                </Canvas>
                            </div>
                        </div>  
                    </div>

                    <div className="md:col-span-6 col-span-12 row-span-3">
                        <div className="bg-black-300  rounded-2xl p-7 w-full h-full">
                            <div className="flex flex-col h-full justify-center">
                                <h1 className="gradient-title md:text-3xl text-2xl font-medium">Web Design & Dev</h1>
                                <p className="md:text-2xl max-w-96">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, blanditiis.</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-6 col-span-12 row-span-3">
                        <div className="bg-black-300  rounded-2xl p-7 w-full h-full">
                            <div className="flex flex-col h-full justify-center">
                                <h1 className="gradient-title md:text-3xl text-2xl font-medium">Web Design & Dev</h1>
                                <p className="md:text-2xl max-w-96">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, blanditiis.</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-4 col-span-12 row-span-4">
                        <div className="bg-black-300  rounded-2xl p-7 w-full h-full">
                            <div className="flex flex-col justify-between h-full">
                                { ["Ignite Passion", "Chase Dreams", "Embrace Growth"]
                                    .map((text, index)=>{
                                        return <h1 className="gradient-title md:text-5xl text-3xl font-bold" key={index}>{text}</h1>
                                    })
                                }
                            </div>      
                        </div>
                    </div>

                    {bentoSocialLinks.map((item, index)=>{
                        return <div key={index} className="md:col-span-4 col-span-12 row-span-2">
                            <div className="bg-black-300  rounded-2xl p-7 w-full h-full">

                            </div>
                        </div>
                    })}

                </div>
            </div>
        </div>
    </section>
  )
}
