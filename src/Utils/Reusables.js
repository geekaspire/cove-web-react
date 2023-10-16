export const defaultRoommateSelectItems = {
  liveWith: [
    { value: "Any", label: "Any" },
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ],
  religion: [
    { value: "Hinduism", label: "Hinduism" },
    { value: "Islam", label: "Islam" },
    { value: "Christianity", label: "Christianity" },
    { value: "Buddhism", label: "Buddhism" },
    { value: "Sikhism", label: "Sikhism" },
    { value: "Others", label: "Others" },
  ],
  suitableFor: [
    { value: "Any", label: "Any" },
    { value: "Student", label: "Student" },
    { value: "Professional", label: "Professional" },
  ],
  foodType: [
    { value: "Any", label: "Any" },
    { value: "Non-Veg", label: "Non-Veg" },
    { value: "Veg", label: "Veg" },
  ],
  languages: [
    { value: "English", label: "English" },
    { value: "Hindi", label: "Hindi" },
    { value: "Malayalam", label: "Malayalam" },
    { value: "Kannada", label: "Kannada" },
    { value: "Telgue", label: "Telgue" },
    { value: "Tamil", label: "Tamil" },
    { value: "Bengali", label: "Bengali" },
    { value: "Punjabi", label: "Punjabi" },
    { value: "Assamese", label: "Assamese" },
    { value: "Rajasthani", label: "Rajasthani" },
    { value: "Kashmiri", label: "Kashmiri" },
    { value: "Urdu", label: "Urdu" },
    { value: "Marathi", label: "Marathi" },
    { value: "Gujarati", label: "Gujarati" },
    { value: "Odia", label: "Odia" },
    { value: "Others", label: "Others" },
  ],
  smokingHabit: [
    { value: "Social Smoker", label: "Social Smoker" },
    { value: "Non Smoker", label: "Non Smoker" },
    { value: "Drinker", label: "Drinker" },
    { value: "Non Drinker", label: "Non Drinker" },
    { value: "No habits", label: "No habits" },
  ],
  personality: [
    { value: "Photography", label: "Photography" },
    { value: "Eating out", label: "Eating out" },
    { value: "Netflix", label: "Netflix" },
    { value: "Travelling", label: "Travelling" },
    { value: "Sports", label: "Sports" },
    { value: "Yoga", label: "Yoga" },
    { value: "Pet Lover", label: "Pet Lover" },
    { value: "Cars & Bikes", label: "Cars & Bikes" },
    { value: "Arts & Culture", label: "Arts & Culture" },
    { value: "Partyholic", label: "Partyholic" },
    { value: "Book lover", label: "Book lover" },
    { value: "Fashionista", label: "Fashionista" },
    { value: "Night Owl", label: "Night Owl" },
    { value: "Music", label: "Music" },
    { value: "Foodie", label: "Foodie" },
  ],
  petType: [
    { value: "Any", label: "Any" },
    { value: "Dog", label: "Dog" },
    { value: "Cat", label: "Cat" },
    { value: "Not interested", label: "Not interested" },
  ],
};

export const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
