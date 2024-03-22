import pandas as pd
from fastapi import FastAPI, HTTPException
import spacy
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Assuming you have initialized your nlp model
nlp = spacy.load("en_core_web_sm")

# Load your DataFrame or initialize it
df = pd.to_csv("cases1.csv",index = False)
print(df.info)
# Initialize FastAPI app
app = FastAPI()

# Define an endpoint to receive the prompt


# Define a request body model
class PromptInput(BaseModel):
    prompt: str

# Define an endpoint to receive the prompt in the request body
@app.post("/calculate_similarity/")
async def calculate_similarity(prompt_input: PromptInput):
    try:
        # Process the prompt with your NLP model
        prompt_doc = nlp(prompt_input.prompt)

        # Calculate similarity scores
        df['score'] = df['nlp'].apply(lambda x: x.similarity(prompt_doc))

        # Sort DataFrame by scores
        df_sorted = df.sort_values('score', ascending=False)

        # Take top 2 rows
        top_2 = df_sorted.head(2)

        # Convert the top 2 rows to JSON
        top_2_json = top_2.to_json(orient='records')

        return top_2_json

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
