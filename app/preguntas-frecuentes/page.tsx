"use client";

import { useState } from "react";
import Accordion from "../components/Accordion/Accordion";
import Banner from "../components/Banner";
import Container from "../components/Container";

const faq = {
  question: "¿Shooberino maximum borkdrive many pats?",
  Answer: (
    <>
      <p className="mb-[20px]">
        Doggo ipsum most angery pupper I have ever seen porgo woofer big ol,
        porgo. Floofs long water shoob you are doing me the shock long bois aqua
        doggo fat boi, heckin good boys the neighborhood pupper boofers floofs.
        Maximum borkdrive very taste wow woofer length boy big ol shooberino
        doggo, super chub you are doing me a frighten h*ck the neighborhood
        pupper big ol pupper. Borkf dat tungg tho you are doing me a frighten
        wrinkler, stop it fren boof big ol, he made many woofs extremely
        cuuuuuute. Heckin good boys and girls corgo blep sub woofer porgo, sub
        woofer borkdrive woofer, I am bekom fat dat tungg tho shoober. Super
        chub very good spot porgo doggo such treat, long woofer shoober heckin
        good boys doggo doge, smol borking doggo with a long snoot for pats very
        good spot long water shoob. Much ruin diet wow very biscit thicc big ol
        pupper heckin good boys very jealous pupper, ur givin me a spook you are
        doing me a frighten blop clouds, shoob the neighborhood pupper snoot the
        neighborhood pupper. Pupper adorable doggo doggo pats vvv, long doggo
        tungg.
      </p>
      <p>
        Big ol pupper big ol aqua doggo shoober extremely cuuuuuute, many pats
        doge big ol, fluffer most angery pupper I have ever seen heck. Wow very
        biscit ruff adorable doggo I am bekom fat yapper, borkf pupper
        puggorino. Doggo smol borking doggo with a long snoot for pats puggorino
        ruff very hand that feed shibe lotsa pats shoob, heckin good boys and
        girls big ol pupper borking doggo clouds. blop. Lotsa pats sub woofer
        most angery pupper I have ever seen noodle horse very hand that feed
        shibe shibe doggo, heckin angery woofer shoober yapper bork borkdrive.
        Shooberino maximum borkdrive many pats ur givin me a spook shoober
        length boy, wow very biscit maximum borkdrive long doggo tungg, blep
        clouds very good spot very taste wow. you are doing me the shock puggo.
        Borking doggo wow such tempt thicc stop it fren the neighborhood pupper,
        wrinkler smol most angery pupper I have ever seen.
      </p>
    </>
  ),
};

const Faqs = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <Container className="my-[50px]">
      <div className="grid grid-cols-12 gap-[20px]">
        <div className="col-span-12 md:col-span-8 space-y-[20px]">
          {Array.from({ length: 6 }).map((_, index) => (
            <Accordion
              key={`faq-${index}`}
              question={faq.question}
              answer={faq.Answer}
              isOpen={index === activeFaq}
              onClick={() => {
                setActiveFaq(index);
              }}
            />
          ))}
        </div>
        <div className="col-span-12 md:col-span-4">
          <Banner />
        </div>
      </div>
    </Container>
  );
};

export default Faqs;
