import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapText = () => {
  // TODO: Implement gsap text animation
  useGSAP(()=>{
    gsap.to('#text',{
      ease: 'power1.inOut',//Define a effect for the animation
      opacity: 1,//Define a opacity of the text
      y:0,// Define the Y position
    })
    gsap.fromTo('.para', {
      opacity: 0,//Define the initial opacity of the text
      y:20,// Define the initial y position
    },
    {
      opacity: 1,//Set the final opacity of the text
      y:0,//Set the final y position
      delay: 2,// Set a delay in seconds to load the text
      stagger: 0.8//Set a delay to load each text
    })
  },[])

  return (
    <main>
      <h1 id="text" className="opacity-0 translate-y-10">
        GsapText
      </h1>

      <p className="mt-5 text-gray-500 para">
        We can use same method like <code>gsap.to()</code>,{" "}
        <code>gsap.from()</code>, <code>gsap.fromTo()</code> and{" "}
        <code>gsap.timeline()</code> to animate text.
      </p>

      <p className="mt-5 text-gray-500 para">
        Using these methods we can achieve various text animations and effects
        like fade in, fade out, slide in, slide out, and many more.
      </p>

      <p className="mt-5 text-gray-500 para">
        For more advanced text animations and effects, you can explore the GSAP
        TextPlugin or other third-party libraries that specialize in text
        animations.
      </p>

      <p className="mt-5 text-gray-500 para">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/Plugins/TextPlugin"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          TextPlugin
        </a>{" "}
        plugin.
      </p>
    </main>
  );
};

export default GsapText;
