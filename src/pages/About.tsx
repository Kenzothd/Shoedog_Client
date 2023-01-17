import React from "react";

function AboutPage() {
  return (
    <>
      <div className="mt-[8rem] mb-[4rem] mx-[15rem] flex flex-col gap-6">
        <div className="flex justify-center">
          <img
            className="border-2 border-slate-400 rounded-full h-60 w-60 text-center"
            src="https://avatars.githubusercontent.com/u/103299973?v=4"
            alt="profile-pic"
          />
        </div>
        <div>
          <h2 className="font-semibold text-lg">Creator Profile</h2>
          <p>
            Hi there, my name is Kenzo!👋 I am an analytical and solution-focus
            individual who has streamlined processes and sustained the
            competitive advantage in a start-up company. Having experience in a
            fast-paced environment, I am a fast learner and able to adapt to new
            technologies quickly and incorporate them into my projects. I
            appreciate tackling challenges from the real world and am looking
            forward to a challenging position as a software engineer.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">Brand Story</h2>
          <p>
            Have you considered using an e-commerce marketplace built with
            statistical data to track your favourite pair of shoes? ShoeDog is a
            website where shoe aficionados may purchase and sell shoes. It
            offers real-time data, alert prompts, and the ability to keep track
            of the status of a favourite pair of shoes.
          </p>
        </div>

        <div className="mt-2">
          <h2 className="font-semibold text-lg">References:</h2>
          <ul>
            <li className="text-gray-500 hover:text-slate-600">
              <a
                href="https://www.figma.com/file/R3KFHdSDhXDEP2dcyy4HSv/ShoeDog?node-id=0%3A1&t=cmePQZLjIHfMzRKh-1"
                target="_blank"
                rel="noreferrer"
              >
                ShoeDog Figma
              </a>
            </li>
            <li className="text-gray-500 hover:text-gray-600">
              <a
                href="https://drive.google.com/file/d/1rZTL4pdaRPxEEp2aebjG9BIismeefMno/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                ShoeDog Data Flow
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
