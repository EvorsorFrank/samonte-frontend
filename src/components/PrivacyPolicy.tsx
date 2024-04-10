import { useState, useContext } from "react";
import { locationData } from "../App"

interface PrivacyPolicyProps {
  isVisible: boolean;
  onClose: any;
}

function PrivacyPolicy({ isVisible, onClose }: PrivacyPolicyProps) {
  const location = useContext(locationData)
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    const scrollTop = target.scrollTop;
    const scrollHeight = target.scrollHeight;
    const clientHeight = target.clientHeight;

    if (scrollTop + 1 > scrollHeight - clientHeight) {
      setScrolled(true);
    }
  };
  if (!isVisible) {
    return null;
  } else {
    return (
      <div className={`fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm text-center justify-center items-center z-40 flex`}>
        <div className="min-w-[300px] max-w-[420px] flex flex-col  rounded-2xl bg-white border-black border text-black text-center justify-center items-center">
          <div className='text-lg font-semibold m-2'>
            To Continue, you need to Read and Accept our Privacy Policy and turn on Location
          </div>
          <div id="privacyPolicyContent" className="ml-2 w-[350px] max-h-[200px] mx-2 border border-black overflow-y-auto" onScroll={handleScroll}>
            <div className="text-lg mt-3 font-bold">
              Data Privacy Policy
            </div>
            <div className="text-lg font-bold mx-5 mt-5">
              1. Introduction
            </div>
            <div className="text-base">
              Welcome to Plant Disease Identifier App. This Privacy Policy outlines how we collect, use, disclose,
              and protect your personal information when you use our App. By using our App, you consent to the
              practices described in this Privacy Policy.
            </div>
            <div className="text-lg font-bold mx-5 mt-5">
              2. Information We Collect
            </div>
            <div className="text-base">
              Automatically Collected Information: We may also collect certain information automatically when you use
              our App, such as:
            </div>
            <div className="text-sm ml-3 font-semibold">
              • Location Data
            </div>
            <div className="text-sm ml-3 font-semibold">
              • Data about plant diseases identified using the app
            </div>
            <div className="text-lg font-bold mx-5 mt-5">
              3. How we use your information
            </div>
            <div className="text-base">
              We may use the information collected for the following purposes:
            </div>
            <div className="text-base ml-1 font-semibold">
              Location Data:
            </div>
            <div className="text-base ml-3">
              We collect location data to display maps showing where plant diseases have been identified by other users of the App. This information is aggregated and anonymized
            </div>
            <div className="text-base ml-1 font-semibold">
              Disease Identification Data:
            </div>
            <div className="text-base ml-3">
              We use the data about plant diseases identified through the app to provide valuable information to users and researchers in the field of agriculture. This data can help
              address agriculture-related problems and support research efforts.
            </div>
            <div className="text-lg font-bold mx-5 mt-5">
              4. Sharing of Your Information
            </div>
            <div className="text-base">
              We may share your information in the following circumstances:
            </div>
            <div className="text-base ml-1 font-semibold">
              Aggregated and Anonymized Data:
            </div>
            <div className="text-base ml-3">
              We may share aggregated and anonymized information, including location data and disease identification data, with third parties for research, analysis, and statistical purposes.
            </div>
            <div className="text-base ml-1 font-semibold">
              Disease Identification Data:
            </div>
            <div className="text-base ml-3">
              We may disclose your information to comply with legal obligations, such as responding to subpoenas or other lawful requests for information.
            </div>
            <div className="text-lg font-bold mx-5 mt-5">
              5. Your Choice
            </div>
            <div className="text-base">
              You have certain rights regarding your information, including the right to:
            </div>
            <div className="text-sm ml-3 font-semibold">
              • Access the information we have about you.
            </div>
            <div className="text-sm ml-3 font-semibold">
              • Correct inaccuracies in your information.
            </div>
            <div className="text-sm ml-3 font-semibold">
              • Delete your information (subject to applicable legal requirements).
            </div>
            <div className="text-sm ml-3 font-semibold">
              • Opt-out of certain data collection and use, where applicable.
            </div>
            <div className="text-lg font-bold mx-5 mt-5">
              6. Contact Information
            </div>
            <div className="text-base">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </div>
            <div className="text-sm ml-3 font-semibold">
              fasamonte@tau.edu.ph
            </div>
            <div className="text-lg font-bold mx-5 mt-5">
              7. Changes to this Privacy Policy
            </div>
            <div className="text-base">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational,
              legal, or regulatory reasons. We encourage you to review this Privacy Policy periodically.
            </div>
            <div className="text-lg font-bold mx-5 mt-5">
              8. Effective Date
            </div>
            <div className="text-base">
              This Privacy Policy is effective as of <b>September 23, 2023</b>
            </div>
          </div>
          <div className="flex flex-col my-2">
            <button onClick={() => onClose()} disabled={!scrolled} className={`${scrolled ? 'text-black border-black' : 'text-gray-600 border-gray-600'} border rounded-full py-1 px-4`}>
              { scrolled ? 'I Understand and Accept' : 'Read the Privacy Policy First'}
            </button>

          </div>
        </div>
      </div>
    )
  }
}

export default PrivacyPolicy