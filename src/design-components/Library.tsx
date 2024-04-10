import { useState } from "react"
import LibraryModal from "../extensions/LibraryModal"
import * as fuzzball from "fuzzball";

const Library = () => {

  const [selectedClass, setSelectedClass] = useState<string>('')
  const [showLibraryModal, setShowLibraryModal] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [suggestedTerm, setSuggestedTerm] = useState<string | null>(null);

  const listDiseases = [
    "Bean Rust",
    "Bean Angular Leaf Spot",
    "Corn Common Rust",
    "Corn Gray Leaf Spot",
    "Corn Northern Leaf Blight",
    "Rice Bacterial Leaf Blight",
    "Rice Brown Spot",
    "Rice Leaf Blast",
    "Rice Leaf Scald",
    "Rice Narrow Brown Spot",
    "Tomato Bacterial Spot",
    "Tomato Early Blight",
    "Tomato Late Blight",
    "Tomato Leaf Mold",
    "Tomato Mosaic Virus",
    "Tomato Septoria Leaf Spot",
    "Tomato Target Spot",
    "Tomato Yellow Leaf Curl Virus"
  ]


  const handleItemClick = (disease: string) => {
    setSelectedClass(disease);
    setShowLibraryModal(true);
  };

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query.trim() === "") {
      setSuggestedTerm(null);
      return;
    }
    const filteredDiseases = listDiseases.filter(disease =>
      disease.toLowerCase().includes(query.toLowerCase())
    );
    if (filteredDiseases.length === 0) {
      const closestMatch = fuzzball.extract(query, listDiseases, { scorer: fuzzball.ratio });
      if (closestMatch.length > 0) {
        setSuggestedTerm(closestMatch[0][0]);
      } else {
        setSuggestedTerm(null);
      }
    } else {
      setSuggestedTerm(null);
    }
  };


  const handleSuggestedClick = () => {
    setSearchQuery(suggestedTerm!);
    setSuggestedTerm(null);
  };

  const filteredDiseases = listDiseases.filter(disease =>
    disease.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {(selectedClass !== "") && (
        <LibraryModal
          isVisible={showLibraryModal}
          onClose={() => setShowLibraryModal(false)}
          selectedClass={selectedClass}
        />
      )}
      <div className="text-pretty text-center mb-1">
        Find what plant disease information you are looking for here!
      </div>
      <input
        type="text"
        placeholder="Filter/Search Here..."
        value={searchQuery}
        onChange={handleSearchInputChange}
        className="border border-black rounded px-2 py-1 mb-2 w-full"
      />
      {suggestedTerm && (
        <div className="text-sm mt-2">
          Did you mean{" "}
          <span className="text-blue-500 cursor-pointer hover:underline" onClick={handleSuggestedClick}>
            {suggestedTerm}
          </span>{" "}
          ?
        </div>
      )}
      <ul className="border border-black max-h-[400px] overflow-y-auto">
        {filteredDiseases.map((disease, index) => (
          <li
            className="py-2 border-y-[1px] border-black cursor-pointer hover:bg-yellow-300 indent-4"
            key={index}
            onClick={() => handleItemClick(disease)}
          >
            {disease}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Library