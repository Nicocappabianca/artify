import { useState } from "react";
import { HUGGING_FACE_TOKEN, STABLE_DIFFUSION_API } from "@/constants";

const ImageGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const response = await fetch(STABLE_DIFFUSION_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${HUGGING_FACE_TOKEN}`,
      },
      body: JSON.stringify({ inputs: prompt }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate image");
    }

    const blob = await response.blob();
    setOutput(URL.createObjectURL(blob));
    setLoading(false);
  };

  return (
    <div className="imageGen">
      <div>
        <h1>Prompt Your Creativity!</h1>
      </div>
      <form className="generate-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="input"
          placeholder="type your prompt here..."
          onChange={(event) => setPrompt(event.target.value)}
        />
        <button type="submit" className={`button ${!prompt && "disabled"}`} disabled={!prompt}>
          Generate
        </button>
      </form>
      {!loading && output && (
        <div className="result-image">
          <img src={output} alt="art" />
        </div>
      )}
    </div>
  );
};

export default ImageGenerator;
