import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapStagger = () => {
  // TODO: Implement the gsap.stagger() method
  useGSAP(()=>{
    gsap.to('.stagger-box', {
      y: 250,//Define the end position
      rotation: 360,//Define the rotation in degrees
      borderRadius: '100%',//Define the borderRadius of the elements
      repeat: -1,//Define the animation as a loop
      yoyo: true,//Define it must reverse the animation in the end
      //stagger: 0.5,
      stagger: {
        amount: 5,//Define the "amount of time" between each animation
        grid: [2, 1],//(columns, rows) => Define the number of rows and columns that the animation must be applied
        axis: 'y',//Define the axios the animation will happend
        ease: 'circ.inOut',//Define a effect
        from: 'center'//Define where the animaiton must start 
      }
    })
  }, [])
  return (
    <main>
      <h1>GsapStagger</h1>

      <p className="mt-5 text-gray-500">
        GSAP stagger is a feature that allows you to apply animations with a
        staggered delay to a group of elements.
      </p>

      <p className="mt-5 text-gray-500">
        By using the stagger feature in GSAP, you can specify the amount of time
        to stagger the animations between each element, as well as customize the
        easing and duration of each individual animation. This enables you to
        create dynamic and visually appealing effects, such as staggered fades,
        rotations, movements, and more.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://gsap.com/resources/getting-started/Staggers"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          Gsap Stagger
        </a>{" "}
        feature.
      </p>

      <div className="mt-20">
        <div className="flex gap-5">
          <div className="w-20 h-20 bg-indigo-200 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-300 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-400 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-500 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-600 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-700 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-800 rounded-lg stagger-box" />
        </div>
      </div>
    </main>
  );
};

export default GsapStagger;
