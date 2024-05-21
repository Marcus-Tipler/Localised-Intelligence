import requests
import json

url = "http://localhost:11434/api/generate"
headers = {"Content-Type": "application/json"}
data = {
    "model": "paul",
    "prompt": "What is water made of?"
}

response = requests.post(url, headers=headers, data=json.dumps(data))
print(response.json())