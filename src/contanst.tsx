export const MaleEvents = {
  events: [
    "100 mts",
    "200 mts",
    "400 mts",
    "800 mts",
    "1500 mts",
    "5000 mts",
    "10000 mts",
    "110 mts Hurdles",
    "400 mts Hurdles",
    "4*400 mts Relay",
    "4*100 mts Relay",
    "long jump",
    "Triple Jump",
    "High Jump",
    "Shot Put",
    "Discus Throw",
    "Javelin Throw",
    "Hammer Throw",
    "Tug Of War",
  ],
};
export const FemaleEvents = {
  events: [
    "100 mts",
    "200 mts",
    "400 mts",
    "800 mts",
    "1500 mts",
    "3000 mts",
    "100 mts Hurdles",
    "4*400 mts Relay",
    "4*100 mts Relay",
    "long jump",
    "Triple Jump",
    "High Jump",
    "Shot Put",
    "Discus Throw",
    "Javelin Throw",
    "Tug Of War",
  ],
};

export const FAQS = {
  faqs_for_students: [
    {
      title: "How can I participate in the GNDEC Athletic Meet?",
      content:
        "To participate, you need to register through the GNDEC Athletic Meet Registration App. Follow the user registration process, and you'll be able to select and compete in your preferred events.",
    },
    {
      title: "What information is required during user registration?",
      content:
        "During registration, you'll need to provide key information such as your college email (ending with @gndec.ac.in), phone number, name, password, and gender details. This ensures that only eligible students can access the system.",
    },
    {
      title: "Can I access the registration app from my mobile device?",
      content:
        "Yes, the app is mobile-friendly. You can access the registration process seamlessly from your mobile device, ensuring convenience for on-the-go participation.",
    },
    {
      title: "Are there specific events for my course or branch?",
      content:
        "Yes, the app collects academic details during registration. This information is used to categorize participants, and some events may be exclusive to specific courses or branches. Ensure your academic details are accurate for eligibility.",
    },
    {
      title: "How does the verification process work?",
      content:
        "After registration, you'll receive a verification email at your college email address. Click the verification link to confirm your email's authenticity. This step ensures data integrity and security, allowing only eligible students to access the system.",
    },
    {
      title: "What academic details are required, and why?",
      content:
        "The Academic Details section collects information like university roll numbers, courses, branches, and years of study. This data helps in participant identification, categorization, and personalization of the event selection process.",
    },
    {
      title: "Can I participate in multiple events?",
      content:
        "Yes, you can select and participate in multiple events based on your interests and eligibility. The app allows you to customize your athletic meet experience.",
    },
    // Add more FAQs for students as needed
  ],
};
export const RegisterSteps = {
  StepsToRegister: [
    {
      key: "1",
      content: (
        <>
          Download the App{" "}
          <a
            href="https://greetings-six.vercel.app/app-debug.apk"
            className="text-primary underline"
          >
            Download now
          </a>
          .
        </>
      ),
    },
    {
      key: "2",
      content: "Use Only College Email id.",
    },
    {
      key: "3",
      content: (
        <>
          If you don't have college email id then go to{" "}
          <a className="text-primary" href="">
            Help Section
          </a>{" "}
          and Fill the Form.
        </>
      ),
    },
    {
      key: "4",
      content:
        "Follow the simple steps to sign up for the events you want to participate in.",
    },
    {
      key: "5",
      content:
        "You can select 3 events atmost. It can be either 2 field events and 1 track events or 1 field event and 2 track events.",
    },

    {
      key: "6",
      content:
        "Please choose carefully, as we will not be able to accommodate any changes requested by you in the.future.",
    },
    {
      key: "7",
      content: "Keep watching Announcements for live updates of Athletic Meet.",
    },
  ],
};

export const NavItems = {
  Items: [
    {
      key:"1",
      heading: "Home",
      href:"#" 
    },
    {
      key:"2",
      heading: "Events",
      href:"#Event" 
    },
    {
      key:"3",
      heading: "Dev Team",
      href:"#DevTeam" 
    },
    {
      key:"4",
      heading: "FAQs",
      href:"#FAQ" 
    },
    {
      key:"5",
      heading: "Contact Us",
      href:"" 
    }
  ]
}