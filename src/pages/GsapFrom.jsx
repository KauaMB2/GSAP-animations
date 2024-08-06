import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFrom = () => {
  // TODO: Implement the gsap.from() method
  useGSAP(()=>{
    gsap.from("#green-box", {
      x: 250,//When we use the .from method, actually the picture starts in the position 250 and go to the position 0. It does the oposite of gsap.to.
      repeat: -1,//Make it be a loop
      yoyo: true,//Make the animation reverse itself
      rotation: 360,//Define the degrees of rotation of the picture
      duration: 2,//Define the duration of the animation in seconds
      ease: 'power1.inOut'//Define a effect in the animation
    })
  },[])
  return (
    <main>
      <h1>GsapFrom</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.from()</code> method is used to animate elements from a
        new state to their current state.
      </p>

      <p className="mt-5 text-gray-500">
        The <code>gsap.from()</code> method is similar to the{" "}
        <code>gsap.to()</code> method, but the difference is that the{" "}
        <code>gsap.from()</code> method animates elements from a new state to
        their current state, while the <code>gsap.to()</code> method animates
        elements from their current state to a new state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.from()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.from()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="green-box" className="w-20 h-20 bg-green-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapFrom;
