import React from "react";
import TextSection from "./TextSection/TextSection";

export default function MissionStatement() {
  return (
    <section className="mission">
      <TextSection
        section={"mission"}
        message={"Explore the site"}
        caption={"my mission"}
        subcaption={
          "Elaborate a bit more about what you do and how you serve your ideal clients. Make it clear and concise so your potential client knows exactly how you can benefit them from the get go. "
        }
      ></TextSection>
    </section>
  );
}
