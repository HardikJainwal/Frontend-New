import HeadingText from "../Reusable/HeadingText";

const sections = [
  {
    title: "Information We Collect",
    items: [
      "Name",
      "Email address",
      "Phone number",
      "Student ID and academic details",
      "Information submitted through forms and services",
    ],
  },
  {
    title: "How We Use Information",
    items: [
      "To provide academic and student-related services",
      "To send notifications, updates, and announcements",
      "To improve website functionality and user experience",
    ],
  },
];

const infoCards = [
  {
    title: "Data Sharing",
    body: "Personal information will not be shared with third parties except where required by law or for official university operations.",
  },
  {
    title: "Data Security",
    body: "DSEU takes reasonable measures to protect user information from unauthorized access and misuse.",
  },
  {
    title: "User Rights",
    body: "Users may request correction or deletion of their information where applicable.",
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <HeadingText heading="Privacy Policy" />

      <p className="mt-6 text-gray-700 text-base leading-relaxed text-center">
        Delhi Skill and Entrepreneurship University (DSEU) values user privacy
        and is committed to protecting personal information.
      </p>

      {/* List sections */}
      <div className="mt-8 space-y-6">
        {sections.map((section) => (
          <div
            key={section.title}
            className="border-l-[3px] border-blue-600 bg-blue-50 rounded-r-lg px-5 py-4"
          >
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                  <span
                    className="mt-[6px] h-2 w-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "#F97316" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Card sections */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {infoCards.map((card) => (
          <div
            key={card.title}
            className="bg-white border border-blue-200 rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <h3 className="text-base font-semibold text-blue-800 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{card.body}</p>
          </div>
        ))}
      </div>

      {/* Contact */}
      <div className="mt-8 border-l-[3px] border-orange-500 bg-orange-50 rounded-r-lg px-5 py-4">
        <h3 className="text-lg font-semibold text-blue-900 mb-1">Contact</h3>
        <p className="text-gray-700 text-sm">
          For any privacy-related queries, please reach out to us at{" "}
          <a
            href="mailto:helpdesk-admission@dseu.ac.in"
            className="text-blue-600 hover:underline font-medium"
          >
            helpdesk-admission@dseu.ac.in
          </a>
        </p>
      </div>

      {/* Footer note */}
      <p className="mt-6 text-center text-sm text-gray-500">
        DSEU may update this Privacy Policy periodically.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
