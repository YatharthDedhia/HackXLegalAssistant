import { useEffect, useState } from "react";
import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import ReactMarkdown from 'react-markdown';


const Input = () => {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState("");
  const [caseInput, setCaseInput] = useState("");

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_UNSPECIFIED,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DEROGATORY,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_TOXICITY,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_VIOLENCE,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUAL,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_MEDICAL,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    }
  ];
  const genAI = new GoogleGenerativeAI(
    "AIzaSyCpXuKG4nlPYHe0XDtRn0iiW32KbPQTt9o"
  );
  const geminiSummarize = async (caseDetails) => {
    const model = genAI.getGenerativeModel({
      model: "gemini-pro",
      options: { safetySettings }
    });

    const prompt = `
    You are a Legal AI Assistant.
    I am providing you with case details.
    Summarise this pointwise for me!

    Case Details:
    `+ caseDetails;

    console.log("calling gemini\n" + prompt)

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    setApiData(text.toString()); // Ensure apiData is a string
    setLoading(false);
  };

  const geminiCitations = async (caseDetails) => {
    const model = genAI.getGenerativeModel({
      model: "gemini-pro",
      options: { safetySettings }
    });

    const prompt = `
    You are a Legal AI Assistant.
    I am providing you with case details.
    Give me the Sections of constitution applicable to the case
    Give output in Markdown format,pointwise with key being Law Number and value being a very short description of the Law

    Case Details:
    `+ caseDetails;

    console.log("calling gemini\n" + prompt)

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    setApiData(text.toString()); // Ensure apiData is a string
    setLoading(false);
  };

  return (
    <div className="input-field mt-10 w-full">
      <div class="mb-6 sm:flex sm:flex-row sm:w-3/4 sm:mx-auto justify-around flex flex-col gap-3 w-11/12 mx-12  ">
        <textarea
          type="text"
          id="default-input"
          class="bg-gray-300  text-gray-900 text-md  rounded-xl sm:w-5/12 w-10/12 h-56 border border-10 border-blue-500 dark:bg-gray-700 dark:text-white dark:border-blue-500 shadow-xl"
          placeholder="Enter Case Details..." value={caseInput} onChange={e => setCaseInput(e.target.value)}
        />
        <div className="output-field bg-gray-300 border border-10 border-blue-500 text-gray-900 text-md rounded-xl sm:w-5/12 w-10/12  block p-3 dark:bg-gray-700  dark:text-white dark:border-blue-500 overflow-y-auto h-56 text-left">
          <ReactMarkdown>{apiData}</ReactMarkdown>
        </div>
      </div>


      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" onClick={(e) => {
        e.preventDefault(); // Prevent default form submission behavior
        geminiSummarize(caseInput); // Call callGemini with caseInput when form is submitted
      }}>
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Summarize
        </span>
      </button>
      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" onClick={(e) => {
        e.preventDefault(); // Prevent default form submission behavior
        geminiCitations(caseInput); // Call callGemini with caseInput when form is submitted
      }}>
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Citation
        </span>
      </button>
      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Similar Case
        </span>
      </button>
    </div>
  );
};

export default Input;
