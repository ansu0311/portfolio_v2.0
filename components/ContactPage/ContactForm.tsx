import { PageInfo } from "@/typings";
import { ContactList, SocialList } from "./ContactList";
import ContactInput from "./ContactInput";
import { useState } from "react";
import {ButtonDesign2} from "../ButtonDesign/ButtonDesign";
import { useRouter } from "next/router";

type Props = {
  pageInfo: PageInfo;
};

export default function ContactForm({ pageInfo }: Props) {

    // for routing
  const router = useRouter();

    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[organization,setOrganization] = useState("")
    const[service,setService] = useState("")
    const[message,setMessage] = useState("")

    function handleSubmit(){
        router.push(`mailto:ansuman.nayak03@gmail.com?cc=nsatyam95@gmail.com&subject=${service}%20request&body=${message}%0D%0A%0D%0A%0D%0AFrom%0D%0A${name}%0D%0A${organization}%0D%0A${message}%0D%0A${email}`)
    }

  return (
    <main className="pt-8 sm:pt-10 md:pt-8 lg:pt-5 h-auto max-w-5xl px-4 sm:px-8 xl:px-0 flex justify-center mx-auto">
      <div className="flex flex-col sm:grid h-screen w-full grid-cols-12">
        <div className="col-span-9  pb-5 sm:pb-0 px-10">
            <ContactInput type={"text"} indexNumber={1} label="What's your name?" placeholder="FirstName LastName" onChange={setName} />
            <ContactInput type={"email"} indexNumber={2} label="What's your email?" placeholder="username@example.com" onChange={setEmail} />
            <ContactInput type={"text"} indexNumber={3} label="What's the name of your organization?" placeholder="Company Name" onChange={setOrganization} />
            <ContactInput type={"text"} indexNumber={4} label="What services are you looking for?" placeholder="Web Design, Web Development ..." onChange={setService} />
            <ContactInput type={"text"} indexNumber={5} label="Your message" placeholder="Hello Ansuman, Can you help us with..." onChange={setMessage} />
            <div className="flex border-t border-white/70 mt-10 pt-4 justify-center">
                <ButtonDesign2 onClick={handleSubmit} text="Submit"  />
            </div>
        </div>
        <div className="col-span-3 flex flex-col px-10 sm:px-4 gap-5">
          <ContactList
            title="contact details"
            list={[pageInfo.email, pageInfo.phoneNumber]}
          />
          <ContactList
            title="Personal details"
            list={[pageInfo.address, pageInfo.role]}
          />
          <SocialList title="Social details" socials={pageInfo.socials} />
        </div>
      </div>
    </main>
  );
}
