# Minehut Storyteller
A simple cloudflare worker that returns the parsed sentence from [Minehut's Storyteller](https://github.com/Minehut/storyteller).

## Endpoints
- https://minehut-storyteller.tarna.workers.dev - Returns the parsed sentence, the replacements used, and original sentence.

### Example Response
<details>
<summary>Example JSON Response</summary>

```json
{
    "response": "In an unexpected twist, _Tarna_ revamped ad integration in ViaRewind, setting it apart from its previous version.",
    "sentence": "In an unexpected twist, [people] revamped [functions] in [things], setting it apart from its previous version.",
    "replacements": {
        "people": [
            "_Tarna_"
        ],
        "functions": [
            "ad integration"
        ],
        "things": [
            "ViaRewind"
        ]
    }
}
```

</details>

## Deploy
[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/tarna/minehut-storyteller-worker)

## Usage
### JavaScript / TypeScript
```js
const data = await fetch('https://minehut-storyteller.tarna.workers.dev').then(res => res.json());
console.log(data);
```

### Python
```py
import requests

response = requests.get('https://minehut-storyteller.tarna.workers.dev')
data = response.json()
print(data)
```

### Kotlin
```kotlin
import org.json.JSONObject
import java.net.HttpURLConnection
import java.net.URI

fun main() {
    val url = URI.create("https://minehut-storyteller.tarna.workers.dev").toURL()
    with(url.openConnection() as HttpURLConnection) {
        requestMethod = "GET"

        inputStream.bufferedReader().use {
            val response = it.readText()
            val json = JSONObject(response)
            println(json.toString(4))
        }
    }
}
```

### Java
```java
import org.json.JSONObject;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URI;

public class Main {
    public static void main(String[] args) {
        try {
            URI url = URI.create("https://minehut-storyteller.tarna.workers.dev");
            HttpURLConnection conn = (HttpURLConnection) url.toURL().openConnection();
            conn.setRequestMethod("GET");

            BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            String inputLine;
            StringBuilder content = new StringBuilder();
            while ((inputLine = in.readLine()) != null) {
                content.append(inputLine);
            }

            in.close();
            conn.disconnect();

            JSONObject json = new JSONObject(content.toString());
            System.out.println(json.toString(4));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```