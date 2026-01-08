import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
//
export async function main() {
  const chatCompletion = await getGroqChatCompletion();
  // Print the completion returned by the LLM.
  console.log(chatCompletion.choices[0]?.message?.content || "");
}

export async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    temperature: 0.1,
    messages: [
      {
        role: "system",
        content:
          "You are a smart and well educated nd experienced english trainer. You should train english properly to the users. Be polite always! You should answer only question related to english learning nothing else.",
      },

      {
        role: "user",
        content: "Tell me how can i learn english properly?",
      },
    ],
    model: "openai/gpt-oss-20b",
  });
}

// Run the main function
main();
