import requests

response = requests.get("http://127.0.0.1:8000/items/")

if response.ok:
    print("✅ Success:", response.status_code)
elif 400 <= response.status_code < 500:
    print("⚠️ Client error:", response.status_code)
elif 500 <= response.status_code < 600:
    print("❌ Server error:", response.status_code)
else:
    print("ℹ️ Other status:", response.status_code)
print("Response content:", response.text)
